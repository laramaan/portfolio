import { Link, type To } from 'react-router-dom';
import { motion } from 'framer-motion';

type Base = {
  label: string;
  className?: string;
  compactOnMobile?: boolean;
  fontSizeClass?: string;
};

/** Right-arrow icon used on pill CTAs and Download CV (pill). */
export function PillArrowIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 ml-0.5" aria-hidden>
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
    </svg>
  );
}

export function PillButtonLink({ to, label, className = '', compactOnMobile, fontSizeClass }: Base & { to: To }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={className}>
      <Link
        to={to}
        className="inline-flex items-center bg-yellow p-[2px] rounded-full shadow-sm transition-colors duration-300 w-fit group border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
      >
        <span className={`bg-green text-white rounded-full font-bold flex items-center font-headline tracking-wide mr-2 transition-colors ${compactOnMobile ? 'px-5 py-2.5 md:px-8 md:py-3.5' : 'px-8 py-3.5'} ${fontSizeClass || (compactOnMobile ? 'text-xs md:text-sm' : 'text-sm')}`}>
          {label}
        </span>
        <div className={`bg-white text-green rounded-full flex items-center justify-center shadow-sm mr-1 group-hover:translate-x-1 transition-transform duration-300 ${compactOnMobile ? 'w-8 h-8 md:w-10 md:h-10' : 'w-10 h-10'}`}>
          <PillArrowIcon />
        </div>
      </Link>
    </motion.div>
  );
}

export function PillButtonAnchor({
  href,
  label,
  className = '',
  external,
  compactOnMobile,
  fontSizeClass,
}: Base & { href: string; external?: boolean }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={className}>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        className="inline-flex items-center bg-yellow p-[2px] rounded-full shadow-sm transition-colors duration-300 w-fit group border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
      >
        <span className={`bg-green text-white rounded-full font-bold flex items-center font-headline tracking-wide mr-2 transition-colors ${compactOnMobile ? 'px-5 py-2.5 md:px-8 md:py-3.5' : 'px-8 py-3.5'} ${fontSizeClass || (compactOnMobile ? 'text-xs md:text-sm' : 'text-sm')}`}>
          {label}
        </span>
        <div className={`bg-white text-green rounded-full flex items-center justify-center shadow-sm mr-1 group-hover:translate-x-1 transition-transform duration-300 ${compactOnMobile ? 'w-8 h-8 md:w-10 md:h-10' : 'w-10 h-10'}`}>
          <PillArrowIcon />
        </div>
      </a>
    </motion.div>
  );
}
