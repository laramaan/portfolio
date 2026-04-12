import type { ReactNode } from 'react';
import { site } from '@/data/portfolio';

/** Eight-spoked asterisk (matches reference star separators). */
const STAR = '\u2733';

function MarqueeCells({
  ariaHidden,
  marquee,
}: {
  ariaHidden?: boolean;
  marquee: readonly string[];
}) {
  const cells: ReactNode[] = [];
  marquee.forEach((label) => {
    cells.push(
      <span
        key={`${label}-${ariaHidden ? 'h' : 'v'}`}
        className="whitespace-nowrap leading-none font-headline font-extrabold text-[#1A1A1A] tracking-tight"
      >
        {label}
      </span>,
    );
    cells.push(
      <span
        key={`star-${label}-${ariaHidden ? 'h' : 'v'}`}
        className="font-headline font-extrabold leading-none text-[#1A1A1A] inline-flex items-center justify-center select-none shrink-0 text-[1em] w-[1em] h-[1em]"
        aria-hidden
      >
        {STAR}
      </span>,
    );
  });
  return (
    <div
      className="marquee-content flex items-center shrink-0 min-w-full justify-around gap-8 md:gap-12 px-5 md:px-8"
      aria-hidden={ariaHidden}
    >
      {cells}
    </div>
  );
}

export function MarqueeBanner() {
  const marquee = site.marquee;
  return (
    <div className="relative z-10 -mt-12 md:-mt-16 w-screen max-w-[100vw] left-1/2 -translate-x-1/2 overflow-x-hidden overflow-y-hidden py-6 md:py-7 pointer-events-none">
      <div className="relative w-full min-h-[52px] md:min-h-[56px]">
        {/* Green strip only: rotated; full bleed width */}
        <div
          className="pointer-events-none absolute z-0 left-1/2 top-1/2 w-[110%] max-w-none -translate-x-1/2 -translate-y-1/2 h-[46px] md:h-[52px] bg-[#2D4030] -rotate-[2.5deg] origin-center"
          aria-hidden
        />
        {/* Yellow strip: no rotation; clips marquee — no page scrollbars */}
        <div className="relative z-10 w-full bg-[#FCAF17] py-2.5 md:py-3 shadow-[0_1px_0_rgba(0,0,0,0.06)] pointer-events-auto overflow-hidden">
          <div className="marquee-container w-full">
            <MarqueeCells marquee={marquee} />
            <MarqueeCells marquee={marquee} ariaHidden />
          </div>
        </div>
      </div>
    </div>
  );
}
