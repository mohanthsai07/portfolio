"use client";

import { useState } from "react";
import { Download, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "hero", label: "Hero" },
  { id: "aboutme", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function PortfolioHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        sticky top-0 z-50 w-full
        bg-[#FFF3E6]/90 backdrop-blur-md
        border-b border-black/10
      "
    >
      {/* TOP BAR */}
      <div className="w-[95%] max-w-7xl mx-auto py-4 flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#hero"
          className="
            bg-[#7C3AED] text-white font-semibold
            px-4 py-2 rounded-md
            shadow-[6px_6px_0_#0F172A]
          "
        >
          MohanthSai
        </a>

        {/* DESKTOP NAV */}
        <nav
          className="
            hidden md:flex items-center gap-8
            bg-white px-10 py-3 rounded-md
            shadow-[0_8px_0_#0F172A]
          "
        >
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="
                font-medium px-4 py-2 rounded-md
                text-[#0F172A]
                hover:bg-[#7C3AED] hover:text-white
                transition
              "
            >
              {label}
            </a>
          ))}
        </nav>

        {/* DESKTOP RESUME */}
        <a
          href="/Mohanth_Sai_UIUX_Resume.Pdf"
          download
          className="
            hidden md:inline-flex items-center gap-2
            bg-[#FACC15] text-black font-semibold
            px-5 py-2 rounded-md
            shadow-[6px_6px_0_#0F172A]
            hover:translate-x-[1px] hover:translate-y-[1px]
            hover:shadow-[4px_4px_0_#0F172A]
            transition
          "
        >
          <Download size={18} />
          Resume
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden p-2 rounded-md
            bg-white border-2 border-black
            shadow-[4px_4px_0_#0F172A]
          "
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div
          className="
            md:hidden w-full
            bg-white border-t border-black/10
            px-6 py-6
            flex flex-col gap-4
            shadow-[0_8px_0_#0F172A]
          "
        >
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="
                px-4 py-3 rounded-md
                text-[#0F172A] font-medium
                hover:bg-[#7C3AED] hover:text-white
                transition
              "
            >
              {label}
            </a>
          ))}

          {/* MOBILE RESUME */}
          <a
            href="/Mohanth_Sai_UIUX_Resume.Pdf"
            download
            className="
              mt-4 inline-flex items-center justify-center gap-2
              bg-[#FACC15] text-black font-semibold
              px-5 py-3 rounded-md
              shadow-[6px_6px_0_#0F172A]
            "
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
