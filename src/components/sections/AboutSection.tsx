import { motion } from 'framer-motion';
import { site, aboutSkillPills } from '@/data/portfolio';
import { PillButtonAnchor } from '@/components/ui/PillButton';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const rowTransforms = [
  'translate-x-2',
  '-translate-x-3',
  'translate-x-1',
] as const;

export function AboutSection() {
  return (
    <section className="py-20 md:py-24 bg-green" id="about" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <ScrollReveal className="relative flex justify-center lg:justify-start">
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] z-10 pl-8 md:pl-12 pb-12">
              <div
                className="absolute inset-0 bg-yellow rounded-full z-0 transform translate-x-6 md:translate-x-8 -translate-y-4"
                aria-hidden
              />
              <div className="relative w-full h-full z-10 flex items-center justify-center">
                <img
                  src={site.aboutPortrait}
                  alt={site.about.signature}
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="w-[90%] h-[90%] object-cover rounded-full shadow-lg"
                />
              </div>

              <div className="absolute bottom-8 md:bottom-20 left-0 w-full px-2 z-30 flex flex-col items-center justify-center gap-3 md:gap-4 pointer-events-none scale-90 md:scale-100">
                {aboutSkillPills.map((row, ri) => (
                  <div
                    key={ri}
                    className={`flex flex-wrap justify-center gap-3 md:gap-4 w-full ${rowTransforms[ri]}`}
                  >
                    {row.map((label, j) => {
                      const isYellow = (ri + j) % 2 === 0;
                      return (
                        <div
                          key={label}
                          className={`px-4 md:px-5 py-2 rounded-full text-xs font-headline font-bold shadow-md border-[1.5px] border-white/90 ${
                            isYellow ? 'bg-yellow text-green' : 'bg-green text-white'
                          }`}
                        >
                          {label}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-6 text-white pt-4 lg:pt-0">
            <ScrollReveal>
              <div className="flex items-center gap-3">
                <div className="w-5 h-0.5 bg-yellow" aria-hidden />
                <span className="text-white font-body text-[15px] tracking-wide">About Me</span>
              </div>
              <h2
                id="about-heading"
                className="text-4xl md:text-[54px] font-headline font-bold leading-[1.1] tracking-tight mt-2"
              >
                {site.about.lead}{' '}
                <span className="text-yellow italic font-normal">{site.about.nameHighlight}</span>
              </h2>
              <p className="text-white/75 text-lg leading-relaxed max-w-xl font-body mb-2">
                {site.about.body}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="flex flex-wrap gap-8 md:gap-14 pt-2 pb-6">
                {site.about.stats.map((s) => (
                  <div key={s.label} className="flex flex-col gap-1">
                    <div className="text-3xl md:text-[38px] font-headline font-bold text-yellow leading-none">
                      {s.value}
                    </div>
                    <div className="text-[14px] text-white/70 font-body">{s.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-8 mt-2">
                <PillButtonAnchor href="/assets/Resume.pdf" label="Download CV" />
                <motion.div
                  className="text-yellow italic signature-font text-4xl md:text-5xl origin-left"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {site.about.signature}
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
