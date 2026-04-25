import { motion } from 'framer-motion';
import { site } from '@/data/portfolio';
import { PillButtonLink } from '@/components/ui/PillButton';
import { DownloadResumeButton } from '@/components/ui/DownloadResumeButton';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Hero() {
  return (
    <header
      className="relative pt-28 pb-8 md:pt-44 md:pb-12 bg-white overflow-hidden"
      id="home"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 md:gap-12 items-center relative z-20">
        <div className="z-30 relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 bg-[#e4e5e4] rounded-full px-5 pt-1.5 pb-2 mb-8 z-30 shadow-sm"
          >
            <span className="w-3 h-3 bg-[#0dff45] rounded-full mt-0.5" aria-hidden />
            <span className="text-green font-headline font-bold uppercase tracking-[0.15em] text-sm leading-none mt-1">
              {site.tagline}
            </span>
          </motion.div>

          <motion.h1
            className="font-headline font-bold text-3xl md:text-5xl leading-[1.1] text-green mb-6 z-30 relative"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            I&apos;m{' '}
            <span className="text-yellow italic font-normal relative inline-block pr-2">
              {site.heroName},
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-yellow rounded-full" aria-hidden />
            </span>
            <span className="block mt-2">{site.heroRoles[0]}</span>
            <span className="block text-green mt-2">{site.heroRoles[1]}</span>
          </motion.h1>

          <motion.p
            className="text-lg text-green/80 max-w-xl mb-10 leading-relaxed font-body z-30 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            {site.heroBio}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 items-center z-30 relative"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
          >
            <PillButtonLink to="/projects" label="View My Portfolio" />
            <DownloadResumeButton label="Download CV" />
          </motion.div>
        </div>

        <ScrollReveal className="relative flex justify-center items-center mt-12 md:mt-0 px-2 md:px-0 z-10 h-full">
          <div className="relative w-[90%] max-w-md aspect-[4/5] z-10 bottom-0">
            <img
              alt="Portrait"
              width={448}
              height={560}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover rounded-[3rem] shadow-2xl relative z-10"
              style={{ objectPosition: 'center' }}
              src={site.heroPortrait}
            />
          </div>

          <a
            href={site.hireEmail}
            className="absolute -top-4 -right-1 md:-top-8 md:-right-2 w-28 h-28 md:w-32 md:h-32 bg-green rounded-full flex justify-center items-center border-[8px] border-white p-2 z-30 hover:scale-105 transition-transform duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
            aria-label="Hire me — send email"
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-white fill-current animate-[spin_10s_linear_infinite] motion-reduce:animate-none"
              aria-hidden
            >
              <path
                id="circlePathHero"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                fill="transparent"
              />
              <text fontSize="16.5" fontWeight="900" letterSpacing="3" fontFamily="'Plus Jakarta Sans', sans-serif">
                <textPath href="#circlePathHero" startOffset="0%">
                  HIRE ME • HIRE ME •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-yellow w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-green text-[22px] md:text-2xl" aria-hidden>
                  mail
                </span>
              </div>
            </div>
          </a>

          <div className="absolute bottom-6 -left-8 md:-left-16 z-30 hover:-translate-y-2 transition-transform hidden sm:block">
            <div
              className="absolute -top-6 -left-6 w-8 h-8 text-green -rotate-12 filter drop-shadow-md z-40 pointer-events-none"
              aria-hidden
            >
              <svg fill="currentColor" stroke="white" strokeWidth={1.5} viewBox="0 0 24 24">
                <path d="M5.5 2.5L20 10.5L13.5 13.5L10.5 20L5.5 2.5Z" />
              </svg>
            </div>
            <div className="bg-green text-white px-6 py-2.5 rounded-full shadow-lg font-bold text-[15px] tracking-wide relative z-30">
              {site.heroBadgeLeft ?? 'Web Development'}
            </div>
          </div>

          <div className="absolute top-2/3 -right-6 md:-right-10 z-30 hover:-translate-y-2 transition-transform mt-8 hidden sm:block">
            <div
              className="absolute -top-6 -left-6 w-8 h-8 text-yellow -rotate-45 filter drop-shadow-md z-40 pointer-events-none"
              aria-hidden
            >
              <svg fill="currentColor" stroke="white" strokeWidth={1.5} viewBox="0 0 24 24">
                <path d="M5.5 2.5L20 10.5L13.5 13.5L10.5 20L5.5 2.5Z" />
              </svg>
            </div>
            <div className="bg-yellow text-green px-6 py-2.5 rounded-full shadow-lg font-bold text-[15px] tracking-wide relative z-30">
              {site.heroBadgeRight ?? 'Laravel & React'}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </header>
  );
}
