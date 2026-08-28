/**
 * Product gallery.
 *
 * WooCommerce ships its gallery as a stack of figures and relies on jQuery and
 * FlexSlider to turn them into a viewer. Neither runs on the recovered site, so the
 * images sat there inert — clicking one did nothing.
 *
 * The viewer picks a single rendition per slide, sized for this device, rather than
 * leaving a seven-candidate srcset for the browser to resolve. That matters: an
 * earlier version preloaded the 600px file while a 2× display then chose the 1024px
 * one, so the first click on each thumbnail waited on a download. Choosing the
 * rendition here means the file that is preloaded is exactly the file that is shown,
 * and the swap is instant.
 */
(() => {
  'use strict';
  const gallery = document.querySelector('.woocommerce-product-gallery');
  if (!gallery || gallery.dataset.scbGallery === 'ready') return;

  const wrapper = gallery.querySelector('.woocommerce-product-gallery__wrapper');
  const figures = [...gallery.querySelectorAll('.woocommerce-product-gallery__image')];
  if (!wrapper || figures.length === 0) return;

  const supportsWebp = (() => {
    try {
      return document.createElement('canvas').toDataURL('image/webp').startsWith('data:image/webp');
    } catch { return false; }
  })();

  /** "url 600w, url 300w" -> [{ url, width }], widest first. */
  const parseSrcset = (value) => (value || '')
    .split(',')
    .map((part) => part.trim().split(/\s+/))
    .filter(([url, descriptor]) => url && /^\d+w$/.test(descriptor || ''))
    .map(([url, descriptor]) => ({ url, width: Number(descriptor.slice(0, -1)) }))
    .sort((a, b) => b.width - a.width);

  /** Smallest candidate that still covers the space, falling back to the widest. */
  const pick = (candidates, target, fallback) => {
    if (!candidates.length) return fallback;
    const smallestThatCovers = candidates.filter((candidate) => candidate.width >= target).pop();
    return (smallestThatCovers || candidates[0]).url;
  };

  gallery.style.opacity = '1';
  gallery.style.transition = 'none';

  // The viewer's width before any image is placed in it.
  const viewerWidth = Math.round(wrapper.getBoundingClientRect().width) || 600;
  const target = Math.min(viewerWidth * (window.devicePixelRatio || 1), 1600);

  const slides = figures.map((figure) => {
    const img = figure.querySelector('img');
    if (!img) return null;
    const source = figure.querySelector('source[type="image/webp"]');
    const jpegs = parseSrcset(img.getAttribute('srcset'));
    const webps = parseSrcset(source?.getAttribute('srcset'));
    const jpeg = pick(jpegs, target, img.getAttribute('src') || '');
    const webp = webps.length ? pick(webps, target, '') : '';
    return {
      display: supportsWebp && webp ? webp : jpeg,
      jpeg,
      alt: img.getAttribute('alt') || '',
      thumb: figure.getAttribute('data-thumb') || img.getAttribute('src') || '',
      thumbAlt: figure.getAttribute('data-thumb-alt') || img.getAttribute('alt') || '',
    };
  }).filter((slide) => slide && slide.jpeg);

  if (!slides.length) return;

  const main = document.createElement('div');
  main.className = 'scb-gallery-main';
  const mainImg = document.createElement('img');
  mainImg.decoding = 'async';
  mainImg.fetchPriority = 'high';
  mainImg.width = 600;
  mainImg.height = 600;

  const show = (slide) => {
    mainImg.src = slide.display;
    mainImg.alt = slide.alt;
  };
  show(slides[0]);
  main.append(mainImg);
  wrapper.replaceChildren(main);

  if (slides.length > 1) {
    const strip = document.createElement('ul');
    strip.className = 'scb-gallery-thumbs';
    strip.setAttribute('aria-label', 'Product images');

    // Warm exactly the files the viewer will show, so a click never waits.
    slides.slice(1).forEach((slide) => { const pre = new Image(); pre.src = slide.display; });

    const buttons = slides.map((slide, index) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-current', index === 0 ? 'true' : 'false');
      button.setAttribute('aria-label', `Show image ${index + 1} of ${slides.length}`);
      const thumb = document.createElement('img');
      thumb.src = slide.thumb;
      thumb.alt = slide.thumbAlt;
      thumb.width = 74;
      thumb.height = 74;
      thumb.loading = index < 4 ? 'eager' : 'lazy';
      thumb.decoding = 'async';
      button.append(thumb);
      button.addEventListener('click', () => {
        show(slide);
        buttons.forEach((other) => other.setAttribute('aria-current', 'false'));
        button.setAttribute('aria-current', 'true');
      });
      li.append(button);
      strip.append(li);
      return button;
    });

    wrapper.append(strip);
  }

  gallery.dataset.scbGallery = 'ready';
})();
