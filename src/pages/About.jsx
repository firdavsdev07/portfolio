import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Download, MapPin, Phone, Mail, Globe, Briefcase, GraduationCap, Award } from "lucide-react";
import {
  personalInfo,
  workExperience,
  education,
  certificates,
  awards,
} from "../data/personalData";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - {personalInfo.name}</title>
      </Helmet>

      {/* Hero */}
      <section className="pt-24 pb-16 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-emerald-500 font-medium mb-4">About</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {personalInfo.name}
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-2xl">
              {personalInfo.bio}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10 text-sm">
              <div className="flex items-center gap-3 text-neutral-400">
                <MapPin size={18} className="text-emerald-500" />
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-3 text-neutral-400">
                <Phone size={18} className="text-emerald-500" />
                {personalInfo.phone}
              </div>
              <div className="flex items-center gap-3 text-neutral-400">
                <Mail size={18} className="text-emerald-500" />
                {personalInfo.email}
              </div>
              <div className="flex items-center gap-3 text-neutral-400">
                <Globe size={18} className="text-emerald-500" />
                {personalInfo.website}
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition-colors"
              >
                Get In Touch
              </Link>
              {personalInfo.resume && (
                <a
                  href={personalInfo.resume}
                  download
                  className="px-6 py-3 border border-neutral-700 text-white hover:border-neutral-500 transition-colors flex items-center gap-2"
                >
                  <Download size={18} />
                  Download CV
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-6 text-center">
            {[
              { label: "Years", value: "1+" },
              { label: "Projects", value: "7+" },
              { label: "Clients", value: "10+" },
              { label: "Awards", value: "2" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-neutral-500 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-emerald-500 font-medium mb-2">Experience</p>
          <h2 className="text-2xl font-bold text-white mb-10">Work History</h2>

          <div className="space-y-8">
            {workExperience.map((w) => (
              <motion.div
                key={w.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-l-2 border-neutral-800 pl-6"
              >
                <div className="flex items-center gap-2 text-emerald-500 mb-2">
                  <Briefcase size={16} />
                  <span className="text-sm">{w.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{w.position}</h3>
                <p className="text-neutral-400 text-sm mb-3">{w.company}</p>
                <p className="text-neutral-500 text-sm mb-4">{w.description}</p>
                <div className="flex flex-wrap gap-2">
                  {w.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs border border-neutral-800 text-neutral-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-emerald-500 font-medium mb-2">Education</p>
          <h2 className="text-2xl font-bold text-white mb-10">Learning Path</h2>

          <div className="space-y-8">
            {education.map((e) => (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-l-2 border-neutral-800 pl-6"
              >
                <div className="flex items-center gap-2 text-emerald-500 mb-2">
                  <GraduationCap size={16} />
                  <span className="text-sm">{e.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{e.program}</h3>
                <p className="text-neutral-400 text-sm mb-3">{e.institution}</p>
                <p className="text-neutral-500 text-sm">{e.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates & Awards */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Certificates */}
            <div>
              <p className="text-emerald-500 font-medium mb-2">Certificates</p>
              <h2 className="text-2xl font-bold text-white mb-8">Certifications</h2>
              <div className="space-y-4">
                {certificates.map((c) => (
                  <div key={c.id} className="border border-neutral-800 p-4">
                    <div className="flex items-center gap-2 text-emerald-500 mb-2">
                      <Award size={16} />
                      <span className="text-xs">{c.date}</span>
                    </div>
                    <h3 className="text-white font-medium mb-1">{c.name}</h3>
                    <p className="text-neutral-500 text-sm">{c.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <p className="text-emerald-500 font-medium mb-2">Recognition</p>
              <h2 className="text-2xl font-bold text-white mb-8">Awards</h2>
              <div className="space-y-4">
                {awards.map((a) => (
                  <div key={a.id} className="border border-neutral-800 p-4">
                    <div className="flex items-center gap-2 text-emerald-500 mb-2">
                      <Award size={16} />
                      <span className="text-xs">{a.date}</span>
                    </div>
                    <h3 className="text-white font-medium mb-1">{a.title}</h3>
                    <p className="text-neutral-500 text-sm">{a.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
