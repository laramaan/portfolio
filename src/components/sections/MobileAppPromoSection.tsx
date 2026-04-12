import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SCREEN_PRIMARY =
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=520&h=1120&q=80';
const SCREEN_SECONDARY =
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=520&h=1120&q=80';

function DecorPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/15" />
      <div className="absolute -left-10 top-1/3 h-48 w-48 rounded-full border border-white/10" />
      <div className="absolute bottom-8 right-1/4 h-32 w-32 rounded-full border border-white/10" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
}

function PhoneFrame({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[9/19] shrink-0 rounded-[2rem] bg-zinc-900/90 p-[7px] shadow-2xl ring-1 ring-white/20 ${className ?? ''}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.55rem] bg-white">
        <img src={src} alt={alt} width={520} height={1120} loading="lazy" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

function StoreOutlineLink({
  href,
  lines,
  icon,
}: {
  href: string;
  lines: [string, string];
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-[44px] items-center gap-3 rounded-xl border border-white/90 px-4 py-2.5 font-body font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
    >
      {icon}
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[11px] font-bold uppercase tracking-wide opacity-90">{lines[0]}</span>
        <span className="text-sm font-bold">{lines[1]}</span>
      </span>
    </a>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0 text-white" aria-hidden fill="currentColor">
      <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.24-2.27 2.27-2.3-2.3-2.26 2.26 8.49 8.49 4.34-4.34c.27-.27.44-.64.44-1.03s-.17-.76-.44-1.03l-4.34-4.34zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0 text-white" aria-hidden fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export function MobileAppPromoSection() {
  return (
    <section className="bg-grey py-10 md:py-14" aria-labelledby="mobile-app-promo-heading">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[28px] bg-green text-white shadow-lg"
        >
          <DecorPattern />

          <div className="relative grid items-center gap-10 py-10 pl-6 pr-6 pt-12 md:gap-12 md:py-12 md:pl-10 md:pr-12 lg:grid-cols-2 lg:gap-14 lg:py-14 lg:pl-14 lg:pr-16">
            <div className="relative mx-auto flex min-h-[260px] w-full max-w-md items-center justify-center lg:mx-0 lg:max-w-none lg:justify-start">
              <PhoneFrame
                src={SCREEN_SECONDARY}
                alt=""
                className="absolute left-[4%] top-1/2 z-0 w-[min(42%,200px)] -translate-y-1/2 -rotate-[7deg] scale-[0.9] opacity-95 sm:left-[8%] lg:left-0"
              />
              <PhoneFrame
                src={SCREEN_PRIMARY}
                alt=""
                className="relative z-10 w-[min(48%,230px)] translate-x-[10%] rotate-[6deg] sm:translate-x-[14%] lg:translate-x-[20%]"
              />
            </div>

            <div className="text-center lg:text-left">
              <p className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-yellow md:text-sm">
                Choose your device platform
              </p>
              <h2
                id="mobile-app-promo-heading"
                className="mt-3 font-headline text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-[2.65rem]"
              >
                Ship polished apps for every screen
              </h2>
              <p className="mx-auto mt-5 max-w-lg font-body text-base leading-relaxed text-white/90 lg:mx-0">
                From discovery to App Store and Play Store releases, I help teams ship performant mobile
                experiences—native or cross-platform—with clear APIs, solid UX, and maintainable code.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4 lg:justify-start">
                <StoreOutlineLink
                  href="https://play.google.com/store"
                  icon={<GooglePlayIcon />}
                  lines={['Get it on', 'Google Play']}
                />
                <StoreOutlineLink
                  href="https://www.apple.com/app-store/"
                  icon={<AppleIcon />}
                  lines={['Download on the', 'App Store']}
                />
              </div>
              <p className="mt-6 font-body text-sm text-white/70">
                Prefer a custom build?{' '}
                <Link to={{ pathname: '/', hash: 'contact' }} className="font-semibold text-yellow underline-offset-2 hover:underline">
                  Start a conversation
                </Link>{' '}
                or view{' '}
                <Link to="/services" className="font-semibold text-yellow underline-offset-2 hover:underline">
                  mobile services
                </Link>
                .
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
