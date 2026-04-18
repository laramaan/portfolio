import { useLayoutEffect, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { scrollToHash } from '@/lib/scroll';
import { Hero } from '@/components/sections/Hero';
import { MarqueeBanner } from '@/components/sections/MarqueeBanner';
import { ServicesSection } from '@/components/sections/ServicesSection';
// import { MobileAppPromoSection } from '@/components/sections/MobileAppPromoSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { BlogsSection } from '@/components/sections/BlogsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (!location.hash) return;
    const id = requestAnimationFrame(() => scrollToHash(location.hash));
    return () => cancelAnimationFrame(id);
  }, [location.hash, location.key]);

  useEffect(() => {
    if (location.pathname === '/' && !location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <Helmet>
        <title>Manish Portfolio | Digital Editorial</title>
        <meta
          name="description"
          content="Product design and UI/UX portfolio — services, projects, experience, and contact."
        />
      </Helmet>
      <Hero />
      <MarqueeBanner />
      <ServicesSection />
      {/* <MobileAppPromoSection /> */}
      <PortfolioSection />
      <SkillsSection />
      <TestimonialsSection />
      <AboutSection />
      <ExperienceSection />
      <FAQSection />
      <BlogsSection />
      <ContactSection />
      <MarqueeBanner singleYellow />
    </>
  );
}
