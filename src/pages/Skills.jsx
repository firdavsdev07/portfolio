import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Code,
  Database,
  Globe,
  Settings,
  Users,
  BookOpen,
  Lightbulb,
  Clock,
  ChevronRight,
} from "lucide-react";
import { skills, personalInfo, seoData } from "../data/personalData";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter skills based on active category
  const filteredSkills =
    activeCategory === "all"
      ? skills.technicalSkills
      : skills.technicalSkills.filter((category) =>
          category.category
            .toLowerCase()
            .includes(activeCategory.toLowerCase()),
        );

  const categoryIcons = {
    "Programming Languages": Code,
    "Frontend Frameworks": Globe,
    "Backend & Databases": Database,
    "Tools & Others": Settings,
  };

  const softSkillIcons = {
    "Teamwork & Friendly Communication": Users,
    "Fast & Independent Learning": BookOpen,
    "Creative Thinking": Lightbulb,
    Patience: Clock,
  };

  return (
    <>
      <Helmet>
        <title>Skills - {personalInfo.name}</title>
        <meta
          name="description"
          content={`Technical and soft skills of ${personalInfo.name} - React.js, Next.js, Node.js developer.`}
        />
        <meta
          name="keywords"
          content={`${seoData.keywords}, skills, programming, web development`}
        />
        <link rel="canonical" href={`${seoData.url}/skills`} />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Skills & Expertise
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              Technical skills and personal qualities that drive results
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-16">
              {["all", "programming", "frontend", "backend", "tools"].map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">
            Technical Skills
          </h2>

          <div className="space-y-6">
            {filteredSkills.map((category, index) => {
              const CategoryIcon = categoryIcons[category.category] || Code;

              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-6"
                >
                  <div className="flex items-center mb-6">
                    <CategoryIcon size={20} className="text-blue-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">
                      {category.category}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between p-3 bg-gray-900 rounded border border-gray-600 hover:border-blue-500/50 transition-colors"
                      >
                        <span className="text-gray-200 font-medium">
                          {skill.name}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded ${
                            skill.experience === "Advanced"
                              ? "bg-green-900/30 text-green-400 border border-green-700/50"
                              : "bg-blue-900/30 text-blue-400 border border-blue-700/50"
                          }`}
                        >
                          {skill.experience}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Soft Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.softSkills.map((skill, index) => {
              const SkillIcon = softSkillIcons[skill.name] || Users;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500/50 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <SkillIcon size={20} className="text-purple-400 mt-1" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {skill.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: Code,
                title: "Languages",
                count:
                  skills.technicalSkills.find(
                    (cat) => cat.category === "Programming Languages",
                  )?.skills.length || 0,
              },
              {
                icon: Globe,
                title: "Frontend",
                count:
                  skills.technicalSkills.find(
                    (cat) => cat.category === "Frontend Frameworks",
                  )?.skills.length || 0,
              },
              {
                icon: Database,
                title: "Backend",
                count:
                  skills.technicalSkills.find(
                    (cat) => cat.category === "Backend & Databases",
                  )?.skills.length || 0,
              },
              {
                icon: Settings,
                title: "Tools",
                count:
                  skills.technicalSkills.find(
                    (cat) => cat.category === "Tools & Others",
                  )?.skills.length || 0,
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg mb-3">
                  <stat.icon size={20} className="text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.count}
                </div>
                <div className="text-sm text-gray-400">{stat.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
