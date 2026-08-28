(() => {
  'use strict';
  const CART_KEY = 'scb_cart_v1';
  const debugEvents = window.scbDebugEvents = window.scbDebugEvents || [];
  const emit = (event, detail = {}) => {
    const record = { event, detail, timestamp: new Date().toISOString(), mode: document.body.dataset.trackingEnabled === 'true' ? 'production' : 'local-debug' };
    debugEvents.push(record);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(record);
    window.dispatchEvent(new CustomEvent('scb:tracking', { detail: record }));
  };
  // Boxes are made to order in runs, not sold as singles: 100 is the smallest
  // quantity the factory will price, so the cart counts in hundreds throughout.
  const MIN_QTY = 100;
  const roundQty = (value) => { const n = Math.round(Number(value) / MIN_QTY) * MIN_QTY; return Number.isFinite(n) && n >= MIN_QTY ? n : MIN_QTY; };
  const getCart = () => { try { const raw = JSON.parse(localStorage.getItem(CART_KEY) || '[]'); return Array.isArray(raw) ? raw.map((item) => ({ ...item, quantity: roundQty(item.quantity) })) : []; } catch { return []; } };
  const setCart = (cart) => { localStorage.setItem(CART_KEY, JSON.stringify(cart)); document.cookie = `scb_cart_present=${cart.length ? '1' : '0'}; Path=/; SameSite=Lax`; emit('cart_updated', { item_count: cart.reduce((sum, item) => sum + item.quantity, 0) }); };
  let catalogPromise;
  const catalog = () => catalogPromise ||= fetch('/product-search.json').then((response) => response.json());
  const escapeHtml = (value) => String(value ?? '').replace(/[&<>'"]/g, (char) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' })[char]);
  const money = (value) => `$${Number(value || 0).toFixed(2)}`;

  document.querySelectorAll('.elementor-invisible').forEach((element) => element.classList.remove('elementor-invisible'));

  // The header sticks; past the fold the announcement bar collapses so only the
  // navigation follows the reader down.
  let scrolledState = false;
  const trackScroll = () => {
    const scrolled = window.scrollY > 24;
    if (scrolled === scrolledState) return;
    scrolledState = scrolled;
    document.body.classList.toggle('scb-scrolled', scrolled);
  };
  addEventListener('scroll', trackScroll, { passive: true });
  trackScroll();

  const mobileMenu = document.querySelector('#scb-mobile-menu');
  const mobileToggle = document.querySelector('.scb-mobile-toggle, .rishi_header_trigger');
  const closeMobile = () => { if (!mobileMenu) return; mobileMenu.hidden = true; mobileToggle?.setAttribute('aria-expanded', 'false'); };
  mobileToggle?.addEventListener('click', (event) => { event.preventDefault(); mobileMenu.hidden = false; mobileToggle.setAttribute('aria-expanded', 'true'); });
  document.querySelector('.scb-mobile-close')?.addEventListener('click', closeMobile);
  mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMobile));

  const searchModal = document.querySelector('.scb-search-modal, .search-toggle-form');
  document.querySelector('.scb-search-toggle, .rishi-header-search')?.addEventListener('click', () => { searchModal.hidden = false; searchModal.classList.add('scb-search-open'); searchModal.querySelector('input')?.focus(); });
  document.querySelector('.scb-search-close, .btn-form-close')?.addEventListener('click', () => { searchModal.hidden = true; searchModal.classList.remove('scb-search-open'); });

  document.addEventListener('click', async (event) => {
    const link = event.target.closest('a[href^="tel:"]');
    if (link) emit('phone_click', { href: link.href, page: location.href });
    const email = event.target.closest('a[href^="mailto:"]');
    if (email) emit('email_click', { href: email.href, page: location.href });

    const addButton = event.target.closest('a[href*="add-to-cart"], .add_to_cart_button, .single_add_to_cart_button, button[name="add-to-cart"]');
    if (!addButton) return;
    event.preventDefault();
    const href = addButton.getAttribute('href') || '';
    const id = Number(addButton.dataset.product_id || addButton.value || new URL(href || location.href, location.href).searchParams.get('add-to-cart'));
    if (!id) return;
    const products = await catalog();
    const product = products.find((item) => item.id === id);
    const cart = getCart();
    const existing = cart.find((item) => item.id === id);
    if (existing) existing.quantity += MIN_QTY; else cart.push({ id, quantity: MIN_QTY });
    setCart(cart);
    emit('add_to_cart', { item_id: id, item_name: product?.title || '', page: location.href });
    const notice = document.createElement('div');
    notice.className = 'scb-local-notice';
    notice.innerHTML = `${MIN_QTY} × ${escapeHtml(product?.title || 'Product')} added to your cart — 100 is the minimum run. <a href="/cart/"><strong>View cart</strong></a>`;
    addButton.closest('.product, .summary, li')?.prepend(notice) || addButton.parentElement?.prepend(notice);
  });

  const skipEmailForm = (form) => form.matches('.search-form, [role="search"], .woocommerce-ordering, .woocommerce-form-login, .woocommerce-ResetPassword')
    || form.closest('.scb-search-modal, .search-toggle-form, .scb-checkout-app')
    || form.querySelector('input[type="password"]');

  document.querySelectorAll('form').forEach((form) => {
    if (skipEmailForm(form)) return;
    const productField = [...form.querySelectorAll('input')].find((input) => /product/i.test(input.placeholder || '') || /product/i.test(input.name || ''));
    if (productField && !productField.value) productField.value = document.querySelector('h1')?.textContent?.trim() || document.title;
    for (const [name, value] of [['product_name', document.querySelector('h1')?.textContent?.trim() || document.title], ['product_url', location.href], ['page_title', document.title], ['source_url', location.href]]) {
      const hidden = document.createElement('input'); hidden.type = 'hidden'; hidden.name = name; hidden.value = value; form.append(hidden);
    }
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const payload = new FormData(form);
      const fieldLabels = {};
      const labels = [...form.querySelectorAll('label[for]')];
      [...form.elements].forEach((field) => {
        if (!field.name || fieldLabels[field.name]) return;
        const explicitLabel = field.id ? labels.find((label) => label.htmlFor === field.id)?.textContent?.trim() : '';
        const fallbackLabel = field.getAttribute('aria-label') || field.getAttribute('placeholder') || '';
        const label = explicitLabel || fallbackLabel;
        if (label) fieldLabels[field.name] = label;
      });
      payload.set('__field_labels', JSON.stringify(fieldLabels));
      const files = [...payload.values()].filter((value) => value instanceof File && value.name).map((file) => ({ name: file.name, size: file.size, type: file.type }));
      form.querySelector('.scb-local-notice')?.remove();
      const notice = document.createElement('div'); notice.className = 'scb-local-notice'; notice.textContent = 'Sending…'; form.append(notice);
      try {
        const response = await fetch('/api/forms', { method: 'POST', body: payload });
        const result = await response.json();
        if (!response.ok || !result.ok) throw new Error(result.error || 'Form delivery failed.');
        notice.textContent = result.message;
        emit(result.mock ? 'form_submit_mock' : 'form_submit', { form: form.getAttribute('name') || form.id || 'form', product_name: payload.get('product_name'), product_url: payload.get('product_url'), files });
        const formName = form.getAttribute('name') || form.id || 'quote';
        form.reset();
        location.href = `/thank-you/?form=${encodeURIComponent(formName)}`;
      } catch (error) {
        notice.textContent = error.message || 'An error occurred.';
        emit('form_error', { message: notice.textContent });
      }
    });
  });

  document.querySelectorAll('.woocommerce-tabs.wc-tabs-wrapper').forEach((tabs) => {
    const links = [...tabs.querySelectorAll('.wc-tabs a[href^="#"]')];
    const panels = [...tabs.querySelectorAll('.woocommerce-Tabs-panel.wc-tab')];
    if (!links.length || !panels.length) return;

    const activate = (hash, updateUrl = false) => {
      const selected = links.find((link) => link.getAttribute('href') === hash) || links[0];
      const selectedId = selected.getAttribute('href')?.slice(1);
      links.forEach((link) => {
        const active = link === selected;
        link.closest('li')?.classList.toggle('active', active);
        link.setAttribute('aria-selected', active ? 'true' : 'false');
        link.setAttribute('tabindex', active ? '0' : '-1');
      });
      panels.forEach((panel) => {
        const active = panel.id === selectedId;
        panel.classList.toggle('scb-tab-active', active);
        panel.hidden = !active;
        panel.setAttribute('aria-hidden', active ? 'false' : 'true');
      });
      if (updateUrl && selectedId) history.replaceState(null, '', `#${selectedId}`);
    };

    links.forEach((link) => link.addEventListener('click', (event) => {
      event.preventDefault();
      activate(link.getAttribute('href') || '', true);
    }));
    activate(location.hash, false);
  });

  async function renderCart() {
    if (location.pathname !== '/cart/') return;
    const mount = document.querySelector('.site-content');
    if (!mount) return;
    const products = await catalog();
    const cart = getCart();
    const rows = cart.map((item) => ({ ...item, product: products.find((product) => product.id === item.id) })).filter((item) => item.product);
    const total = rows.reduce((sum, item) => sum + Number(item.product.price || 0) * item.quantity, 0);
    mount.innerHTML = `<div class="scb-cart-app"><h1>Cart</h1>${rows.length ? `<table class="scb-cart-table"><thead><tr><th>Product</th><th>Name</th><th>Price</th><th>Quantity</th><th>Total</th><th></th></tr></thead><tbody>${rows.map((item) => `<tr><td><img src="${escapeHtml(item.product.image)}" alt="${escapeHtml(item.product.imageAlt)}"></td><td><a href="${escapeHtml(item.product.path)}">${escapeHtml(item.product.title)}</a></td><td>${money(item.product.price)}</td><td><input class="scb-cart-qty" data-id="${item.id}" type="number" min="${MIN_QTY}" step="${MIN_QTY}" value="${item.quantity}"></td><td>${money(Number(item.product.price || 0) * item.quantity)}</td><td><button class="scb-cart-remove" data-id="${item.id}" type="button">Remove</button></td></tr>`).join('')}</tbody></table><p><strong>Subtotal: ${money(total)}</strong></p><a class="scb-button" href="/checkout/">Proceed to checkout</a>` : '<h2>Your cart is currently empty!</h2><p><a class="scb-button" href="/products/">Return to shop</a></p>'}</div>`;
    mount.querySelectorAll('.scb-cart-qty').forEach((input) => input.addEventListener('change', () => { const next = getCart(); const item = next.find((entry) => entry.id === Number(input.dataset.id)); if (item) item.quantity = roundQty(input.value); setCart(next); renderCart(); }));
    mount.querySelectorAll('.scb-cart-remove').forEach((button) => button.addEventListener('click', () => { setCart(getCart().filter((item) => item.id !== Number(button.dataset.id))); renderCart(); }));
    emit('view_cart', { value: total, currency: 'USD' });
  }

  async function renderCheckout() {
    if (location.pathname !== '/checkout/') return;
    const mount = document.querySelector('.site-content');
    if (!mount) return;
    const products = await catalog();
    const cart = getCart();
    const rows = cart.map((item) => ({ ...item, product: products.find((product) => product.id === item.id) })).filter((item) => item.product);
    const total = rows.reduce((sum, item) => sum + Number(item.product.price || 0) * item.quantity, 0);
    mount.innerHTML = `<div class="scb-checkout-app"><h1>Checkout</h1>${rows.length ? `<form id="scb-local-checkout"><div class="scb-checkout-grid"><div><h2>Billing details</h2><div class="scb-field"><label for="billing_name">Full name</label><input id="billing_name" name="billing_name" required></div><div class="scb-field"><label for="billing_email">Email address</label><input id="billing_email" name="billing_email" type="email" required></div><div class="scb-field"><label for="billing_phone">Phone</label><input id="billing_phone" name="billing_phone" type="tel" required></div><div class="scb-field"><label for="billing_address">Address</label><textarea id="billing_address" name="billing_address" required></textarea></div><div class="scb-field"><label for="order_notes">Order notes</label><textarea id="order_notes" name="order_notes"></textarea></div></div><aside><h2>Your order</h2>${rows.map((item) => `<p>${escapeHtml(item.product.title)} × ${item.quantity} <strong>${money(Number(item.product.price || 0) * item.quantity)}</strong></p>`).join('')}<p><strong>Total: ${money(total)}</strong></p><p><strong>Cash on delivery</strong><br>Pay with cash upon delivery.</p><p>Local test mode — no email or payment will be sent.</p><div class="scb-local-notice" hidden></div><button class="scb-button" type="submit">Place order</button></aside></div></form>` : '<h2>Your cart is currently empty.</h2><p><a class="scb-button" href="/products/">Return to shop</a></p>'}</div>`;
    mount.querySelector('#scb-local-checkout')?.addEventListener('submit', async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (!form.reportValidity()) return;
      const notice = form.querySelector('.scb-local-notice');
      notice.hidden = false; notice.textContent = 'Placing order…';
      const data = new FormData(form);
      const payload = {
        customer: { name: data.get('billing_name'), email: data.get('billing_email'), phone: data.get('billing_phone'), address: data.get('billing_address') },
        notes: data.get('order_notes'),
        items: rows.map((item) => ({ id: item.id, quantity: item.quantity })),
      };
      try {
        const response = await fetch('/api/orders', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
        const result = await response.json();
        if (!response.ok || !result.ok) throw new Error(result.error || 'Order could not be placed.');
        emit(result.mock ? 'purchase_mock' : 'purchase', { order_id: result.orderId, value: total, currency: 'USD', payment_method: 'cash_on_delivery', items: rows.map((item) => ({ id: item.id, name: item.product.title, quantity: item.quantity })) });
        localStorage.removeItem(CART_KEY); document.cookie = 'scb_cart_present=0; Path=/; SameSite=Lax'; sessionStorage.setItem('scb_last_order', result.orderId); location.href = `/thank-you/?order=${encodeURIComponent(result.orderId)}`;
      } catch (error) { notice.textContent = error.message || 'Order could not be placed.'; emit('checkout_error', { message: notice.textContent }); }
    });
    emit('begin_checkout', { value: total, currency: 'USD' });
  }

  async function renderSearch() {
    const query = new URLSearchParams(location.search).get('s');
    if (!query) return;
    const mount = document.querySelector('.site-content');
    if (!mount) return;
    const products = await catalog();
    const lowered = query.toLowerCase();
    const matches = products.filter((product) => `${product.title} ${product.categories.join(' ')}`.toLowerCase().includes(lowered));
    mount.innerHTML = `<section class="scb-search-results"><h1>Search Results for: ${escapeHtml(query)}</h1><p>${matches.length} result${matches.length === 1 ? '' : 's'} found.</p><ul class="products columns-4">${matches.map((product) => `<li class="product"><a href="${escapeHtml(product.path)}"><img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.imageAlt)}"><h2>${escapeHtml(product.title)}</h2><span class="price">${money(product.price)}</span></a></li>`).join('')}</ul></section>`;
    emit('view_search_results', { search_term: query, results: matches.length });
  }

  if (location.pathname === '/thank-you/') { const id = new URLSearchParams(location.search).get('order') || sessionStorage.getItem('scb_last_order'); if (id) document.querySelector('.site-content')?.insertAdjacentHTML('afterbegin', `<div class="scb-local-notice" style="max-width:1180px;margin:30px auto">Thank you. Your local test order ${escapeHtml(id)} has been received. No payment or email was sent.</div>`); }
  document.querySelectorAll('.woocommerce-product-gallery__image a').forEach((link) => link.addEventListener('click', (event) => { const main = document.querySelector('.woocommerce-product-gallery__wrapper img'); const selected = link.querySelector('img'); if (!main || !selected || link === main.closest('a')) return; event.preventDefault(); main.src = link.href || selected.src; main.srcset = ''; emit('select_product_image', { src: main.src }); }));
  Promise.all([renderCart(), renderCheckout(), renderSearch()]).catch((error) => { console.error(error); emit('local_runtime_error', { message: error.message }); });
})();
