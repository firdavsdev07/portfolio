import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin, Send, User, MessageSquare, Github, Linkedin, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { personalInfo, socialLinks } from "../data/personalData";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const iconMap = { Github, Linkedin, Send, Mail };

  const sendToTelegram = async (data) => {
    const text = `New Message:\nName: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject || "None"}\nMessage: ${data.message}`;
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
    return res.ok;
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.length < 10) e.message = "Min 10 characters";
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
      const ok = await sendToTelegram(form);
      if (ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
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
        <title>Contact - {personalInfo.name}</title>
      </Helmet>

      {/* Hero */}
      <section className="pt-24 pb-16 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-emerald-500 font-medium mb-4">Contact</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-neutral-400 max-w-xl">
            Have a project in mind? Let's work together.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-6">Contact Info</h2>

              <div className="space-y-4 mb-10">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
                  <Mail size={20} className="text-emerald-500" />
                  <div>
                    <p className="text-sm text-neutral-500">Email</p>
                    <p className="text-white">{personalInfo.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-4 border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
                  <Phone size={20} className="text-emerald-500" />
                  <div>
                    <p className="text-sm text-neutral-500">Phone</p>
                    <p className="text-white">{personalInfo.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 border border-neutral-800">
                  <MapPin size={20} className="text-emerald-500" />
                  <div>
                    <p className="text-sm text-neutral-500">Location</p>
                    <p className="text-white">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-neutral-800">
                  <Clock size={20} className="text-emerald-500" />
                  <div>
                    <p className="text-sm text-neutral-500">Response Time</p>
                    <p className="text-white">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <h3 className="text-sm font-semibold text-white mb-4">Connect</h3>
              <div className="flex gap-3">
                {socialLinks.map((s) => {
                  const Icon = iconMap[s.icon];
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="p-3 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <div className="border border-neutral-800 p-6">
              <h2 className="text-xl font-semibold text-white mb-2">Send Message</h2>
              <p className="text-neutral-500 text-sm mb-6">Fill out the form below</p>

              {status === "success" && (
                <div className="flex items-center gap-2 p-3 mb-6 border border-emerald-500/30 text-emerald-500 text-sm">
                  <CheckCircle size={16} />
                  Message sent successfully!
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 p-3 mb-6 border border-red-500/30 text-red-500 text-sm">
                  <AlertCircle size={16} />
                  Failed to send. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-neutral-400 mb-2">Name *</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 bg-black border text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500 ${
                        errors.name ? "border-red-500" : "border-neutral-800"
                      }`}
                      placeholder="Your name"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm text-neutral-400 mb-2">Email *</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 bg-black border text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500 ${
                        errors.email ? "border-red-500" : "border-neutral-800"
                      }`}
                      placeholder="your@email.com"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm text-neutral-400 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500"
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <label className="block text-sm text-neutral-400 mb-2">Message *</label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-3 top-3 text-neutral-600" />
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 bg-black border text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500 resize-none ${
                        errors.message ? "border-red-500" : "border-neutral-800"
                      }`}
                      placeholder="Your message..."
                    />
                  </div>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  <p className="text-neutral-600 text-xs mt-1">{form.message.length}/500</p>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full py-3 font-medium flex items-center justify-center gap-2 transition-colors ${
                    submitting
                      ? "bg-neutral-800 text-neutral-500 cursor-not-allowed"
                      : "bg-emerald-500 text-black hover:bg-emerald-400"
                  }`}
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-neutral-500 border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
