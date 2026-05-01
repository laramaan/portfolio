import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { getServiceById } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PillButtonLink } from '@/components/ui/PillButton';

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const item = id ? getServiceById(id) : undefined;

  if (!item) {
    return (
      <section className="pt-32 pb-24 px-6 text-center">
        <h1 className="font-headline text-2xl text-green mb-4">Service not found</h1>
        <Link to="/services" className="text-yellow font-bold hover:underline">
          Back to services
        </Link>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{item.title} | Manish Portfolio</title>
        <meta name="description" content={item.description} />
      </Helmet>
      
      {/* Hero Section */}
      <article className="pt-28 md:pt-36 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl text-green leading-[1.1] tracking-tight">
                {item.title}
              </h1>
              <Link
                to="/services"
                className="text-green/80 hover:text-yellow font-bold font-headline flex items-center gap-2 transition-colors w-fit focus-visible:outline focus-visible:underline rounded shrink-0"
              >
                <span className="material-symbols-outlined">arrow_back</span> All services
              </Link>
            </div>
            
            <p className="font-body text-xl text-green/80 leading-relaxed max-w-5xl mb-12">
              {item.description}
            </p>

            {item.image && (
              <div className="w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-sm">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
            )}
          </ScrollReveal>
        </div>
      </article>

      {/* About & Benefits Section */}
      <section className="py-20 md:py-24 bg-grey">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-16 md:gap-20">
          <ScrollReveal>
            <h2 className="font-headline font-bold text-2xl text-green mb-6">Overview</h2>
            <p className="font-body text-[17px] text-green/80 leading-relaxed md:leading-loose">
              {item.detailed_description}
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="font-headline font-bold text-2xl text-green mb-8">Key Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {item.benefits.map((benefit, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.03] flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-green flex items-center justify-center mb-5 shrink-0">
                    <span className="font-headline font-bold text-white text-[15px]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="font-body text-green/80 text-[15px] leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What's Included & Deliverables (Dark Section) */}
      <section className="py-20 md:py-24 bg-green text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-headline font-bold text-3xl mb-12 text-center text-yellow">Everything You Need</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ScrollReveal delay={0.1} className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="font-headline font-bold text-xl mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-yellow">inventory_2</span>
                Services Included
              </h3>
              <ul className="space-y-3">
                {item.services_included.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/80 font-body text-[15px]">
                    <span className="material-symbols-outlined text-[20px] text-yellow shrink-0 mt-0.5">check</span>
                    {inc}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2} className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="font-headline font-bold text-xl mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-yellow">card_giftcard</span>
                Deliverables
              </h3>
              <ul className="space-y-3">
                {item.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/80 font-body text-[15px]">
                    <span className="material-symbols-outlined text-[20px] text-yellow shrink-0 mt-0.5">check</span>
                    {del}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3} className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="font-headline font-bold text-xl mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-yellow">trending_up</span>
                Outcomes
              </h3>
              <ul className="space-y-3">
                {item.outcomes.map((out, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/80 font-body text-[15px]">
                    <span className="material-symbols-outlined text-[20px] text-yellow shrink-0 mt-0.5">check</span>
                    {out}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process, Use Cases, Industries */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-20">
          <ScrollReveal>
            <h2 className="font-headline font-bold text-3xl text-green mb-10">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {item.process.map((step, i) => (
                <div key={i} className="bg-white p-8 md:px-8 md:py-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.03] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                  {/* Large Watermark Number */}
                  <div className="absolute -right-2 -top-2 text-8xl font-headline font-black text-green/[0.03] select-none group-hover:text-green/[0.05] transition-colors group-hover:scale-105 duration-500">
                    {String(step.step).padStart(2, '0')}
                  </div>
                  
                  <h4 className="font-headline font-bold text-xl text-green mb-4 relative z-10">{step.title}</h4>
                  <p className="font-body text-green/80 leading-relaxed text-[15px] relative z-10">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="font-headline font-bold text-3xl text-green mb-8">Ideal Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {item.use_cases.map((useCase, i) => (
                <div key={i} className="bg-grey rounded-2xl p-6 flex flex-col items-start gap-4 h-full border border-black/[0.02]">
                  <span className="material-symbols-outlined text-yellow text-3xl shrink-0">lightbulb</span>
                  <span className="font-body text-green/80 leading-relaxed text-[15px]">{useCase}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="font-headline font-bold text-3xl text-green mb-6">Industries</h2>
            <div className="flex flex-wrap gap-3">
              {item.industries.map((industry, i) => (
                <span key={i} className="px-5 py-2.5 bg-green/5 text-green font-body font-medium rounded-full border border-green/10">
                  {industry}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Problems Solved */}
      <section className="py-20 bg-grey">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-headline font-bold text-3xl text-green mb-12 text-center">Problems Solved</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {item.problems_solved.map((problem, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-3 border border-black/5">
                  <span className="material-symbols-outlined text-yellow mt-0.5 shrink-0">build</span>
                  <span className="font-body text-green/80 leading-relaxed">{problem}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-white leading-[1.2] w-full max-w-3xl text-center md:text-left">
            Ready to build your <span className="text-yellow">Amazing</span> <br className="hidden md:block" />
            <span className="text-yellow italic font-normal">Product?</span> Let&apos;s talk.
          </h2>
          <div className="shrink-0">
            <PillButtonLink to={{ pathname: '/', hash: 'contact' }} label="Contact Me" />
          </div>
        </div>
      </section>
    </>
  );
}
