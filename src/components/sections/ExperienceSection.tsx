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
    <div className="bg-[#F8F9F8] p-8 md:p-10 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-8 md:mb-10 pb-8 border-b border-black/5">
        <div className="w-14 h-14 bg-yellow rounded-full flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-green text-[28px] drop-shadow-sm">{icon}</span>
        </div>
        <h3 className="font-headline text-2xl md:text-3xl font-bold text-green">{title}</h3>
      </div>
      <div className="ml-2 md:ml-4 space-y-8 md:space-y-10 relative">
        <div
          className="absolute left-[13px] md:left-[15px] top-3 bottom-3 w-0.5 bg-green/20 rounded-full"
          aria-hidden
        />
        {items.map((it) => (
          <div key={it.title + it.period} className="pl-10 md:pl-12 relative">
            <div
              className="absolute left-[13px] md:left-[15px] top-2.5 w-3 h-3 -translate-x-1/2 rounded-full bg-green ring-[5px] ring-[#F8F9F8]"
              aria-hidden
            />
            <p className="text-[14px] text-green/50 tracking-wide mb-2 font-body">{it.period}</p>
            <h4 className="font-headline text-xl md:text-[22px] font-bold text-green mb-1">{it.title}</h4>
            <p className="text-[15px] text-green/65 font-body">{it.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section className="py-20 md:py-24 bg-white" id="experience" aria-labelledby="experience-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-4 h-0.5 bg-yellow" aria-hidden />
            <p className="font-headline font-bold text-[15px] tracking-wide text-green">Education & Work</p>
          </div>
          <h2
            id="experience-heading"
            className="font-headline font-extrabold text-3xl md:text-5xl text-green leading-tight"
          >
            My <span className="text-yellow italic font-normal">Academic and</span>
            <br />
            <span className="text-yellow italic font-normal">Professional</span> Journey
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <ScrollReveal delay={0.05}>
            <TimelineCard title="Education" icon="school" items={educationItems} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <TimelineCard title="Work Experience" icon="work" items={workItems} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
