"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function PortfolioHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
      w-[90%] max-w-5xl rounded-full px-8 py-3 flex items-center justify-between
      transition-all duration-500
      ${
        isScrolled
          ? "backdrop-blur-lg bg-white/20 shadow-lg border border-white/30 text-gray-800"
          : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
      }`}
    >
      {/* Logo / Name */}
      <Link
        href="#home"
        className="text-lg font-semibold tracking-wide hover:opacity-90 transition"
      >
        MyPortfolio
      </Link>

      {/* Navigation Links */}
      <nav className="flex gap-6 text-sm sm:text-base font-medium">
        <Link href="#about" className="hover:opacity-75 transition">
          About
        </Link>
        <Link href="#projects" className="hover:opacity-75 transition">
          Projects
        </Link>
        <Link href="#skills" className="hover:opacity-75 transition">
          Skills
        </Link>
        <Link href="#contact" className="hover:opacity-75 transition">
          Contact
        </Link>
      </nav>

      {/* Button / CTA */}
      <Link
        href="#resume"
        className={`px-4 py-1.5 rounded-full font-semibold text-sm transition ${
          isScrolled
            ? "bg-black/70 text-white hover:bg-black"
            : "bg-white text-indigo-700 hover:bg-gray-100"
        }`}
      >
        Resume
      </Link>
    </header>
  );
}
