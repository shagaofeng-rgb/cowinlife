'use client';
import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Autoplay, Pagination, Navigation, Thumbs, FreeMode, A11y } from 'swiper/modules';
import type { PageData } from '@/lib/content';

export default function Website({ page }: { page: PageData }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = root.current!;
    const $ = <T extends HTMLElement = HTMLElement>(selector: string, parent: ParentNode = host) => parent.querySelector<T>(selector);
    const all = (selector: string) => Array.from(host.querySelectorAll<HTMLElement>(selector));
    const instances: Swiper[] = [];
    for (const config of page.carousels) {
      const unit = document.getElementById(config.id);
      const el = unit?.querySelector<HTMLElement>('.swiper-container');
      if (!unit || !el) continue;
      const count = el.querySelectorAll('.swiper-slide').length;
      instances.push(new Swiper(el, {
        modules: [Autoplay, Pagination, Navigation, A11y],
        slidesPerView: Number(config.cols_col) || 1,
        breakpoints: { 768: { slidesPerView: Number(config.cols_md) || 2 }, 1200: { slidesPerView: Number(config.cols_xl) || 3 } },
        spaceBetween: Number(config.space_between) || 0,
        loop: !!config.loop && count > Number(config.cols_xl || 3),
        speed: Number(config.speed) || 300, autoHeight: !!config.auto_height,
        autoplay: config.autoplay && !matchMedia('(prefers-reduced-motion: reduce)').matches ? { delay: Number(config.autoplay), disableOnInteraction: false, pauseOnMouseEnter: true } : false,
        pagination: { el: unit.querySelector<HTMLElement>('.swiper-pagination'), clickable: true },
        navigation: { nextEl: unit.querySelector<HTMLElement>('.swiper-button-next'), prevEl: unit.querySelector<HTMLElement>('.swiper-button-prev') },
      }));
    }
    const dropdowns: HTMLElement[] = [];
    const removeNavListeners: (() => void)[] = [];
    all('.unit-header-nav').forEach(nav => {
      const container = $<HTMLElement>('.swiper-container', nav);
      if (container) instances.push(new Swiper(container, { modules: [Navigation, FreeMode, A11y], slidesPerView: 'auto', freeMode: true, navigation: { nextEl: $<HTMLElement>('.swiper-button-next', nav), prevEl: $<HTMLElement>('.swiper-button-prev', nav) } }));
      nav.querySelectorAll<HTMLElement>('.unit-header-nav__item').forEach(item => {
        const content = item.querySelector<HTMLElement>(':scope > .unit-header-nav__item-content');
        if (!content) return;
        const popup = document.createElement('div'); popup.className = 'unit-header-nav__subNav preview-nav-dropdown'; popup.innerHTML = content.innerHTML;
        popup.style.setProperty('--header-bg', '#2d2d2d'); popup.style.setProperty('--header-color', '#fff');
        host.append(popup); dropdowns.push(popup);
        let timer: ReturnType<typeof setTimeout> | undefined;
        const open = () => { clearTimeout(timer); dropdowns.forEach(p => { if (p !== popup) p.classList.remove('show'); }); const r = item.getBoundingClientRect(); popup.style.left = `${Math.min(r.left, innerWidth - 260)}px`; popup.style.top = `${r.bottom}px`; popup.classList.add('show'); };
        const leave = () => { timer = setTimeout(() => popup.classList.remove('show'), 140); };
        item.addEventListener('mouseenter', open); item.addEventListener('mouseleave', leave); item.addEventListener('focusin', open);
        popup.addEventListener('mouseenter', open); popup.addEventListener('mouseleave', leave);
        removeNavListeners.push(() => { clearTimeout(timer); item.removeEventListener('mouseenter', open); item.removeEventListener('mouseleave', leave); item.removeEventListener('focusin', open); });
      });
    });
    all('.unit-detail-album').forEach(album => {
      album.closest('[package-type="product-detail"]')?.classList.add('unit-detail-album--y', 'unit-detail-album--bottom');
      const thumb = $<HTMLElement>('.unit-detail-album__thumb-container', album);
      const picture = $<HTMLElement>('.unit-detail-album__picture-container', album);
      let thumbs: Swiper | undefined;
      if (thumb) { thumbs = new Swiper(thumb, { modules: [FreeMode], slidesPerView: 'auto', spaceBetween: 10, centerInsufficientSlides: true, watchSlidesProgress: true, freeMode: true }); instances.push(thumbs); }
      if (picture) instances.push(new Swiper(picture, { modules: [Thumbs, Navigation, A11y], autoHeight: true, thumbs: { swiper: thumbs }, navigation: { nextEl: $<HTMLElement>('.swiper-button-next', album), prevEl: $<HTMLElement>('.swiper-button-prev', album) } }));
    });
    all('.unit-detail-button-inquiry').forEach(el => el.classList.add('show'));
    all('[animate]').forEach(el => { el.style.visibility = 'visible'; el.style.opacity = '1'; });
    const header = $('[package-type="header"]');
    const home = $('#app')?.getAttribute('page-type') === 'index';
    const spacer = document.createElement('div');
    header?.before(spacer);
    const onScroll = () => {
      dropdowns.forEach(p => p.classList.remove('show'));
      if (!header) return;
      const fixed = window.scrollY > 40;
      if (!home) spacer.style.height = fixed ? `${header.offsetHeight}px` : '0px';
      header.classList.toggle('header-fixed', fixed);
      header.classList.toggle('header-position', !fixed);
    };
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    const toast = (text: string) => {
      let box = $<HTMLElement>('.preview-feedback');
      if (!box) { box = document.createElement('div'); box.className = 'preview-feedback'; box.setAttribute('role', 'status'); host.append(box); }
      box.textContent = text; box.hidden = false;
    };
    let dialog: HTMLDialogElement | null = null;
    const closeQuote = () => { dialog?.close(); dialog?.remove(); dialog = null; };
    const quote = () => {
      closeQuote();
      dialog = document.createElement('dialog'); dialog.className = 'quote-dialog inquiry-modal'; dialog.tabIndex = -1;
      dialog.innerHTML = `<div class="quote-title">Free Quote &amp; Information Request</div><button type="button" class="quote-close" aria-label="Close inquiry">×</button>${page.inquiryHtml || '<h2>Free Quote & Information Request</h2><form data-preview-form="true"><input placeholder="Name" name="name" required><input placeholder="Email" type="email" name="email" required><textarea placeholder="Message" name="message" required></textarea><button>Send inquiry</button></form>'}`;
      dialog.setAttribute('aria-label', 'Free Quote & Information Request');
      const list = dialog.querySelector<HTMLElement>('.unit-inquire-lists');
      const empty = dialog.querySelector<HTMLElement>('.unit-inquire-notdata');
      if (list && page.thumbnail) {
        const item = document.createElement('div'); item.className = 'preview-inquiry-product';
        const checkbox = document.createElement('input'); checkbox.type = 'checkbox'; checkbox.checked = true; checkbox.setAttribute('aria-label', 'Include this product');
        const img = document.createElement('img'); img.src = page.thumbnail; img.alt = page.displayTitle;
        const name = document.createElement('span'); name.textContent = page.displayTitle;
        const remove = document.createElement('button'); remove.type = 'button'; remove.textContent = '×'; remove.setAttribute('aria-label', 'Remove product'); remove.onclick = () => { item.remove(); if (empty) empty.style.display = 'block'; };
        item.append(checkbox, img, name, remove); list.append(item); if (empty) empty.style.display = 'none';
      }
      dialog.querySelectorAll<HTMLInputElement>('.unit-selet-all input[type=checkbox]' ).forEach(input => { input.checked = true; input.onchange = () => dialog?.querySelectorAll<HTMLInputElement>('.preview-inquiry-product input').forEach(i => { i.checked = input.checked; }); });
      host.append(dialog); dialog.showModal(); dialog.focus();
      dialog.querySelector('.quote-close')?.addEventListener('click', closeQuote);
      dialog.addEventListener('click', e => { if (e.target === dialog) closeQuote(); });
    };
    const search = (input?: HTMLInputElement | null) => {
      const value = input?.value.trim();
      if (value) window.location.assign('/search.html?keyword=' + encodeURIComponent(value));
      else input?.focus();
    };
    const click = (event: MouseEvent) => {
      const t = event.target instanceof Element ? event.target : null; if (!t) return;
      if (t.closest('.unit-header-menu__switch')) { $('.unit-header-menu__box')?.classList.add('show'); document.body.style.overflow = 'hidden'; }
      if (t.closest('.unit-header-menu__close')) { $('.unit-header-menu__box')?.classList.remove('show'); document.body.style.overflow = ''; }
      const drop = t.closest('.unit-header-menu__nav__item-drop');
      if (drop) { event.preventDefault(); const content = drop.closest('a')?.nextElementSibling as HTMLElement | null; content?.classList.toggle('show'); drop.classList.toggle('active'); }
      if (t.closest('.unit-header-search__btn')) { $('.unit-header-search__modal')?.classList.add('show'); $<HTMLInputElement>('.unit-header-search__modal-input')?.focus(); }
      if (t.closest('.unit-header-search__modal-close') || t.matches('.unit-header-search__modal')) $('.unit-header-search__modal')?.classList.remove('show');
      if (t.closest('.unit-header-search__modal-btn')) search($<HTMLInputElement>('.unit-header-search__modal-input'));
      const categoryIcon = t.closest('.unit-list-sort__menu-icon');
      if (categoryIcon) { event.preventDefault(); const item = categoryIcon.closest('.unit-list-sort__menu-item'); const content = item?.querySelector<HTMLElement>(':scope > .unit-list-sort__menu-content'); if (content) { const open = content.style.display !== 'none'; content.style.display = open ? 'none' : 'block'; categoryIcon.setAttribute('aria-expanded', String(!open)); } }
      const faq = t.closest('.faq-title'); if (faq) { const row = faq.closest('.faq-row'); row?.classList.toggle('faq-open'); faq.setAttribute('aria-expanded', String(row?.classList.contains('faq-open'))); }
      if (t.closest('.widget-social-media-chat__server')) $('.widget-social-media-chat__inquiry')?.classList.toggle('show');
      if (t.closest('.widget-social-media-chat__modal-close,.widget-social-media-chat__cancel')) $('.widget-social-media-chat__inquiry')?.classList.remove('show');
      if (t.closest('.unit-detail-button-inquiry .base-button__inner,.unit-list__inquiry')) { event.preventDefault(); quote(); }
      if (t.closest('[data-pending-contact]')) { event.preventDefault(); toast('New company contact details will be added here.'); }
      if (t.closest('.icon-action-top')) window.scrollTo({ top: 0, behavior: 'smooth' });
      const tab = t.closest('[role="tab"][aria-controls]');
      if (tab) { event.preventDefault(); const id = tab.getAttribute('aria-controls'); const list = tab.closest('[role="tablist"]'); list?.querySelectorAll('[role="tab"]').forEach(el => { const active = el === tab; el.classList.toggle('active', active); el.setAttribute('aria-selected', String(active)); const panel = document.getElementById(el.getAttribute('aria-controls') || ''); panel?.classList.toggle('show', active); panel?.classList.toggle('active', active); }); if (id) document.getElementById(id)?.removeAttribute('hidden'); }
    };
    const keydown = (event: KeyboardEvent) => {
      const input = event.target as HTMLInputElement;
      if (event.key === 'Enter' && input.matches('.base-pagination__input-inner')) { event.preventDefault(); const box = input.closest<HTMLElement>('.base-pagination__input'); const n = Number(input.value); const max = Number(box?.dataset.count); const link = box?.querySelector<HTMLElement>('[data-href]')?.dataset.href; if (link && Number.isInteger(n) && n >= 1 && n <= max) window.location.assign(n === 1 ? link.replace('_list.html', '.html') : link.replace('_list.html', `_list${n}.html`)); }
      if (event.key === 'Enter' && input.matches('.unit-header-search__input,.unit-header-search__modal-input,.unit-header-menu__search input')) { event.preventDefault(); search(input); }
      if (event.key === 'Escape') { dropdowns.forEach(p => p.classList.remove('show')); document.body.style.overflow = ''; $('.unit-header-menu__box')?.classList.remove('show'); $('.unit-header-search__modal')?.classList.remove('show'); $('.widget-social-media-chat__inquiry')?.classList.remove('show'); }
      if ((event.key === 'Enter' || event.key === ' ') && input.matches('[data-keyboard-control]')) { event.preventDefault(); input.click(); }
    };
    all('.faq-title,.unit-header-menu__switch,.unit-header-menu__close,.unit-header-menu__nav__item-drop,.unit-header-search__btn,.unit-header-search__modal-close,.widget-social-media-chat__server').forEach(el => { el.tabIndex = 0; el.setAttribute('role', 'button'); el.dataset.keyboardControl = 'true'; });
    const submit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement; event.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      let result = form.querySelector<HTMLElement>('.form-preview-result');
      if (!result) { result = document.createElement('p'); result.className = 'form-preview-result'; result.setAttribute('role','status'); form.append(result); }
      result.textContent = 'Local preview: your inquiry has not been sent. New company delivery settings are pending.';
    };
    const focusChanged = (event: FocusEvent) => { const target = event.target as Element; if (!target.closest('.unit-header-nav__item,.preview-nav-dropdown')) dropdowns.forEach(p => p.classList.remove('show')); };
    host.addEventListener('focusin', focusChanged);
    host.addEventListener('click', click); host.addEventListener('keydown', keydown); host.addEventListener('submit', submit);
    return () => { removeNavListeners.forEach(fn => fn()); dropdowns.forEach(p => p.remove()); instances.forEach(instance => instance.destroy(true, true)); window.removeEventListener('scroll', onScroll); host.removeEventListener('focusin', focusChanged); host.removeEventListener('click', click); host.removeEventListener('keydown', keydown); host.removeEventListener('submit', submit); spacer.remove(); closeQuote(); document.body.style.overflow = ''; };
  }, [page]);
  return <>{page.styles.map(href => <link key={href} rel="stylesheet" href={href} />)}<div ref={root} dangerouslySetInnerHTML={{ __html: page.html }} /></>;
}
