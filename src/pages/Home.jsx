import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  ArrowUpRight,
  Download,
} from "lucide-react";
import { personalInfo, socialLinks, projects, seo } from "../data/personalData";

const iconMap = { Github, Linkedin, Send, Mail };
const featured = projects.filter((p) => p.featured);

export default function Home() {
  const [photoErr, setPhotoErr] = useState(false);

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.url} />
        <link rel="canonical" href={seo.url} />
      </Helmet>

      {/* ─── Hero ─── */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="max-w-5xl mx-auto px-6 w-full py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 xl:gap-20 items-center">
            {/* Left */}
            <div>
              {/* Status */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2.5 mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-zinc-500 text-sm">
                  Available for work
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-[1.02]"
              >
                Firdavs
                <br />
                <span className="text-zinc-400">Normurodov</span>
              </motion.h1>

              {/* Role */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-zinc-500 text-lg mt-5"
              >
                Fullstack Developer · {personalInfo.location}
              </motion.p>

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-zinc-400 mt-5 leading-7 max-w-md"
              >
                {personalInfo.bio}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-3 mt-9"
              >
                <Link
                  to="/work"
                  className="px-6 py-3 bg-white text-black text-sm font-semibold rounded-xl hover:bg-zinc-100 transition-colors"
                >
                  View Work
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 border border-zinc-700 text-zinc-300 text-sm rounded-xl hover:border-zinc-500 hover:text-white transition-colors"
                >
                  Get in Touch
                </Link>
                <a
                  href={personalInfo.resume}
                  download
                  className="px-6 py-3 border border-zinc-800 text-zinc-500 text-sm rounded-xl hover:border-zinc-700 hover:text-zinc-300 transition-colors flex items-center gap-2"
                >
                  <Download size={13} />
                  Resume
                </a>
              </motion.div>

              {/* Socials */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex gap-5 mt-10 pt-8 border-t border-zinc-800/50"
              >
                {socialLinks.map((s) => {
                  const Icon = iconMap[s.icon];
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="text-zinc-600 hover:text-zinc-300 transition-colors"
                    >
                      <Icon size={19} />
                    </a>
                  );
                })}
              </motion.div>
            </div>

            {/* Right — Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="hidden lg:block"
            >
              {!photoErr ? (
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  onError={() => setPhotoErr(true)}
                  className="w-full aspect-[3/4] object-cover object-top rounded-2xl "
                />
              ) : (
                <div className="w-full aspect-[4/5] rounded-2xl border border-zinc-800/60 bg-zinc-900 flex items-center justify-center">
                  <span className="text-7xl font-bold text-zinc-800 select-none">
                    FN
                  </span>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Selected Work ─── */}
      <section className="border-t border-zinc-800/40">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between mb-12">
            <p className="text-xs text-zinc-600 uppercase tracking-widest font-medium">
              Selected Work
            </p>
            <Link
              to="/work"
              className="text-zinc-500 text-sm hover:text-white transition-colors"
            >
              All projects →
            </Link>
          </div>

          <div>
            {featured.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.08 }}
                className="group flex items-start justify-between gap-8 py-8 border-b border-zinc-800/40 hover:bg-zinc-900/20 -mx-6 px-6 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-zinc-700 font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-zinc-500 text-sm leading-6 max-w-xl">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4">
                    {p.tech.slice(0, 5).map((t) => (
                      <span key={t} className="text-xs text-zinc-700 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${p.title}`}
                    className="flex-shrink-0 mt-1 text-zinc-700 group-hover:text-white transition-colors"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
