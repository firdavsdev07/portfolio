import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ExternalLink, Github } from "lucide-react";
import { personalInfo } from "../data/personalData";
import { fetchHygraphPosts } from "../utils/fetchHygraphPosts";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    fetchHygraphPosts().then((posts) => {
      setProjects(
        posts.map((p) => ({
          id: p.id,
          title: p.title,
          content: p.content?.html,
          image: p.image?.url,
          technologies: p.technologies?.html
            ? p.technologies.html.replace(/<[^>]+>/g, "").split(/[ ,·•\n]+/).filter(Boolean)
            : [],
          url: p.demoLink,
          github: p.githubLink,
        }))
      );
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Portfolio - {personalInfo.name}</title>
      </Helmet>

      {/* Hero */}
      <section className="pt-24 pb-16 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-emerald-500 font-medium mb-4">Work</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Portfolio</h1>
          <p className="text-neutral-400 max-w-xl">
            A collection of projects showcasing my expertise in web development
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-neutral-500 mt-4">Loading projects...</p>
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-neutral-500">No projects found</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
                  <div className="h-52 bg-neutral-900 overflow-hidden">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-5xl font-bold text-neutral-800">{p.title[0]}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                    {p.content && (
                      <>
                        {(() => {
                          const cleanContent = p.content.replace(/<[^>]+>/g, "");
                          const contentLength = cleanContent.length;
                          return (
                            <>
                              <div className="overflow-hidden">
                                <p 
                                  className="text-neutral-400 text-sm mb-4"
                                >
                                  {expandedId === p.id ? cleanContent : cleanContent.substring(0, 130) + (cleanContent.length > 130 ? "..." : "")}
                                </p>
                              </div>
                              {contentLength > 100 && (
                                <button
                                  onClick={() => {
                                    const newId = expandedId === p.id ? null : p.id;
                                    setExpandedId(newId);
                                  }}
                                  className="text-emerald-500 text-xs hover:text-emerald-400 mb-4"
                                >
                                  {expandedId === p.id ? "Show less" : "Read more"}
                                </button>
                              )}
                            </>
                          );
                        })()}
                      </>
                    )}

                    {p.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {p.technologies.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs border border-neutral-800 text-neutral-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex gap-4 pt-4 border-t border-neutral-800">
                      {p.url && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${p.title} live`}
                          className="flex items-center gap-1 text-emerald-500 text-sm hover:text-emerald-400"
                        >
                          <ExternalLink size={14} />
                          Live
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${p.title} source code`}
                          className="flex items-center gap-1 text-neutral-400 text-sm hover:text-white"
                        >
                          <Github size={14} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
