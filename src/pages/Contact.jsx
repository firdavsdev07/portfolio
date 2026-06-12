import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react";
import { personalInfo, socialLinks } from "../data/personalData";

const iconMap = { Github, Linkedin, Send, Mail };
const cell = "rounded-2xl border border-zinc-800/50 bg-zinc-900/25";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Required";
    else if (form.message.length < 10) e.message = "At least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setStatus(null);
    try {
      const text = `New contact:\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;
      const res = await fetch(
        `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
            text,
          }),
        }
      );
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact — {personalInfo.name}</title>
        <meta name="description" content={`Get in touch with ${personalInfo.name}`} />
      </Helmet>

      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 space-y-3">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${cell} p-8 md:p-10`}
        >
          <p className="text-xs text-zinc-600 uppercase tracking-widest font-medium mb-5">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Get in Touch
          </h1>
          <p className="text-zinc-500 text-sm leading-7 mt-4 max-w-md">
            Have a project in mind or want to work together? I typically respond within 24 hours.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-3">

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className={`${cell} p-8 flex flex-col justify-between`}
          >
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 transition-colors flex-shrink-0">
                  <Mail size={15} className="text-zinc-500" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-zinc-600 mb-0.5">Email</p>
                  <p className="text-zinc-300 text-sm group-hover:text-white transition-colors break-all">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 transition-colors flex-shrink-0">
                  <Phone size={15} className="text-zinc-500" />
                </div>
                <div>
                  <p className="text-xs text-zinc-600 mb-0.5">Phone</p>
                  <p className="text-zinc-300 text-sm group-hover:text-white transition-colors">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl border border-zinc-800 flex items-center justify-center flex-shrink-0">
                  <MapPin size={15} className="text-zinc-500" />
                </div>
                <div>
                  <p className="text-xs text-zinc-600 mb-0.5">Location</p>
                  <p className="text-zinc-300 text-sm">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/60">
              <p className="text-xs text-zinc-600 uppercase tracking-widest font-medium mb-4">
                Socials
              </p>
              <div className="flex gap-2.5">
                {socialLinks.map((s) => {
                  const Icon = iconMap[s.icon];
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="w-9 h-9 rounded-xl border border-zinc-800 flex items-center justify-center text-zinc-600 hover:text-white hover:border-zinc-600 transition-colors"
                    >
                      <Icon size={15} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className={`${cell} p-8`}
          >
            {status === "success" && (
              <div className="flex items-center gap-2 p-3 mb-5 rounded-xl border border-emerald-800/50 text-emerald-400 text-sm bg-emerald-950/20">
                <CheckCircle size={14} />
                Message sent successfully!
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 p-3 mb-5 rounded-xl border border-red-900/50 text-red-400 text-sm">
                <AlertCircle size={14} />
                Failed to send. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-zinc-600 uppercase tracking-widest mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-900/50 border text-white text-sm placeholder-zinc-700 focus:outline-none focus:border-zinc-600 transition-colors ${
                    errors.name ? "border-red-800" : "border-zinc-800"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-xs text-zinc-600 uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-900/50 border text-white text-sm placeholder-zinc-700 focus:outline-none focus:border-zinc-600 transition-colors ${
                    errors.email ? "border-red-800" : "border-zinc-800"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-xs text-zinc-600 uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  maxLength={500}
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-900/50 border text-white text-sm placeholder-zinc-700 focus:outline-none focus:border-zinc-600 transition-colors resize-none ${
                    errors.message ? "border-red-800" : "border-zinc-800"
                  }`}
                />
                <div className="flex justify-between mt-1">
                  <span>
                    {errors.message && (
                      <p className="text-red-500 text-xs">{errors.message}</p>
                    )}
                  </span>
                  <p className="text-zinc-700 text-xs">{form.message.length}/500</p>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${
                  submitting
                    ? "bg-zinc-800 text-zinc-600 cursor-not-allowed"
                    : "bg-white text-black hover:bg-zinc-100"
                }`}
              >
                {submitting ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-zinc-600 border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
