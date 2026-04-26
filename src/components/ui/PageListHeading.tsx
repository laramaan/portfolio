import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';

type Props = {
  eyebrow: string;
  titleBefore: string;
  titleAccent: string;
  titleAfter?: string;
};

/**
 * Matches the home “Services I Provide” block: eyebrow line + split headline + Home link.
 */
export function PageListHeading({ eyebrow, titleBefore, titleAccent, titleAfter = '' }: Props) {
  return (
    <ScrollReveal className="flex flex-row items-end justify-between mb-12 md:mb-16 gap-4 md:gap-8">
      <div className="max-w-2xl text-left">
        <SectionEyebrow label={eyebrow} />
        <h1 className="font-headline font-bold text-3xl md:text-5xl tracking-tight leading-[1.1]">
          <span className="text-green">{titleBefore}</span>
          <span className="text-yellow italic font-normal">{titleAccent}</span>
          {titleAfter ? <span className="text-green">{titleAfter}</span> : null}
        </h1>
      </div>
      <Link
        to="/"
        className="text-green/80 hover:text-yellow font-bold font-headline flex items-center gap-2 transition-colors w-fit self-end md:self-auto focus-visible:outline focus-visible:underline rounded shrink-0"
      >
        <span className="material-symbols-outlined">home</span> Home
      </Link>
    </ScrollReveal>
  );
}
