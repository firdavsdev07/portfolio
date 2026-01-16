import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Github, Linkedin, Mail, Send } from "lucide-react";
import { personalInfo, socialLinks, seoData, skills } from "../data/personalData";
import { useEffect, useState } from "react";
import { fetchHygraphPosts } from "../utils/fetchHygraphPosts";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchHygraphPosts().then((posts) => {
      setProjects(
        posts.map((p) => ({
          id: p.id,
          title: p.title,
          description: p.description,
          image: p.image?.url,
          url: p.demoLink,
          github: p.githubLink,
        }))
      );
    });
  }, []);

  const iconMap = { Github, Linkedin, Send, Mail };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
      </Helmet>

      {/* Hero */}
      <section className="min-h-screen flex items-center bg-black">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-emerald-500 font-medium mb-4"
              >
                Hello, I'm
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-7xl font-bold text-white mb-6"
              >
                {personalInfo.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-neutral-400 mb-4"
              >
                {personalInfo.title}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-neutral-400 mb-10 max-w-lg leading-relaxed"
              >
                {personalInfo.bio}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <Link
                  to="/portfolio"
                  className="px-6 py-3 bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition-colors"
                >
                  View Work
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 border border-neutral-700 text-white hover:border-neutral-500 transition-colors"
                >
                  Contact Me
                </Link>
                {personalInfo.resume && (
                  <a
                    href={personalInfo.resume}
                    download
                    className="px-6 py-3 border border-neutral-700 text-white hover:border-neutral-500 transition-colors flex items-center gap-2"
                  >
                    <Download size={18} />
                    Resume
                  </a>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4"
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
                      className="p-3 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:flex justify-center"
            >
              <div className="w-96 border border-neutral-800">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-neutral-600">developer.js</span>
                </div>
                {/* Code content */}
                <div className="p-5 font-mono text-base">
                  <p className="text-neutral-500">{"// Welcome"}</p>
                  <p className="mt-2">
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-white">developer</span>{" "}
                    <span className="text-neutral-500">=</span>{" "}
                    <span className="text-neutral-500">{"{"}</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-neutral-400">name:</span>{" "}
                    <span className="text-emerald-400">'Firdavs'</span>
                    <span className="text-neutral-500">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-neutral-400">role:</span>{" "}
                    <span className="text-emerald-400">'Fullstack'</span>
                    <span className="text-neutral-500">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-neutral-400">available:</span>{" "}
                    <span className="text-orange-400">true</span>
                    <span className="text-neutral-500">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-neutral-400">skills:</span>{" "}
                    <span className="text-neutral-500">[</span>
                    <span className="text-emerald-400">'React'</span>
                    <span className="text-neutral-500">,</span>{" "}
                    <span className="text-emerald-400">'Node'</span>
                    <span className="text-neutral-500">]</span>
                  </p>
                  <p>
                    <span className="text-neutral-500">{"}"}</span>
                    <span className="text-neutral-500">;</span>
                  </p>
                  <p className="mt-3 flex items-center">
                    <span className="text-emerald-500">▸</span>
                    <span className="ml-2 w-2 h-4 bg-emerald-500 animate-pulse" />
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-white mb-2">{projects.length}+</p>
              <p className="text-neutral-400">Projects</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">
                {skills.technicalSkills.reduce((a, c) => a + c.skills.length, 0)}+
              </p>
              <p className="text-neutral-400">Technologies</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">1+</p>
              <p className="text-neutral-400">Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-emerald-500 font-medium mb-2">Portfolio</p>
              <h2 className="text-3xl font-bold text-white">Featured Work</h2>
            </div>
            <Link
              to="/portfolio"
              aria-label="View all projects"
              className="text-neutral-400 hover:text-white flex items-center gap-2 transition-colors"
            >
              View All <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
                <div className="h-48 bg-neutral-900 overflow-hidden">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-neutral-700">
                      <span className="text-4xl font-bold">{p.title[0]}</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-neutral-400 text-sm line-clamp-2 mb-4">{p.description}</p>
                  <div className="flex gap-4">
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${p.title} live`}
                        className="text-emerald-500 text-sm hover:text-emerald-400"
                      >
                        Live →
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${p.title} code`}
                        className="text-neutral-400 text-sm hover:text-white"
                      >
                        Code →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
