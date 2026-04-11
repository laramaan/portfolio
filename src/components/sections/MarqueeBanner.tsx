import type { ReactNode } from 'react';
import { site } from '@/data/portfolio';

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
      <span key={`${label}-${ariaHidden ? 'h' : 'v'}`} className="whitespace-nowrap leading-none">
        {label}
      </span>,
    );
    cells.push(
      <span
        key={`star-${label}-${ariaHidden ? 'h' : 'v'}`}
        className="font-headline font-extrabold leading-none opacity-70 inline-flex items-center justify-center text-[1em] min-w-[1em] select-none"
        aria-hidden
      >
        *
      </span>,
    );
  });
  return (
    <div
      className="marquee-content flex items-center shrink-0 min-w-full justify-around gap-6 md:gap-10 px-4"
      aria-hidden={ariaHidden}
    >
      {cells}
    </div>
  );
}

export function MarqueeBanner() {
  const marquee = site.marquee;
  return (
    <div className="relative w-full z-10 -mt-12 md:-mt-16 overflow-hidden py-4 md:py-5 pointer-events-none flex flex-col justify-center">
      <div
        className="absolute w-[110%] h-[42px] md:h-[48px] -ml-[5%] bg-green origin-center -rotate-[2.5deg] top-1/2 -translate-y-1/2 z-0"
        aria-hidden
      />
      <div className="w-[105%] -ml-[2.5%] bg-yellow py-2 md:py-2.5 flex items-center font-headline font-extrabold text-lg md:text-xl tracking-wide text-green pointer-events-auto transform shadow-sm relative z-10 overflow-hidden">
        <div className="marquee-container w-full">
          <MarqueeCells marquee={marquee} />
          <MarqueeCells marquee={marquee} ariaHidden />
        </div>
      </div>
    </div>
  );
}
