import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight, Github } from "lucide-react";
import { personalInfo, projects, seo } from "../data/personalData";

const ProjectRow = ({ p, i }) => {
  const [imgErr, setImgErr] = useState(false);
  const num = String(i + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.07 }}
      viewport={{ once: true }}
      className="group grid lg:grid-cols-[64px_1fr_280px] gap-6 lg:gap-10 py-12 border-b border-zinc-800/50 items-start"
    >
      {/* Number */}
      <span className="hidden lg:block text-5xl font-bold text-zinc-800 group-hover:text-zinc-700 transition-colors leading-none select-none pt-1">
        {num}
      </span>

      {/* Info */}
      <div>
        <div className="flex items-center gap-3 mb-1">
          <span className="text-xs text-zinc-600 lg:hidden">{num}</span>
          <h3 className="text-white text-xl font-semibold group-hover:text-emerald-400 transition-colors">
            {p.title}
          </h3>
        </div>
        <p className="text-zinc-500 text-sm leading-6 mt-2 max-w-lg">
          {p.description}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-5">
          {p.tech.map((t) => (
            <span key={t} className="text-xs text-zinc-600 font-mono">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-5 mt-6">
          {p.url && (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${p.title}`}
              className="flex items-center gap-1.5 text-zinc-400 text-sm hover:text-white transition-colors"
            >
              <ArrowUpRight size={14} />
              Live site
            </a>
          )}
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} source`}
              className="flex items-center gap-1.5 text-zinc-600 text-sm hover:text-white transition-colors"
            >
              <Github size={14} />
              Source
            </a>
          )}
        </div>
      </div>

      {/* Image */}
      <div className="rounded-xl border border-zinc-800/50 overflow-hidden bg-zinc-900/40 h-44 lg:h-36 flex-shrink-0">
        {p.image && !imgErr ? (
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            onError={() => setImgErr(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl font-bold text-zinc-800 select-none">
              {p.title[0]}
            </span>
          </div>
        )}
      </div>
    </motion.article>
  );
};

const Portfolio = () => (
  <>
    <Helmet>
      <title>Work — {personalInfo.name}</title>
      <meta name="description" content={`Projects by ${personalInfo.name}. ${seo.description}`} />
    </Helmet>

    <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-xs text-zinc-600 uppercase tracking-widest font-medium mb-5">
          Work
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Projects
        </h1>
        <p className="text-zinc-500 mt-4 text-sm leading-7 max-w-md">
          Production applications built end-to-end — from architecture to deployment.
        </p>
      </motion.div>

      {/* Project list */}
      <div className="mt-12">
        {projects.map((p, i) => (
          <ProjectRow key={p.id} p={p} i={i} />
        ))}
      </div>
    </div>
  </>
);

export default Portfolio;
