import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogs } from '@/data/portfolio';
import { PillButtonLink } from '@/components/ui/PillButton';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';

export function BlogsSection() {
  return (
    <section className="py-20 md:py-24 bg-grey" id="blogs" aria-labelledby="blogs-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-8">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <SectionEyebrow label="News & Blogs" />
            <h2
              id="blogs-heading"
              className="font-headline font-bold text-3xl md:text-5xl tracking-tight leading-[1.1]"
            >
              <span className="text-green">Our Latest</span>
              <span className="text-yellow italic font-normal"> News &amp; Blogs</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <PillButtonLink to="/blogs" label="View All Blogs" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {blogs.slice(0, 3).map((blog, i) => (
            <motion.article
              key={blog.id}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Link
                to={`/blog/${blog.id}`}
                className="group flex flex-col h-full rounded-3xl bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
              >
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-white shrink-0">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {blog.category && (
                      <span className="bg-yellow text-green font-bold text-[11px] px-3 py-1 rounded-full font-headline uppercase tracking-wide flex items-center justify-center leading-none">
                        {blog.category}
                      </span>
                    )}
                    <span className="bg-white/90 backdrop-blur-sm text-green font-bold text-[13px] px-4 py-1.5 rounded-full font-headline flex items-center justify-center leading-none">
                      {blog.date}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-green/60 font-body text-[14px] mb-3">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden>
                    schedule
                  </span>
                  <span>{blog.time}</span>
                </div>
                <h3 className="font-headline font-bold text-[22px] text-green group-hover:text-yellow transition-colors leading-[1.3] mb-4">
                  {blog.title}
                </h3>
                <p className="font-body text-green/70 leading-relaxed flex-1 min-h-0 mt-1">
                  {blog.excerpt ?? `${blog.content.slice(0, 140)}…`}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <PillButtonLink to="/blogs" label="View All Blogs" />
        </div>
      </div>
    </section>
  );
}
