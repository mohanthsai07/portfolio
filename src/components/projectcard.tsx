import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  color?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className="group relative rounded-xl overflow-hidden bg-white
      border-2 border-black
      shadow-[6px_6px_0_#0F172A]
      transition-all duration-300
      hover:translate-x-[1px] hover:translate-y-[1px]
      hover:shadow-[4px_4px_0_#0F172A]
      cursor-pointer"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      {/* IMAGE */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover
          transition-transform duration-500
          group-hover:scale-105"
        />

        {/* Yellow hover overlay */}
        <div
          className="absolute inset-0 bg-[#FACC15]/20
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300"
        />

        {/* External link */}
        <div
          className="absolute top-4 right-4 opacity-0
          group-hover:opacity-100 transition-all duration-300"
        >
          <button
            className="p-2 rounded-md bg-[#FACC15] text-black
            border-2 border-black
            shadow-[3px_3px_0_#0F172A]
            hover:translate-x-[1px] hover:translate-y-[1px]
            hover:shadow-[2px_2px_0_#0F172A]
            transition"
          >
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3
          className="text-lg font-semibold text-[#0F172A] mb-2
          group-hover:text-[#7C3AED] transition-colors line-clamp-2"
        >
          {project.title}
        </h3>

        <p className="text-sm text-[#334155] leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-md
              bg-[#FFF3E6] text-[#0F172A]
              border-2 border-black
              shadow-[2px_2px_0_#0F172A]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* BOTTOM ACCENT */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[4px]
        bg-[#FACC15]"
      />
    </div>
  );
}
