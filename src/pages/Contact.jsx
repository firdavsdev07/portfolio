import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
} from "lucide-react";
import { personalInfo, socialLinks, seoData } from "../data/personalData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  // Send message to Telegram
  const sendToTelegram = async (data) => {
    const text = `New Contact Message:\nName: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject || "None"}\nMessage: ${data.message}`;
    const url = `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
        text,
      }),
    });
    return res.ok;
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    } else if (formData.message.trim().length > 500) {
      newErrors.message = "Message cannot exceed 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const ok = await sendToTelegram(formData);
      if (ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const iconMap = {
    Github,
    Linkedin,
    Send,
    Mail,
  };

  return (
    <>
      <Helmet>
        <title>Contact - {personalInfo.name}</title>
        <meta
          name="description"
          content={`Get in touch with ${personalInfo.name}. Let's discuss your next project or collaboration opportunity.`}
        />
        <meta
          name="keywords"
          content={`${seoData.keywords}, contact, hire developer, collaboration, project inquiry`}
        />
        <link rel="canonical" href={`${seoData.url}/contact`} />
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
              Let's work together
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">Let's</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Connect
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Have a project in mind or want to collaborate? I'd love to hear
              from you. Let's create something amazing together!
            </motion.p>

            {/* Quick Contact Options */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-2xl shadow-blue-500/25 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me Directly
              </motion.a>

              <motion.a
                href={`tel:${personalInfo.phone}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Me
              </motion.a>

              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Send Message
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Updated to match Home.jsx */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology. Feel free to
                reach out!
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-6 bg-black border border-gray-800 rounded-xl hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-6 bg-black border border-gray-800 rounded-xl hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <Phone className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-6 bg-black border border-gray-800 rounded-xl hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Location
                    </h3>
                    <span className="text-gray-400">
                      {personalInfo.location}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-6 bg-black border border-gray-800 rounded-xl hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Response Time
                    </h3>
                    <span className="text-gray-400">
                      Usually within 24 hours
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = iconMap[social.icon];
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-4 bg-black border border-gray-800 rounded-xl hover:border-blue-500/50 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 group"
                      >
                        <Icon size={24} />
                        <span className="sr-only">{social.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form - Updated to match theme */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              id="contact-form"
            >
              <div className="bg-black border border-gray-800 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Send Message
                </h2>
                <p className="text-gray-400 mb-8">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </p>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-green-300 font-medium">
                        Message sent successfully! I'll get back to you soon.
                      </span>
                    </div>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-400" />
                      <span className="text-red-300 font-medium">
                        Failed to send message. Please try again or email me
                        directly.
                      </span>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Your Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`block w-full pl-10 pr-3 py-3 border rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                          errors.name
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-700 focus:border-transparent"
                        }`}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-400 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`block w-full pl-10 pr-3 py-3 border rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                          errors.email
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-700 focus:border-transparent"
                        }`}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-400 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="block w-full px-3 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="What's this about? (optional)"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message *
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-gray-500" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`block w-full pl-10 pr-3 py-3 border rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all duration-300 ${
                          errors.message
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-700 focus:border-transparent"
                        }`}
                        placeholder="Tell me about your project, ideas, or just say hello..."
                        required
                      />
                    </div>
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-400 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.message}
                      </p>
                    )}
                    <p className="mt-2 text-sm text-gray-500">
                      {formData.message.length}/500 characters
                    </p>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white transition-all duration-300 ${
                      isSubmitting
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl shadow-blue-500/25"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-400">
                    Or email me directly at{" "}
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-blue-400 hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
