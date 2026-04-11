import { Link, useLocation } from 'react-router-dom';

const items = [
  { hash: 'home', icon: 'home', label: 'Home' },
  { hash: 'services', icon: 'rebase_edit', label: 'Services' },
  { hash: 'portfolio', icon: 'work', label: 'Projects' },
  { path: '/blogs', icon: 'menu_book', label: 'Blogs' },
  { hash: 'about', icon: 'person', label: 'About' },
] as const;

export function MobileBottomNav() {
  const { pathname, hash } = useLocation();
  const onHome = pathname === '/';

  return (
    <nav
      className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md bg-green rounded-full p-2 flex justify-around items-center shadow-2xl border border-white/10"
      aria-label="Mobile section navigation"
    >
      {items.map((item) => {
        const isBlog = 'path' in item;
        const effectiveHash = hash || (onHome ? '#home' : '');
        const active = isBlog
          ? pathname === item.path
          : onHome && effectiveHash === `#${item.hash}`;
        const to = isBlog ? item.path : { pathname: '/' as const, hash: item.hash };
        return (
          <Link
            key={isBlog ? item.path : item.hash}
            to={to}
            aria-label={item.label}
            aria-current={active ? 'page' : undefined}
            className={`p-3 rounded-full flex items-center justify-center transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow ${
              active ? 'bg-yellow text-green' : 'text-white/60 hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined" aria-hidden>
              {item.icon}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
