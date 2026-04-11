import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { site } from '@/data/portfolio';

type Props = {
  label?: string;
  className?: string;
  /** `pill` matches “View All Projects” (yellow ring + green label + white icon). */
  variant?: 'outline' | 'pill';
};

function DownloadIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 ml-0.5" aria-hidden>
      <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
    </svg>
  );
}

export function DownloadResumeButton({ label = 'Download CV', className = '', variant = 'outline' }: Props) {
  const [busy, setBusy] = useState(false);
  const url = site.resumeUrl ?? '/Resume.pdf';
  const filename = site.resumeDownloadFilename ?? 'Resume.pdf';

  const onClick = useCallback(async () => {
    setBusy(true);
    try {
      const res = await fetch(url, { credentials: 'same-origin' });
      if (!res.ok) throw new Error('fetch failed');
      const blob = await res.blob();
      const href = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = href;
      a.download = filename;
      a.rel = 'noopener';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(href);
    } catch {
      window.open(url, '_blank', 'noopener,noreferrer');
    } finally {
      setBusy(false);
    }
  }, [filename, url]);

  if (variant === 'pill') {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={className}>
        <button
          type="button"
          onClick={onClick}
          disabled={busy}
          className="inline-flex items-center bg-yellow p-[2px] rounded-full shadow-sm transition-colors duration-300 w-fit group border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow disabled:opacity-70"
        >
          <span className="bg-green text-white px-8 py-3.5 rounded-full font-bold flex items-center font-headline text-sm tracking-wide mr-2 transition-colors">
            {busy ? 'Preparing…' : label}
          </span>
          <span className="bg-white text-green w-10 h-10 rounded-full flex items-center justify-center shadow-sm mr-1 group-hover:translate-x-1 transition-transform duration-300">
            <DownloadIcon />
          </span>
        </button>
      </motion.div>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={busy}
      whileHover={{ scale: busy ? 1 : 1.02 }}
      whileTap={{ scale: busy ? 1 : 0.98 }}
      className={`border-2 border-green text-green rounded-full px-8 md:px-10 py-3.5 font-bold font-headline text-sm hover:bg-green hover:text-white transition-colors bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green disabled:opacity-70 ${className}`}
    >
      {busy ? 'Preparing…' : label}
    </motion.button>
  );
}
