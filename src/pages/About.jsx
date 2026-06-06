import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { personalInfo, experience, education, skills, languages, seo } from "../data/personalData";

const cell = "rounded-2xl border border-zinc-800/50 bg-zinc-900/25";

const fade = (i = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay: i * 0.06 },
  viewport: { once: true },
});

const About = () => {
  const [photoErr, setPhotoErr] = useState(false);

  return (
    <>
      <Helmet>
        <title>About — {personalInfo.name}</title>
        <meta name="description" content={seo.description} />
      </Helmet>

      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 space-y-3">

        {/* ── Top bento: hero + photo ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">

          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${cell} p-8 lg:col-span-2`}
          >
            <p className="text-xs text-zinc-600 uppercase tracking-widest font-medium mb-6">
              About
            </p>
            <h1 className="text-4xl font-bold text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-zinc-400 mt-1">{personalInfo.role}</p>
            <p className="text-zinc-500 text-sm leading-7 mt-5 max-w-lg">
              {personalInfo.bio}
            </p>
            <div className="flex gap-2.5 mt-7">
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-xl hover:bg-zinc-100 transition-colors"
              >
                Get in Touch
              </Link>
              {personalInfo.resume && (
                <a
                  href={personalInfo.resume}
                  download
                  className="px-5 py-2.5 border border-zinc-700/60 text-zinc-400 text-sm rounded-xl hover:border-zinc-500 hover:text-white transition-colors"
                >
                  Resume ↓
                </a>
              )}
            </div>
          </motion.div>

          {/* Photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.08 }}
            className={`${cell} overflow-hidden min-h-[280px]`}
          >
            {!photoErr ? (
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                onError={() => setPhotoErr(true)}
                className="w-full h-full object-cover object-top"
                style={{ minHeight: 280 }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center min-h-[280px]">
                <span className="text-6xl font-bold text-zinc-800 select-none">FN</span>
              </div>
            )}
          </motion.div>
        </div>

        {/* ── Experience ── */}
        <motion.div {...fade(0)} className={`${cell} p-8`}>
          <p className="text-xs text-zinc-600 uppercase tracking-widest font-medium mb-8">
            Experience
          </p>
          <div className="space-y-8">
            {experience.map((e, i) => (
              <div key={i} className="grid md:grid-cols-[160px_1fr] gap-3 md:gap-8">
                <div className="flex-shrink-0">
                  <p className="text-zinc-500 text-sm">{e.period}</p>
                  <p className="text-zinc-600 text-xs mt-0.5">{e.company}</p>
                </div>
                <div>
                  <p className="text-white font-medium">{e.role}</p>
                  <ul className="mt-3 space-y-1.5">
                    {e.points.map((pt, j) => (
                      <li key={j} className="text-zinc-500 text-sm leading-6 flex gap-2">
                        <span className="text-zinc-700 flex-shrink-0 mt-0.5">—</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Education + Languages ── */}
        <div className="grid sm:grid-cols-2 gap-3">
          <motion.div {...fade(1)} className={`${cell} p-8`}>
            <p className="text-xs text-zinc-600 uppercase tracking-widest font-medium mb-8">
              Education
            </p>
            <div className="space-y-6">
              {education.map((e, i) => (
                <div key={i} className="grid grid-cols-[80px_1fr] gap-4">
                  <p className="text-zinc-600 text-xs pt-0.5">{e.period}</p>
                  <div>
                    <p className="text-white text-sm font-medium">{e.degree}</p>
                    <p className="text-zinc-500 text-xs mt-0.5">{e.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fade(2)} className={`${cell} p-8`}>
            <p className="text-xs text-zinc-600 uppercase tracking-widest font-medium mb-8">
              Languages
            </p>
            <div className="space-y-4">
              {languages.map((l) => (
                <div key={l.lang} className="flex items-center justify-between">
                  <p className="text-white text-sm">{l.lang}</p>
                  <span className="px-2.5 py-1 rounded-md text-xs border border-zinc-800 text-zinc-500">
                    {l.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Skills ── */}
        <motion.div {...fade(3)} className={`${cell} p-8`}>
          <p className="text-xs text-zinc-600 uppercase tracking-widest font-medium mb-8">
            Skills
          </p>
          <div className="space-y-5">
            {skills.map((group) => (
              <div key={group.category} className="grid md:grid-cols-[160px_1fr] gap-3 md:gap-8">
                <p className="text-zinc-600 text-sm flex-shrink-0">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-lg text-xs border border-zinc-800/70 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </>
  );
};

export default About;
