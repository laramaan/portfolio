import { motion } from 'framer-motion';
import { site } from '@/data/portfolio';
import { DownloadResumeButton } from '@/components/ui/DownloadResumeButton';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function AboutSection() {
  return (
    <section className="py-20 md:py-24 bg-grey" id="about" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch">
          <ScrollReveal className="relative flex justify-center lg:justify-start lg:items-center">
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px]">
              <img
                src={site.aboutPortrait}
                alt={site.about.signature}
                width={400}
                height={400}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white"
              />
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-6 text-green pt-4 lg:pt-0">
            <ScrollReveal>
              <div className="flex items-center gap-3">
                <div className="w-5 h-0.5 bg-yellow" aria-hidden />
                <span className="text-green font-body text-[15px] tracking-wide">About Me</span>
              </div>
              <h2
                id="about-heading"
                className="text-4xl md:text-[54px] font-headline font-bold leading-[1.1] tracking-tight mt-2"
              >
                {site.about.lead}{' '}
                <span className="text-yellow italic font-normal">{site.about.nameHighlight}</span>
              </h2>
              <p className="text-green/80 text-lg leading-relaxed max-w-xl font-body mb-2">
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
                    <div className="text-[14px] text-green/80 font-body">{s.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-8 mt-2">
                <DownloadResumeButton variant="pill" label="Download CV" />
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
