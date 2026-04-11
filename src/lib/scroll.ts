const HEADER_OFFSET = 100;

export function smoothScrollToElement(el: HTMLElement | null): void {
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function scrollToHash(hash: string): void {
  if (!hash.startsWith('#')) return;
  const id = hash.slice(1);
  const el = document.getElementById(id);
  smoothScrollToElement(el);
}
