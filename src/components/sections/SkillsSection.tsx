import { skillsRow1, skillsRow2 } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';

function SkillChip({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="min-w-[90px] md:min-w-[120px] bg-white/10 border border-white/10 p-4 md:p-6 rounded-2xl flex flex-col items-center justify-center shrink-0 shadow-sm mx-2 md:mx-3 transition-colors hover:bg-white/15">
      <div className="w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-3 flex items-center justify-center bg-yellow rounded-xl">
        <span className="material-symbols-outlined text-2xl md:text-3xl text-white">{icon}</span>
      </div>
      <span className="font-bold text-white text-[11px] md:text-[13px] whitespace-nowrap">{label}</span>
    </div>
  );
}

function MarqueeRow({
  items,
  animationClass,
  ariaHidden,
}: {
  items: { icon: string; label: string }[];
  animationClass: string;
  ariaHidden?: boolean;
}) {
  return (
    <div className={`flex items-center shrink-0 w-max ${animationClass}`} aria-hidden={ariaHidden}>
      {items.map((s) => (
        <SkillChip key={`${s.label}-${ariaHidden ? 'h' : 'v'}`} icon={s.icon} label={s.label} />
      ))}
    </div>
  );
}

export function SkillsSection() {
  return (
    <section className="py-20 md:py-24 bg-green overflow-hidden" id="skills" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <ScrollReveal className="lg:col-span-4 z-10 mb-6 lg:mb-0 flex flex-col items-center text-center lg:items-start lg:text-left">
            <SectionEyebrow label="Skills & Tools" light />
            <h2
              id="skills-heading"
              className="font-headline font-bold text-3xl md:text-5xl tracking-tight leading-[1.1] mb-6"
            >
              <span className="text-yellow italic font-normal">Skills & Tools</span>
              <span className="text-white"> I Bring to the Table</span>
            </h2>
            <p className="text-white/80 leading-relaxed font-body max-w-md">
              I leverage a diverse stack of industry-leading tools to bring conceptual ideas into technical reality.
            </p>
          </ScrollReveal>

          <div className="lg:col-span-8 relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-12 md:w-16 bg-gradient-to-r from-green to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 md:w-16 bg-gradient-to-l from-green to-transparent z-20 pointer-events-none" />

            <div className="flex flex-col gap-6 relative w-full">
              <div className="flex items-center w-max">
                <MarqueeRow items={skillsRow1} animationClass="animate-scroll-reverse" />
                <MarqueeRow items={skillsRow1} animationClass="animate-scroll-reverse" ariaHidden />
              </div>
              <div className="flex items-center w-max">
                <MarqueeRow items={skillsRow2} animationClass="animate-scroll-slow" />
                <MarqueeRow items={skillsRow2} animationClass="animate-scroll-slow" ariaHidden />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
