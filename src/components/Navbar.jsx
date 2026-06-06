import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/work", label: "Work" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-800/60 bg-[#09090b]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-white font-semibold tracking-tight">
            Firdavs
          </NavLink>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                end={l.path === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "bg-zinc-800/60 text-white"
                      : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/30"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800/40 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-zinc-800/60 overflow-hidden"
            >
              <div className="py-3 space-y-1">
                {links.map((l) => (
                  <NavLink
                    key={l.path}
                    to={l.path}
                    end={l.path === "/"}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 rounded-lg text-sm ${
                        isActive
                          ? "bg-zinc-800/60 text-white"
                          : "text-zinc-500"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
