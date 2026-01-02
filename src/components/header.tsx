"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { id: "aboutme", label: "About" },
  { id: "projectshowcase", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function PortfolioHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);

          const sections = NAV_ITEMS.map((item) =>
            document.getElementById(item.id)
          );

          const current = sections.find(
            (section) =>
              section &&
              section.getBoundingClientRect().top <= 120 &&
              section.getBoundingClientRect().bottom >= 120
          );

          if (current) setActiveSection(current.id);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 
      w-[92%] max-w-6xl rounded-full flex items-center justify-between 
      px-6 md:px-10 py-3 transition-all duration-500 
      border backdrop-blur-xl
      ${
        isScrolled
          ? "bg-white/70 border-gray-300 shadow-lg text-gray-800"
          : "bg-white/10 border-white/20 text-white"
      }`}
    >
      {/* Logo */}
      <Link
        href="#home"
        aria-label="Go to home section"
        className="text-xl font-semibold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
      >
        Mohanthsai<span className="text-gray-400">.</span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 text-sm lg:text-base font-medium">
        {NAV_ITEMS.map(({ id, label }) => (
          <Link key={id} href={`#${id}`} className="relative group">
            <span
              className={`transition-colors ${
                activeSection === id
                  ? "text-blue-500"
                  : isScrolled
                  ? "text-gray-800"
                  : "text-white"
              }`}
            >
              {label}
            </span>
            <span
              className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all
              ${activeSection === id ? "w-full" : "w-0 group-hover:w-full"}`}
            />
          </Link>
        ))}
      </nav>

      {/* Resume */}
      <div className="hidden md:block">
        <Link
          href="#resume"
          className={`px-5 py-2 rounded-full font-semibold text-sm transition
          ${
            isScrolled
              ? "bg-gray-900 text-white hover:bg-black"
              : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90"
          }`}
        >
          Resume
        </Link>
      </div>

      {/* Mobile Button */}
      <button
        onClick={() => setMenuOpen((p) => !p)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center transition
        ${
          isScrolled
            ? "bg-gray-900 text-white hover:bg-black"
            : "bg-white/20 text-white hover:bg-white/30"
        }`}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className={`absolute top-full left-0 w-full mt-3 rounded-2xl 
            backdrop-blur-xl border shadow-xl
            ${
              isScrolled
                ? "bg-white/90 border-gray-200 text-gray-900"
                : "bg-gradient-to-br from-blue-600 to-purple-600 text-white border-white/30"
            }`}
          >
            <nav className="flex flex-col items-center py-6 gap-4 font-medium">
              {NAV_ITEMS.map(({ id, label }) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="hover:opacity-80 transition"
                >
                  {label}
                </Link>
              ))}

              <Link
                href="#resume"
                onClick={() => setMenuOpen(false)}
                className={`mt-2 px-5 py-2 rounded-full font-semibold text-sm transition
                ${
                  isScrolled
                    ? "bg-gray-900 text-white hover:bg-black"
                    : "bg-white text-indigo-700 hover:bg-gray-100"
                }`}
              >
                Resume
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
