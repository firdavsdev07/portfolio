import React from "react";
import { Helmet } from "react-helmet-async";
import { personalInfo, skills } from "../data/personalData";

const Skills = () => {
  return (
    <>
      <Helmet>
        <title>Skills - {personalInfo.name}</title>
      </Helmet>

      <section className="pt-24 pb-20 bg-black min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-emerald-500 font-medium mb-4">Expertise</p>
          <h1 className="text-4xl font-bold text-white mb-12">Skills</h1>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 mb-20">
            {skills.technicalSkills.map((cat) => (
              <div key={cat.category}>
                <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-neutral-800">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s.name}
                      className="px-3 py-1.5 text-sm border border-neutral-800 text-neutral-300 hover:border-emerald-500/50 hover:text-white transition-colors"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-neutral-800">
              Soft Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.softSkills.map((s) => (
                <span
                  key={s.name}
                  className="px-3 py-1.5 text-sm border border-neutral-800 text-neutral-300 hover:border-emerald-500/50 hover:text-white transition-colors"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
