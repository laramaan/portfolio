import type { ReactNode } from 'react';
import { site } from '@/data/portfolio';

function MarqueeCells({ ariaHidden }: { ariaHidden?: boolean }) {
  const cells: ReactNode[] = [];
  site.marquee.forEach((label) => {
    cells.push(
      <span key={`${label}-${ariaHidden ? 'h' : 'v'}`} className="whitespace-nowrap">
        {label}
      </span>,
    );
    cells.push(
      <span
        key={`star-${label}-${ariaHidden ? 'h' : 'v'}`}
        className="font-normal text-5xl md:text-6xl leading-none font-sans opacity-70 translate-y-2 md:translate-y-3"
        aria-hidden
      >
        *
      </span>,
    );
  });
  return (
    <div
      className="marquee-content flex items-center shrink-0 min-w-full justify-around gap-8 md:gap-12 px-6"
      aria-hidden={ariaHidden}
    >
      {cells}
    </div>
  );
}

export function MarqueeBanner() {
  return (
    <div className="relative w-full z-10 -mt-12 md:-mt-16 overflow-hidden py-6 md:py-8 pointer-events-none flex flex-col justify-center">
      <div
        className="absolute w-[110%] h-[52px] md:h-[60px] -ml-[5%] bg-green origin-center -rotate-[2.5deg] top-1/2 -translate-y-1/2 z-0"
        aria-hidden
      />
      <div className="w-[105%] -ml-[2.5%] bg-yellow py-3 flex items-center font-headline font-extrabold text-xl md:text-[28px] tracking-wide text-green pointer-events-auto transform shadow-sm relative z-10 overflow-hidden">
        <div className="marquee-container w-full">
          <MarqueeCells />
          <MarqueeCells ariaHidden />
        </div>
      </div>
    </div>
  );
}
