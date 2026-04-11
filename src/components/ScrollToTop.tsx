import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scrolls the document to the top whenever the route pathname changes. */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}
