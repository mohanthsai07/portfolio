"use client";

import { useState, useRef, useEffect } from "react";
import {
  Palette,
  Video,
  Sparkles,
  Layout,
  ChevronRight,
  X,
} from "lucide-react";
import ProjectCard from "./projectcard";
import FilterButton from "./filterbutton";

/* ---------------- DATA ---------------- */

const categories = [
  { id: "all", label: "All", icon: Layout },
  { id: "uiux", label: "UI/UX", icon: Layout },
  { id: "graphic", label: "Graphic", icon: Palette },
  { id: "video", label: "Video", icon: Video },
  { id: "snapchat", label: "Snap", icon: Sparkles },
];

const projects = [
  {
    id: 1,
    title: "Modern Banking App",
    category: "uiux",
    description:
      "Complete redesign of mobile banking experience with focus on accessibility",
    image:
      "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Mobile", "Fintech", "iOS"],
  },
  {
    id: 2,
    title: "Brand Identity System",
    category: "graphic",
    description:
      "Comprehensive visual identity for eco-friendly startup including logo and collateral",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Branding", "Print", "Digital"],
  },
  {
    id: 3,
    title: "Product Launch Campaign",
    category: "video",
    description:
      "High-energy promotional video with motion graphics and 3D elements",
    image:
      "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Motion Design", "After Effects", "3D"],
  },
  {
    id: 4,
    title: "AR Face Filter",
    category: "snapchat",
    description:
      "Interactive beauty lens with custom 3D assets and particle effects",
    image:
      "https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["AR", "Lens Studio", "3D Modeling"],
  },
];

/* ---------------- MAIN ---------------- */

export default function ProjectS() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[0] | null>(null);

  const filterScrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    if (filterScrollRef.current) {
      const activeButton =
        filterScrollRef.current.querySelector('[data-active="true"]');
      activeButton?.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="bg-[#dcb8f6] w-full scroll-mt-32 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* ---------- HEADING ---------- */}
        <div className="text-center mb-14">
          <span
            className="
              inline-block mb-3 px-4 py-1 rounded-md
              bg-[#FACC15] text-black font-semibold
              shadow-[4px_4px_0_#0F172A]
            "
          >
            Projects
          </span>

          <h1 className="text-3xl sm:text-5xl font-bold text-[#0F172A] mb-3">
            Featured Work
          </h1>

          <p className="text-[#334155] text-base sm:text-lg">
            Crafting experiences across digital platforms
          </p>
        </div>

        {/* ---------- FILTERS ---------- */}
        <div
          ref={filterScrollRef}
          className="
            flex gap-3 mb-14
            overflow-x-auto pb-2
            justify-start sm:justify-center
            scrollbar-hide
          "
        >
          {categories.map((category) => (
            <div
              key={category.id}
              data-active={activeFilter === category.id}
              className="flex-shrink-0"
            >
              <FilterButton
                category={category}
                isActive={activeFilter === category.id}
                onClick={() => setActiveFilter(category.id)}
              />
            </div>
          ))}
        </div>

        {/* ---------- GRID ---------- */}
        <div
          className="
            grid gap-6 sm:gap-8
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            mb-16
          "
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* ---------- CTA ---------- */}
        <div className="flex justify-center">
          <button
            className="
              group inline-flex items-center gap-3
              px-8 py-4
              bg-[#FACC15] text-black font-semibold rounded-md
              shadow-[6px_6px_0_#0F172A]
              hover:translate-x-[1px] hover:translate-y-[1px]
              hover:shadow-[4px_4px_0_#0F172A]
              transition
            "
          >
            View All Projects
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* ---------- MODAL ---------- */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

/* ---------------- MODAL ---------------- */

interface ProjectModalProps {
  project: (typeof projects)[0];
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/60
        flex items-end sm:items-center justify-center
      "
      onClick={onClose}
    >
      <div
        className="
          bg-white w-full sm:max-w-2xl
          rounded-t-xl sm:rounded-xl
          max-h-[92vh] overflow-y-auto
          border-2 border-black
          shadow-[8px_8px_0_#0F172A]
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div
          className="
            sticky top-0 z-10
            flex items-center justify-between
            px-5 sm:px-6 py-4
            border-b-2 border-black
            bg-[#FFF3E6]
          "
        >
          <h2 className="text-lg sm:text-xl font-bold text-[#0F172A] truncate">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="
              p-2 bg-[#FACC15]
              border-2 border-black
              rounded-md
              shadow-[2px_2px_0_#0F172A]
            "
          >
            <X className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-5 sm:p-6 space-y-6">
          <img
            src={project.image}
            alt={project.title}
            className="
              w-full h-52 sm:h-64
              object-cover rounded-md
              border-2 border-black
            "
          />

          <div>
            <h3 className="text-sm uppercase font-semibold text-[#7C3AED] mb-2">
              Description
            </h3>
            <p className="text-[#334155] leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase font-semibold text-[#7C3AED] mb-3">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    px-3 py-1 text-sm font-medium rounded-md
                    bg-[#FFF3E6] border-2 border-black
                    shadow-[2px_2px_0_#0F172A]
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <button
            className="
              w-full py-3 font-semibold rounded-md
              bg-[#FACC15] text-black
              shadow-[4px_4px_0_#0F172A]
              hover:translate-x-[1px] hover:translate-y-[1px]
              hover:shadow-[3px_3px_0_#0F172A]
              transition
            "
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}
