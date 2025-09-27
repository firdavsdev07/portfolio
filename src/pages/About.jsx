import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Download,
  MapPin,
  Calendar,
  Award,
  GraduationCap,
  Briefcase,
  Languages,
  ExternalLink,
  Mail,
  Phone,
  Globe,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Clock,
  Target,
} from "lucide-react";
import {
  personalInfo,
  workExperience,
  education,
  certificates,
  awards,
  skills,
  seoData,
} from "../data/personalData";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>About - {personalInfo.name}</title>
        <meta
          name="description"
          content={`Learn more about ${personalInfo.name}, a ${personalInfo.title} with expertise in modern web technologies.`}
        />
        <meta
          name="keywords"
          content={`${seoData.keywords}, about, biography, experience, education`}
        />
        <link rel="canonical" href={`${seoData.url}/about`} />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <div>
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  About{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Me
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {personalInfo.bio}
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <MapPin
                    size={20}
                    className="text-blue-600 dark:text-blue-400"
                  />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <Phone
                    size={20}
                    className="text-blue-600 dark:text-blue-400"
                  />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <Mail
                    size={20}
                    className="text-blue-600 dark:text-blue-400"
                  />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <Globe
                    size={20}
                    className="text-blue-600 dark:text-blue-400"
                  />
                  <span>{personalInfo.website}</span>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Link>
                {personalInfo.resume && (
                  <a
                    href={personalInfo.resume}
                    download
                    className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                )}
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-1 shadow-2xl"
                >
                  <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center text-8xl font-bold text-gray-700 dark:text-gray-200">
                    {personalInfo.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </motion.div>
                {/* Floating elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full opacity-20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500 rounded-full opacity-20"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                label: "Years Experience",
                value: "1+",
                color: "text-blue-600",
              },
              {
                icon: Briefcase,
                label: "Projects Done",
                value: "7+",
                color: "text-green-600",
              },
              {
                icon: Users,
                label: "Happy Clients",
                value: "10+",
                color: "text-purple-600",
              },
              {
                icon: Award,
                label: "Awards Won",
                value: "2",
                color: "text-orange-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 border border-gray-700 mb-4 ${stat.color}`}
                >
                  <stat.icon size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Timeline */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Professional Journey
            </h2>
            <p className="text-xl text-gray-400">
              My experience and education timeline
            </p>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transform -translate-x-px hidden md:block"></div>

            {/* Mobile Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 md:hidden"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                ...education.map((edu) => ({
                  ...edu,
                  type: "education",
                  year: parseInt(edu.duration.match(/\d{4}/)?.[0] || "2020"),
                  icon: GraduationCap,
                  color: "purple",
                  title: edu.program,
                  subtitle: edu.institution,
                  tags: edu.skills?.slice(0, 4),
                })),
                ...workExperience.map((work) => ({
                  ...work,
                  type: "work",
                  year: parseInt(work.duration.match(/\d{4}/)?.[0] || "2020"),
                  icon: Briefcase,
                  color: "blue",
                  title: work.position,
                  subtitle: `${work.company}`,
                  tags: work.technologies?.slice(0, 4),
                })),
              ]
                .sort((a, b) => a.year - b.year)
                .map((item, index) => {
                  const isLeft = index % 2 === 0;
                  const colorClasses = {
                    blue: {
                      dot: "bg-blue-500",
                      tags: "bg-blue-600/20 text-blue-400 border-blue-600/30",
                      border: "border-blue-500/30",
                    },
                    purple: {
                      dot: "bg-purple-500",
                      tags: "bg-purple-600/20 text-purple-400 border-purple-600/30",
                      border: "border-purple-500/30",
                    },
                  };

                  return (
                    <motion.div
                      key={`${item.type}-${item.id || index}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative flex items-center ${
                        isLeft
                          ? "md:flex-row-reverse md:text-right"
                          : "md:flex-row md:text-left"
                      } flex-row text-left`}
                    >
                      {/* Timeline dot */}
                      <div
                        className={`
                        absolute w-3 h-3 rounded-full border-2 border-black z-10
                        ${colorClasses[item.color].dot}
                        ${isLeft ? "md:right-1/2 md:mr-1.5" : "md:left-1/2 md:ml-1.5"}
                        left-6 md:transform md:-translate-x-1/2
                      `}
                      ></div>

                      {/* Content Card */}
                      <div
                        className={`
                        w-full md:w-[calc(50%-3rem)]
                        ${isLeft ? "md:pr-12 pl-16 md:pl-0" : "md:pl-12 pl-16"}
                      `}
                      >
                        <div
                          className={`
                          bg-gray-900 border ${colorClasses[item.color].border}
                          rounded-lg p-4 hover:border-opacity-60 transition-all duration-200
                        `}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <item.icon
                              size={16}
                              className={`${item.type === "education" ? "text-purple-400" : "text-blue-400"}`}
                            />
                            <span className="text-xs text-gray-500 font-medium">
                              {item.year}
                            </span>
                          </div>

                          <h3 className="text-lg font-semibold text-white mb-1 leading-tight">
                            {item.title}
                          </h3>
                          <p
                            className={`text-sm mb-3 ${
                              item.type === "education"
                                ? "text-purple-400"
                                : "text-blue-400"
                            }`}
                          >
                            {item.subtitle}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5">
                            {item.tags?.map((tag, tagIndex) => (
                              <span
                                key={tag}
                                className={`
                                  px-2 py-1 rounded text-xs font-medium border
                                  ${colorClasses[item.color].tags}
                                `}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Spacer */}
                      <div className="hidden md:block w-[calc(50%-3rem)]"></div>
                    </motion.div>
                  );
                })}
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 left-10 w-6 h-6 border-2 border-blue-500/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-10 right-10 w-8 h-8 border-2 border-purple-500/30 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Certificates and Awards */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Certificates */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Certificates
              </h2>
              <div className="space-y-6">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-blue-600/20 rounded-lg">
                        <Award
                          size={20}
                          className="text-blue-600 dark:text-blue-400"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {cert.name}
                        </h3>
                        <p className="text-gray-400 mb-2">
                          {cert.issuer} • {cert.date}
                        </p>
                        <p className="text-gray-300 text-sm">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Awards
              </h2>
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <motion.div
                    key={award.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-gray-900 to-black border border-yellow-800/30 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-yellow-600/20 rounded-lg">
                        <Award
                          size={20}
                          className="text-yellow-600 dark:text-yellow-400"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {award.title}
                        </h3>
                        <p className="text-gray-400 mb-2">
                          {award.issuer} • {award.date}
                        </p>
                        <p className="text-gray-300 text-sm">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
