import { Github, Linkedin, Mail, Send } from "lucide-react";
import { personalInfo, socialLinks } from "../data/personalData";

const iconMap = { Github, Linkedin, Send, Mail };

const Footer = () => (
  <footer className="border-t border-zinc-800/40 mt-4">
    <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-zinc-700 text-sm">
        © {new Date().getFullYear()} {personalInfo.name}
      </p>
      <div className="flex gap-4">
        {socialLinks.map((s) => {
          const Icon = iconMap[s.icon];
          return (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="text-zinc-700 hover:text-zinc-400 transition-colors"
            >
              <Icon size={15} />
            </a>
          );
        })}
      </div>
    </div>
  </footer>
);

export default Footer;
