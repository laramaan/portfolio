import { motion } from 'framer-motion';

export function PageLoader() {
  return (
    <div
      className="min-h-[40vh] flex flex-col items-center justify-center gap-4 text-green"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <motion.div
        className="w-11 h-11 rounded-full border-2 border-yellow border-t-green"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
      />
      <span className="text-sm font-body text-green/60">Loading…</span>
    </div>
  );
}
