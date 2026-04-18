import { educationItems, workItems } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

function TimelineCard({
  title,
  icon,
  items,
}: {
  title: string;
  icon: string;
  items: { period: string; title: string; subtitle: string }[];
}) {
  return (
    <div className="bg-white/5 p-5 md:p-6 rounded-3xl border border-white/10 shadow-sm hover:bg-white/10 transition-colors duration-300 h-full flex flex-col">
      <div className="flex items-center gap-4 mb-5 md:mb-6 pb-5 border-b border-white/10 shrink-0">
        <div className="w-10 h-10 bg-yellow rounded-full flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-green text-[20px] drop-shadow-sm">{icon}</span>
        </div>
        <h3 className="font-headline text-lg md:text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="ml-2 md:ml-3 space-y-5 md:space-y-6 relative flex-1 min-h-0">
        <div
          className="absolute left-[11px] md:left-[13px] top-2 bottom-2 w-[2px] bg-white/20 rounded-full"
          aria-hidden
        />
        {items.map((it) => (
          <div key={it.title + it.period} className="pl-8 md:pl-10 relative">
            <div
              className="absolute left-[11px] md:left-[13px] top-2 w-[12px] h-[12px] -translate-x-[5px] rounded-full bg-yellow ring-[4px] ring-green"
              aria-hidden
            />
            <p className="text-[13px] text-white/50 tracking-wide mb-1 font-body">{it.period}</p>
            <h4 className="font-headline text-[17px] md:text-[19px] font-bold text-white mb-1">{it.title}</h4>
            <p className="text-[13px] md:text-[14px] text-white/70 font-body">{it.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section className="py-20 md:py-24 bg-green" id="experience" aria-labelledby="experience-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-4 h-0.5 bg-yellow" aria-hidden />
            <p className="font-headline font-bold text-[15px] tracking-wide text-white">Education & Work</p>
          </div>
          <h2
            id="experience-heading"
            className="font-headline font-extrabold text-3xl md:text-5xl text-white leading-tight"
          >
            My <span className="text-yellow italic font-normal">Academic and</span>
            <br />
            <span className="text-yellow italic font-normal">Professional</span> Journey
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          <ScrollReveal delay={0.05} className="h-full">
            <TimelineCard title="Education" icon="school" items={educationItems} />
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="h-full">
            <TimelineCard title="Work Experience" icon="work" items={workItems} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
