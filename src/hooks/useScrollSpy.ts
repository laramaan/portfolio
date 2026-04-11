import { useCallback, useEffect, useState } from 'react';

const SECTION_IDS = [
  'home',
  'services',
  'portfolio',
  'about',
  'experience',
  'blogs',
  'contact',
] as const;

export type SectionId = (typeof SECTION_IDS)[number] | '';

export function useScrollSpy(enabled: boolean): SectionId {
  const [active, setActive] = useState<SectionId>('home');

  const update = useCallback(() => {
    const scrollY = window.scrollY;
    let current: SectionId = '';

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.offsetTop - 200;
      const height = el.offsetHeight;
      if (scrollY > top && scrollY <= top + height) {
        current = id;
      }
    }

    if (window.innerHeight + scrollY >= document.body.offsetHeight - 100) {
      current = 'contact';
    } else if (scrollY < 200) {
      current = 'home';
    }

    setActive(current);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [enabled, update]);

  return active;
}
