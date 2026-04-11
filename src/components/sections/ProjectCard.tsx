import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Project } from '@/types';

type Props = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/project/${project.id}`}
        className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm flex flex-col h-full border border-black/5 group cursor-pointer hover:shadow-md transition-shadow duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green block"
      >
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-grey">
          <img
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex flex-wrap gap-3 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-yellow text-green font-headline font-bold text-[13px] px-5 py-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-auto gap-4">
          <h3 className="text-xl md:text-2xl font-headline font-bold text-green leading-snug">
            {project.title}
          </h3>
          <div className="w-12 h-12 shrink-0 bg-green text-white rounded-full flex items-center justify-center shadow-md group-hover:bg-yellow group-hover:text-green transition-colors duration-300">
            <span className="material-symbols-outlined" aria-hidden>
              arrow_forward
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
