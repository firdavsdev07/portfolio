import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ExternalLink,
  Github,
  Search,
  Calendar,
  Code,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { personalInfo, seoData } from "../data/personalData";
import { fetchHygraphPosts } from "../utils/fetchHygraphPosts";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // HYGRAPH'dan postlarni olish
  useEffect(() => {
    async function getPosts() {
      setLoading(true);
      const posts = await fetchHygraphPosts();
      setProjects(
        posts.map((post) => ({
          id: post.id,
          title: post.title,
          description: post.description,
          image: post.image?.url,
          technologies: post.technologies?.html
            ? post.technologies.html
                .replace(/<[^>]+>/g, "")
                .split(/[ ,·•\n]+/)
                .filter(Boolean)
            : [],
          category: post.category || "Web Development",
          url: post.demoLink,
          github: post.githubLink,
          features: [],
          status: "",
          year: "",
          slug: post.slug,
          content: post.content?.html,
        })),
      );
      setLoading(false);
    }
    getPosts();
  }, []);

  // Kategoriyalar - removed

  // Filter projects - removed, showing all projects
  const filteredProjects = projects;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Portfolio - {personalInfo.name}</title>
        <meta
          name="description"
          content={`Explore the portfolio of ${personalInfo.name}, featuring ${projects.length}+ projects in web development including React.js, Next.js, and full-stack applications.`}
        />
        <meta
          name="keywords"
          content={`${seoData.keywords}, portfolio, projects, web development projects, react projects`}
        />
        <link rel="canonical" href={`${seoData.url}/portfolio`} />
      </Helmet>

      {/* Hero Section - Matching Home.jsx style */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full opacity-60"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
            className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-500 rounded-full opacity-40"
          />
          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, -80, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              delay: 4,
            }}
            className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-green-500 rounded-full opacity-50"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              {projects.length}+ Projects Completed
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">My </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              A collection of projects that showcase my expertise in modern web
              development, from interactive web applications to full-stack
              solutions
            </motion.p>

            {/* Search Bar - removed */}

            {/* Category Filter - removed */}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid - Updated to match dark theme */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center space-x-2">
                <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-400 border-t-transparent"></div>
                <span className="text-gray-300 text-lg">
                  Loading projects...
                </span>
              </div>
            </div>
          ) : filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <Code size={64} className="mx-auto text-gray-600 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-400">No projects in this category</p>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="bg-black border border-gray-800 rounded-xl shadow-md hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 overflow-hidden group"
                  >
                    {/* Project Image */}
                    <div className="h-48 relative overflow-hidden">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                          <Code size={48} className="text-white opacity-60" />
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies &&
                          project.technologies.slice(0, 5).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-800 border border-gray-700 text-xs rounded-full text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex space-x-4 pt-4 border-t border-gray-800">
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                          >
                            <ExternalLink size={16} className="mr-1" />
                            Live
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-400 hover:text-gray-300 font-medium transition-colors duration-300"
                          >
                            <Github size={16} className="mr-1" />
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
