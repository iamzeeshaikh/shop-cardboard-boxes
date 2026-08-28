/**
 * Design Your Box — progressive enhancement for the quote configurator.
 *
 * The page works with JavaScript disabled: every step is visible, the form posts
 * through the site-wide handler, and nothing is required that a person cannot see.
 * This script turns it into a stepped flow with validation, a live summary and a
 * proportional preview of the box being described.
 */
(() => {
  'use strict';
  const root = document.querySelector('.scb-cfg');
  if (!root) return;
  const form = root.querySelector('form');
  if (!form) return;

  const steps = [...root.querySelectorAll('.scb-cfg-step')];
  const bar = root.querySelector('.scb-cfg-bar span');
  const chips = [...root.querySelectorAll('.scb-cfg-steps li')];
  const summaryList = root.querySelector('.scb-cfg-summary');
  const reviewList = root.querySelector('.scb-cfg-review');
  const previewMount = root.querySelector('.scb-cfg-preview');
  const configField = form.querySelector('[name="configuration_summary"]');
  let index = 0;

  root.dataset.enhanced = 'true';

  /* ---------- reading the current configuration ---------- */

  // form.elements[name] hands back a RadioNodeList for a radio group, whose .value is
  // the checked radio's value — the machine token, not the wording the customer read.
  // Ask for the checked input directly so the summary and the emailed configuration
  // both say "Shipping carton" rather than "rsc".
  const labelFor = (name) => {
    const field = form.elements[name];
    if (!field) return '';
    const checked = form.querySelector(`input[name="${name}"]:checked`);
    if (checked) return checked.dataset.label || checked.value;
    return typeof field.value === 'string' && !(field instanceof RadioNodeList) ? field.value.trim() : '';
  };

  const READOUT = [
    { name: 'box_style', label: 'Box style' },
    { name: 'dimensions', label: 'Size', compute: () => {
      const l = form.elements.length_value?.value.trim();
      const w = form.elements.width_value?.value.trim();
      const h = form.elements.height_value?.value.trim();
      const unit = form.elements.dimension_unit?.value || 'in';
      return l && w && h ? `${l} × ${w} × ${h} ${unit}` : '';
    } },
    { name: 'material', label: 'Material' },
    { name: 'board_strength', label: 'Board' },
    { name: 'quantity', label: 'Quantity', compute: () => {
      const preset = form.querySelector('input[name="quantity"]:checked');
      if (preset && preset.value === 'custom') return form.elements.quantity_custom?.value.trim() || '';
      return preset ? preset.dataset.label || preset.value : '';
    } },
    { name: 'printing', label: 'Printing' },
    { name: 'finish', label: 'Finish' },
    { name: 'colour_note', label: 'Colours' },
    { name: 'artwork_status', label: 'Artwork' },
  ];

  function readConfig() {
    const rows = [];
    for (const item of READOUT) {
      const value = item.compute ? item.compute() : labelFor(item.name);
      if (value) rows.push([item.label, value]);
    }
    return rows;
  }

  /* ---------- proportional preview ---------- */

  const num = (name) => {
    const raw = Number(form.elements[name]?.value);
    return Number.isFinite(raw) && raw > 0 ? raw : 0;
  };

  function drawPreview() {
    if (!previewMount) return;
    const style = form.querySelector('input[name="box_style"]:checked')?.value || 'rsc';
    let l = num('length_value') || 10;
    let w = num('width_value') || 8;
    let h = num('height_value') || 6;
    const max = Math.max(l, w, h);
    const scale = 78 / max;
    l *= scale; w *= scale * 0.55; h *= scale;
    const ox = 110 - (l + w) / 2;
    const oy = 118 + h / 2;
    const round = style === 'round';

    const body = round
      ? `<ellipse cx="110" cy="${oy - h}" rx="${l / 2}" ry="${w / 2}" fill="#f0f4f9" stroke="#94a3b5" stroke-width="1.6"/>
         <path d="M${110 - l / 2} ${oy - h} v${h} a${l / 2} ${w / 2} 0 0 0 ${l} 0 v-${h}" fill="#dbe5ef" stroke="#94a3b5" stroke-width="1.6"/>`
      : `<polygon points="${ox},${oy - h} ${ox + l},${oy - h} ${ox + l + w},${oy - h - w} ${ox + w},${oy - h - w}" fill="#f0f4f9" stroke="#94a3b5" stroke-width="1.6"/>
         <polygon points="${ox},${oy - h} ${ox + l},${oy - h} ${ox + l},${oy} ${ox},${oy}" fill="#dbe5ef" stroke="#94a3b5" stroke-width="1.6"/>
         <polygon points="${ox + l},${oy - h} ${ox + l + w},${oy - h - w} ${ox + l + w},${oy - w} ${ox + l},${oy}" fill="#c8d6e4" stroke="#94a3b5" stroke-width="1.6"/>`;

    previewMount.innerHTML = `<svg viewBox="0 0 220 170" role="img" aria-label="Proportional sketch of the box being configured">
      <title>Proportional sketch</title>${body}</svg>
      <p class="scb-cfg-preview-note">A proportional sketch of the size you have entered — not a dieline and not production artwork. Our design team produces the print-ready dieline after you request a quote.</p>`;
  }

  /* ---------- summaries ---------- */

  function renderSummaries() {
    const rows = readConfig();
    if (summaryList) {
      summaryList.innerHTML = rows.length
        ? rows.map(([k, v]) => `<li><span class="k">${k}</span><span class="v">${escapeHtml(v)}</span></li>`).join('')
        : '<li><span class="k">Nothing selected yet</span></li>';
    }
    if (reviewList) {
      reviewList.innerHTML = rows.map(([k, v]) => `<li><span class="k">${k}</span><span class="v">${escapeHtml(v)}</span></li>`).join('');
    }
    if (configField) {
      configField.value = rows.map(([k, v]) => `${k}: ${v}`).join('\n');
    }
    drawPreview();
  }

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

  /* ---------- validation ---------- */

  function setError(field, message) {
    const holder = field.closest('.scb-cfg-field, .scb-cfg-step');
    const slot = holder?.querySelector('.scb-cfg-error');
    if (slot) slot.textContent = message || '';
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
  }

  function validateStep(step) {
    let ok = true;
    let firstBad = null;

    step.querySelectorAll('[data-require-group]').forEach((group) => {
      const name = group.dataset.requireGroup;
      const chosen = form.querySelector(`input[name="${name}"]:checked`);
      const slot = group.querySelector('.scb-cfg-error');
      if (!chosen) {
        if (slot) slot.textContent = 'Choose one option to continue.';
        ok = false;
        firstBad = firstBad || group.querySelector('input');
      } else if (slot) {
        slot.textContent = '';
      }
    });

    step.querySelectorAll('[data-required]').forEach((field) => {
      const value = field.value.trim();
      let message = '';
      if (!value) message = field.dataset.requiredMessage || 'This field is needed to quote.';
      else if (field.dataset.kind === 'number' && !(Number(value) > 0)) message = 'Enter a number greater than zero.';
      else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = 'Enter a valid email address.';
      setError(field, message);
      if (message) { ok = false; firstBad = firstBad || field; }
    });

    if (firstBad) firstBad.focus();
    return ok;
  }

  /* ---------- step navigation ---------- */

  function show(next, moveFocus = true) {
    index = Math.max(0, Math.min(steps.length - 1, next));
    steps.forEach((step, position) => {
      step.dataset.active = position === index ? 'true' : 'false';
    });
    chips.forEach((chip, position) => {
      chip.dataset.state = position === index ? 'current' : position < index ? 'done' : 'todo';
    });
    if (bar) bar.style.width = `${((index + 1) / steps.length) * 100}%`;
    renderSummaries();
    if (moveFocus) {
      const heading = steps[index].querySelector('h2');
      if (heading) { heading.setAttribute('tabindex', '-1'); heading.focus({ preventScroll: true }); }
      steps[index].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }

  root.addEventListener('click', (event) => {
    const next = event.target.closest('.scb-cfg-next');
    if (next) {
      event.preventDefault();
      if (validateStep(steps[index])) show(index + 1);
      return;
    }
    const back = event.target.closest('.scb-cfg-back');
    if (back) { event.preventDefault(); show(index - 1); }
  });

  form.addEventListener('input', renderSummaries);
  form.addEventListener('change', renderSummaries);

  // Advance with Enter from a text field rather than submitting the whole form early.
  form.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    if (event.target.tagName === 'TEXTAREA') return;
    if (index < steps.length - 1) {
      event.preventDefault();
      if (validateStep(steps[index])) show(index + 1);
    }
  });

  // The site-wide handler posts the form; this only blocks an incomplete submission.
  form.addEventListener('submit', (event) => {
    renderSummaries();
    if (!validateStep(steps[steps.length - 1])) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, true);

  show(0, false);
})();
