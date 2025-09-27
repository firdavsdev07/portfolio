import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  MapPin,
  Phone,
  ExternalLink,
  Heart,
  ArrowUp,
} from "lucide-react";
import { personalInfo, socialLinks } from "../data/personalData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
  ];

  const iconMap = {
    Github,
    Linkedin,
    Send,
    Mail,
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                {personalInfo.bio}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin size={18} className="text-blue-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone size={18} className="text-blue-400" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail size={18} className="text-blue-400" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links & Newsletter */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">
                Connect With Me
              </h4>

              {/* Social Links */}
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 text-gray-300 hover:text-blue-400 group"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 sm:mb-0"
            >
              <p className="flex items-center">
                © {currentYear} {personalInfo.name}. Made with
                <Heart
                  size={16}
                  className="mx-1 text-red-500"
                  fill="currentColor"
                />
                in Tashkent
              </p>
            </motion.div>

            {/* Scroll to Top Button */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp
                size={16}
                className="group-hover:-translate-y-1 transition-transform duration-300"
              />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
