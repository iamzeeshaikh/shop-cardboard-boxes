#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const HEADER_SIZE = 4377;
const MAX_ENTRY_SIZE = 16 * 1024 * 1024 * 1024;

function usage() {
  console.error('Usage: node tools/wpress.mjs <list|extract> <archive.wpress> [output-dir]');
  process.exit(2);
}

function field(buffer, start, end) {
  const nul = buffer.indexOf(0, start);
  const limit = nul >= start && nul < end ? nul : end;
  return buffer.subarray(start, limit).toString('utf8').trim();
}

function safeRelativePath(prefix, filename) {
  const raw = prefix && prefix !== '.' ? `${prefix}/${filename}` : filename;
  const normalized = path.posix.normalize(raw.replaceAll('\\', '/'));
  if (
    !normalized ||
    normalized === '.' ||
    normalized.startsWith('../') ||
    normalized.includes('/../') ||
    path.posix.isAbsolute(normalized) ||
    normalized.includes('\0')
  ) {
    throw new Error(`Unsafe archive path rejected: ${JSON.stringify(raw)}`);
  }
  return normalized;
}

function readExactly(fd, buffer, position) {
  let offset = 0;
  while (offset < buffer.length) {
    const count = fs.readSync(fd, buffer, offset, buffer.length - offset, position + offset);
    if (count === 0) return offset;
    offset += count;
  }
  return offset;
}

function walkArchive(archivePath, visitor) {
  const stat = fs.statSync(archivePath);
  const fd = fs.openSync(archivePath, 'r');
  const header = Buffer.alloc(HEADER_SIZE);
  let position = 0;
  let entries = 0;
  let payloadBytes = 0;

  try {
    while (position + HEADER_SIZE <= stat.size) {
      header.fill(0);
      if (readExactly(fd, header, position) !== HEADER_SIZE) break;

      const filename = field(header, 0, 255);
      if (!filename) break;

      const sizeText = field(header, 255, 269);
      if (!/^\d+$/.test(sizeText)) {
        throw new Error(`Invalid size field at archive offset ${position}: ${JSON.stringify(sizeText)}`);
      }
      const size = Number(sizeText);
      if (!Number.isSafeInteger(size) || size < 0 || size > MAX_ENTRY_SIZE) {
        throw new Error(`Invalid entry size at archive offset ${position}: ${sizeText}`);
      }

      const mtimeText = field(header, 269, 281);
      const prefix = field(header, 281, 4369);
      const crc32 = field(header, 4369, 4377);
      const relativePath = safeRelativePath(prefix, filename);
      const contentOffset = position + HEADER_SIZE;
      const nextPosition = contentOffset + size;
      if (nextPosition > stat.size) {
        throw new Error(`Truncated entry ${relativePath}: expected ${size} bytes`);
      }

      visitor({ fd, relativePath, size, mtimeText, crc32, contentOffset, index: entries });
      entries += 1;
      payloadBytes += size;
      position = nextPosition;
    }
  } finally {
    fs.closeSync(fd);
  }

  return { entries, payloadBytes, archiveBytes: stat.size, endOffset: position };
}

function extractEntry({ fd, relativePath, size, mtimeText, contentOffset }, outputRoot) {
  const target = path.resolve(outputRoot, ...relativePath.split('/'));
  const root = path.resolve(outputRoot);
  if (target !== root && !target.startsWith(`${root}${path.sep}`)) {
    throw new Error(`Extraction target escaped output root: ${relativePath}`);
  }

  fs.mkdirSync(path.dirname(target), { recursive: true, mode: 0o755 });
  const out = fs.openSync(target, 'wx', 0o644);
  const chunk = Buffer.allocUnsafe(1024 * 1024);
  let remaining = size;
  let inputPosition = contentOffset;
  try {
    while (remaining > 0) {
      const requested = Math.min(chunk.length, remaining);
      const read = fs.readSync(fd, chunk, 0, requested, inputPosition);
      if (read === 0) throw new Error(`Unexpected EOF while extracting ${relativePath}`);
      fs.writeSync(out, chunk, 0, read);
      remaining -= read;
      inputPosition += read;
    }
  } finally {
    fs.closeSync(out);
  }

  if (/^\d+$/.test(mtimeText)) {
    const time = Number(mtimeText);
    if (Number.isFinite(time) && time > 0) fs.utimesSync(target, time, time);
  }
}

const [command, archiveArg, outputArg] = process.argv.slice(2);
if (!command || !archiveArg || !['list', 'extract'].includes(command)) usage();

const archivePath = path.resolve(archiveArg);
if (!fs.statSync(archivePath).isFile()) throw new Error(`Archive not found: ${archivePath}`);

if (command === 'list') {
  const summary = walkArchive(archivePath, ({ index, relativePath, size, crc32 }) => {
    process.stdout.write(`${index}\t${size}\t${crc32 || '-'}\t${relativePath}\n`);
  });
  console.error(JSON.stringify(summary));
} else {
  if (!outputArg) usage();
  const outputRoot = path.resolve(outputArg);
  fs.mkdirSync(outputRoot, { recursive: true, mode: 0o755 });
  if (fs.readdirSync(outputRoot).length !== 0) {
    throw new Error(`Refusing to extract into non-empty directory: ${outputRoot}`);
  }

  const summary = walkArchive(archivePath, (entry) => {
    extractEntry(entry, outputRoot);
    if ((entry.index + 1) % 1000 === 0) console.error(`Extracted ${entry.index + 1} entries`);
  });
  console.error(JSON.stringify(summary));
}
