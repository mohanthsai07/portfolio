import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 cursor-pointer active:scale-95 sm:active:scale-100"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:sm:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button className="p-2 sm:p-3 bg-white rounded-full shadow-lg hover:bg-slate-50 transition-colors active:scale-90">
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900" />
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors line-clamp-2">
          {project.title}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 sm:line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 sm:px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full group-hover:bg-slate-200 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
    </div>
  );
}
