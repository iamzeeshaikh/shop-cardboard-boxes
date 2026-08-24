#!/usr/bin/env python3

import csv
import json
import os
import re
import sys
import zipfile
from collections import Counter
from pathlib import Path
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
ANALYSIS = ROOT / "analysis"
GSC = ROOT / "https___shopcardboardboxes.com_-Performance-on-Search-2026-08-24.xlsx"
GMC_ALL = ROOT / "evidence/gmc/all-products/products_2026-08-24_02-53-24.tsv"
GMC_DISAPPROVED = ROOT / "evidence/gmc/disapproved/products_2026-08-24_02-54-35.tsv"

NS_MAIN = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
NS_REL = {"r": "http://schemas.openxmlformats.org/package/2006/relationships"}
REL_ATTR = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"


def shared_strings(archive):
    root = ET.fromstring(archive.read("xl/sharedStrings.xml"))
    values = []
    for item in root.findall("m:si", NS_MAIN):
        values.append("".join((node.text or "") for node in item.iterfind(".//m:t", NS_MAIN)))
    return values


def workbook_rows(path):
    with zipfile.ZipFile(path) as archive:
        strings = shared_strings(archive)
        workbook = ET.fromstring(archive.read("xl/workbook.xml"))
        rels = ET.fromstring(archive.read("xl/_rels/workbook.xml.rels"))
        targets = {rel.attrib["Id"]: rel.attrib["Target"] for rel in rels.findall("r:Relationship", NS_REL)}
        for sheet in workbook.findall("m:sheets/m:sheet", NS_MAIN):
            name = sheet.attrib["name"]
            target = targets[sheet.attrib[REL_ATTR]]
            xml_path = "xl/" + target.lstrip("/")
            root = ET.fromstring(archive.read(xml_path))
            rows = []
            for row in root.findall(".//m:sheetData/m:row", NS_MAIN):
                by_col = {}
                max_col = -1
                for cell in row.findall("m:c", NS_MAIN):
                    ref = cell.attrib.get("r", "A1")
                    letters = re.match(r"[A-Z]+", ref).group(0)
                    col = 0
                    for char in letters:
                        col = col * 26 + ord(char) - 64
                    col -= 1
                    value_node = cell.find("m:v", NS_MAIN)
                    value = "" if value_node is None else value_node.text or ""
                    if cell.attrib.get("t") == "s" and value:
                        value = strings[int(value)]
                    elif cell.attrib.get("t") == "inlineStr":
                        value = "".join((node.text or "") for node in cell.iterfind(".//m:t", NS_MAIN))
                    by_col[col] = value
                    max_col = max(max_col, col)
                rows.append([by_col.get(i, "") for i in range(max_col + 1)])
            yield name, rows


def number(value):
    try:
        return float(value)
    except (TypeError, ValueError):
        return 0.0


def inspect_gsc():
    sheets = dict(workbook_rows(GSC))
    pages = sheets.get("Pages", [])
    if not pages:
        raise RuntimeError("GSC Pages sheet is missing or empty")
    headers = pages[0]
    normalized = [header.strip().lower() for header in headers]
    data = []
    for values in pages[1:]:
        padded = values + [""] * (len(headers) - len(values))
        row = dict(zip(normalized, padded))
        data.append(row)

    ANALYSIS.mkdir(parents=True, exist_ok=True)
    output = ANALYSIS / "gsc-pages.csv"
    with output.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=normalized)
        writer.writeheader()
        writer.writerows(data)

    page_clicks = sum(number(row.get("clicks")) for row in data)
    page_impressions = sum(number(row.get("impressions")) for row in data)

    def table(name):
        rows = sheets.get(name, [])
        if not rows:
            return []
        table_headers = [value.strip().lower() for value in rows[0]]
        result = []
        for values in rows[1:]:
            padded = values + [""] * (len(table_headers) - len(values))
            result.append(dict(zip(table_headers, padded)))
        return result

    weighted_position_numerator = sum(
        number(row.get("position")) * number(row.get("impressions")) for row in data
    )
    summary = {
        "source_file": GSC.name,
        "sheets": {name: max(0, len(rows) - 1) for name, rows in sheets.items()},
        "pages_count": len(data),
        "page_headers": headers,
        "page_clicks": page_clicks,
        "page_impressions": page_impressions,
        "page_ctr": page_clicks / page_impressions if page_impressions else 0,
        "impression_weighted_page_position": weighted_position_numerator / page_impressions if page_impressions else 0,
        "countries": table("Countries"),
        "devices": table("Devices"),
        "search_appearance": table("Search appearance"),
        "filters": table("Filters"),
        "top_pages": sorted(
            data,
            key=lambda row: (number(row.get("clicks")), number(row.get("impressions"))),
            reverse=True,
        )[:25],
    }
    return summary


def read_tsv(path):
    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        return list(csv.DictReader(handle, delimiter="\t"))


def inspect_gmc():
    all_rows = read_tsv(GMC_ALL)
    disapproved = read_tsv(GMC_DISAPPROVED)
    overrides_path = ANALYSIS / "commercial-evidence-overrides.json"
    overrides = json.loads(overrides_path.read_text(encoding="utf-8")) if overrides_path.exists() else {}
    for row in all_rows:
        override = overrides.get(row.get("id", ""), {})
        for field in ("price",):
            if not row.get(field, "").strip() and override.get(field):
                row[field] = override[field]
    (ANALYSIS / "gmc-products.json").write_text(
        json.dumps(all_rows, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    (ANALYSIS / "gmc-disapproved-products.json").write_text(
        json.dumps(disapproved, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    all_ids = [row.get("id", "") for row in all_rows]
    disapproved_ids = {row.get("id", "") for row in disapproved}
    links = [row.get("link", "") for row in all_rows]
    missing = Counter()
    required = ["id", "title", "price", "availability", "image link", "link"]
    for row in all_rows:
        for field in required:
            if not row.get(field, "").strip():
                missing[field] += 1

    return {
        "all_products_file": GMC_ALL.name,
        "disapproved_file": GMC_DISAPPROVED.name,
        "all_product_records": len(all_rows),
        "disapproved_records": len(disapproved),
        "unique_ids": len(set(all_ids)),
        "duplicate_ids": len(all_ids) - len(set(all_ids)),
        "unique_links": len(set(links)),
        "disapproved_ids_found_in_all_export": sum(1 for value in disapproved_ids if value in set(all_ids)),
        "missing_required_values": dict(missing),
        "channels": dict(Counter(row.get("channel", "") for row in all_rows)),
        "feed_labels": dict(Counter(row.get("feed label", "") for row in all_rows)),
        "languages": dict(Counter(row.get("language", "") for row in all_rows)),
        "sample_ids": all_ids[:10],
        "disapproved_ids": sorted(disapproved_ids),
    }


def main():
    summary = {
        "gsc": inspect_gsc(),
        "gmc": inspect_gmc(),
    }
    path = ANALYSIS / "input-evidence-summary.json"
    path.write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8")
    print(path)
    print(json.dumps(summary, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
