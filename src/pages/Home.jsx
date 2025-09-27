import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Send,
  Code,
  Briefcase,
  ArrowRight,
  Play,
  Star,
} from "lucide-react";
import {
  personalInfo,
  socialLinks,
  seoData,
  skills,
} from "../data/personalData";
import { useEffect, useState } from "react";
import { fetchHygraphPosts } from "../utils/fetchHygraphPosts";

const Home = () => {
  const [hygraphProjects, setHygraphProjects] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const posts = await fetchHygraphPosts();
      setHygraphProjects(
        posts.map((post) => ({
          id: post.id,
          title: post.title,
          description: post.description,
          image: post.image?.url,
          technologies: post.technologies?.html
            ? post.technologies.html
                .replace(/<[^>]+>/g, "")
                .split(/[ ,\u00b7\u2022\n]+/)
                .filter(Boolean)
            : [],
          url: post.demoLink,
          github: post.githubLink,
          slug: post.slug,
          content: post.content?.html,
        })),
      );
    }
    getPosts();
  }, []);

  const iconMap = {
    Github,
    Linkedin,
    Send,
    Mail,
  };

  // --- UI Uyg'unligi uchun asosiy wrapper class qo'shildi ---
  // Barcha sahifada bir xil background va text color
  // bg-gray-50 dark:bg-gray-900, text-gray-900 dark:text-white

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="author" content={seoData.author} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.url} />
        <link rel="canonical" href={seoData.url} />
      </Helmet>

      {/* Hero Section */}
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-8 text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Available for work
              </motion.div>

              {/* Name & Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                  <span className="text-white">
                    {personalInfo.name.split(" ")[0]}
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    {personalInfo.name.split(" ")[1]}
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-400 mb-8 font-light">
                  {personalInfo.title}
                </p>
              </motion.div>

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-gray-300 mb-12 leading-relaxed max-w-2xl"
              >
                {personalInfo.bio}
              </motion.p>

              {/* Action Buttons - Modern Layout */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-16"
              >
                {/* Primary CTA */}
                <Link
                  to="/portfolio"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl shadow-blue-500/25"
                >
                  <span className="flex items-center">
                    <Briefcase className="mr-2 h-5 w-5" />
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                {/* Secondary CTA */}
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  <span className="flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    Let's Talk
                  </span>
                </Link>

                {/* Resume Download */}
                {personalInfo.resume && (
                  <a
                    href={personalInfo.resume}
                    download
                    className="group px-6 py-4 border-2 border-green-500/50 text-green-400 rounded-xl font-semibold hover:bg-green-500/10 transition-all duration-300"
                  >
                    <span className="flex items-center">
                      <Download className="mr-2 h-4 w-4" />
                      Resume
                    </span>
                  </a>
                )}
              </motion.div>
            </div>

            {/* Right Column - Profile & Social */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end space-y-8">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="relative"
              >
                <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-1">
                  <div className="w-full h-full rounded-3xl bg-gray-900 flex items-center justify-center text-6xl font-bold text-gray-200">
                    {personalInfo.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-4 border border-blue-500/20 rounded-3xl"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-8 border border-purple-500/10 rounded-3xl"
                />
              </motion.div>

              {/* Social Links - Creative Layout */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col space-y-4"
              >
                {socialLinks.map((social, index) => {
                  const Icon = iconMap[social.icon];
                  const positions = [
                    "translate-x-0",
                    "translate-x-8",
                    "translate-x-4",
                    "translate-x-12",
                  ];

                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                      whileHover={{
                        scale: 1.1,
                        x: -10,
                        transition: { duration: 0.2 },
                      }}
                      className={`flex items-center space-x-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 ${positions[index]}`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{social.name}</span>
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-black border border-gray-800 rounded-xl"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">
                {hygraphProjects.length}+
              </div>
              <div className="text-gray-300 font-medium">
                Projects Completed
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-black border border-gray-800 rounded-xl"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">
                {skills.technicalSkills.reduce(
                  (acc, category) => acc + category.skills.length,
                  0,
                )}
                +
              </div>
              <div className="text-gray-300 font-medium">Technologies</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-black border border-gray-800 rounded-xl"
            >
              <div className="text-4xl font-bold text-green-400 mb-2">1+</div>
              <div className="text-gray-300 font-medium">Years Experience</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-gray-400">
              Recent projects I'm proud of
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hygraphProjects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                      <Code size={48} className="text-white opacity-50" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex space-x-4">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
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
                        className="text-gray-400 hover:text-gray-300 font-medium flex items-center"
                      >
                        <Github size={16} className="mr-1" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
