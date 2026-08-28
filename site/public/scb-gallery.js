/**
 * Product gallery.
 *
 * WooCommerce ships its gallery as a stack of figures and relies on jQuery and
 * FlexSlider to turn them into a viewer. Neither runs on the recovered site, so the
 * images sat there inert — clicking one did nothing. This rebuilds the same markup
 * into a main image with a thumbnail strip, swapping instantly on click with no
 * network request, because every rendition is already in the document.
 */
(() => {
  'use strict';
  const gallery = document.querySelector('.woocommerce-product-gallery');
  if (!gallery || gallery.dataset.scbGallery === 'ready') return;

  const wrapper = gallery.querySelector('.woocommerce-product-gallery__wrapper');
  const figures = [...gallery.querySelectorAll('.woocommerce-product-gallery__image')];
  if (!wrapper || figures.length === 0) return;

  // WooCommerce hides the gallery until its own script fades it in.
  gallery.style.opacity = '1';
  gallery.style.transition = 'none';

  const slides = figures.map((figure) => {
    const img = figure.querySelector('img');
    const link = figure.querySelector('a');
    return {
      full: link?.getAttribute('href') || img?.getAttribute('data-large_image') || img?.getAttribute('src') || '',
      src: img?.getAttribute('src') || '',
      srcset: img?.getAttribute('srcset') || '',
      sizes: img?.getAttribute('sizes') || '',
      alt: img?.getAttribute('alt') || '',
      thumb: figure.getAttribute('data-thumb') || img?.getAttribute('src') || '',
      thumbAlt: figure.getAttribute('data-thumb-alt') || img?.getAttribute('alt') || '',
      width: img?.getAttribute('width') || '',
      height: img?.getAttribute('height') || '',
    };
  }).filter((slide) => slide.src);

  if (!slides.length) return;

  const main = document.createElement('div');
  main.className = 'scb-gallery-main';
  const mainImg = document.createElement('img');
  const apply = (slide) => {
    mainImg.src = slide.src;
    if (slide.srcset) mainImg.srcset = slide.srcset; else mainImg.removeAttribute('srcset');
    if (slide.sizes) mainImg.sizes = slide.sizes;
    mainImg.alt = slide.alt;
    if (slide.width) mainImg.width = Number(slide.width);
    if (slide.height) mainImg.height = Number(slide.height);
  };
  apply(slides[0]);
  mainImg.decoding = 'async';
  mainImg.fetchPriority = 'high';
  main.append(mainImg);

  wrapper.replaceChildren(main);

  if (slides.length > 1) {
    const strip = document.createElement('ul');
    strip.className = 'scb-gallery-thumbs';
    strip.setAttribute('aria-label', 'Product images');

    // Decoding every rendition up front means the swap is instant on click.
    slides.forEach((slide) => { const pre = new Image(); pre.src = slide.src; });

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
        apply(slide);
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
