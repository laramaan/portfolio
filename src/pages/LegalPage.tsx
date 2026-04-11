import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { legal } from '@/data/portfolio';
import type { LegalPageContent } from '@/types/site';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

type Kind = 'terms' | 'privacy';

export default function LegalPage() {
  const { pathname } = useLocation();
  const kind: Kind = pathname.includes('privacy') ? 'privacy' : 'terms';
  const page: LegalPageContent = kind === 'terms' ? legal.terms : legal.privacy;

  return (
    <>
      <Helmet>
        <title>{page.title} | Manish Portfolio</title>
        <meta name="description" content={page.intro.slice(0, 160)} />
      </Helmet>
      <article className="pt-28 md:pt-36 pb-16 md:pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-green/70 hover:text-green font-body text-sm mb-10 focus-visible:outline focus-visible:underline rounded"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back to home
            </Link>
            <p className="text-sm text-green/50 font-body mb-2">Last updated: {page.lastUpdated}</p>
            <h1 className="font-headline font-bold text-3xl md:text-4xl text-green mb-6">{page.title}</h1>
            <p className="text-green/75 font-body text-lg leading-relaxed mb-12 border-b border-black/5 pb-10">
              {page.intro}
            </p>
          </ScrollReveal>

          <div className="space-y-10">
            {page.sections.map((section) => (
              <ScrollReveal key={section.heading}>
                <h2 className="font-headline font-bold text-xl text-green mb-4">{section.heading}</h2>
                <div className="space-y-4 text-green/80 font-body leading-relaxed">
                  {section.paragraphs.map((p, i) => (
                    <p key={`${section.heading}-${i}`}>{p}</p>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
