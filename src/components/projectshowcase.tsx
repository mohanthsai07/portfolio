"use client";

import { useState, useRef, useEffect } from 'react';
import { Palette, Video, Sparkles, Layout, ChevronRight, X } from 'lucide-react';
import ProjectCard from '../components/projectcard';
import FilterButton from '../components/filterbutton';

const categories = [
  { id: 'all', label: 'All', icon: Layout },
  { id: 'uiux', label: 'UI/UX', icon: Layout },
  { id: 'graphic', label: 'Graphic', icon: Palette },
  { id: 'video', label: 'Video', icon: Video },
  { id: 'snapchat', label: 'Snap', icon: Sparkles },
];

const projects = [
  {
    id: 1,
    title: 'Modern Banking App',
    category: 'uiux',
    description: 'Complete redesign of mobile banking experience with focus on accessibility',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Mobile', 'Fintech', 'iOS'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Brand Identity System',
    category: 'graphic',
    description: 'Comprehensive visual identity for eco-friendly startup',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Branding', 'Print', 'Digital'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    title: 'Product Launch Campaign',
    category: 'video',
    description: 'High-energy promotional video with motion graphics and 3D elements',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Motion Design', 'After Effects', '3D'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    title: 'AR Face Filter',
    category: 'snapchat',
    description: 'Interactive beauty lens with custom 3D assets and particle effects',
    image: 'https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['AR', 'Lens Studio', '3D Modeling'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 5,
    title: 'E-commerce Dashboard',
    category: 'uiux',
    description: 'Analytics platform with real-time data visualization',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Dashboard', 'Analytics', 'Web'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    id: 6,
    title: 'Festival Poster Series',
    category: 'graphic',
    description: 'Bold typographic designs for annual music festival',
    image: 'https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Typography', 'Print', 'Illustration'],
    color: 'from-red-500 to-rose-500',
  },
  {
    id: 7,
    title: 'Documentary Edit',
    category: 'video',
    description: 'Cinematic storytelling with color grading and sound design',
    image: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Documentary', 'Color Grading', 'Premiere'],
    color: 'from-slate-500 to-gray-600',
  },
  {
    id: 8,
    title: 'Game Effect Lens',
    category: 'snapchat',
    description: 'Gamified AR experience with score tracking and animations',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Gaming', 'Interactive', 'AR'],
    color: 'from-cyan-500 to-teal-500',
  },
];

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const filterScrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  useEffect(() => {
    if (filterScrollRef.current) {
      const activeButton = filterScrollRef.current.querySelector('[data-active="true"]');
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeFilter]);

  return (
    <div className="w-full min-h-screen">
      <div className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight leading-tight">
            Featured Work
          </h1>
          <p className="text-base sm:text-lg text-slate-600 px-2">
            Crafting experiences across digital platforms
          </p>
        </div>

        <div
          ref={filterScrollRef}
          className="flex gap-2 sm:gap-3 mb-10 sm:mb-12 overflow-x-auto pb-2 px-1 sm:justify-center scrollbar-hide"
        >
          {categories.map((category) => (
            <div key={category.id} data-active={activeFilter === category.id}>
              <FilterButton
                category={category}
                isActive={activeFilter === category.id}
                onClick={() => setActiveFilter(category.id)}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-16">
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

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 sm:py-20">
            <p className="text-slate-500 text-base sm:text-lg">No projects found in this category</p>
          </div>
        )}

        <div className="flex justify-center">
          <button className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 text-white rounded-xl sm:rounded-full font-medium hover:bg-slate-800 transition-all duration-300 hover:gap-4 active:scale-95">
            View All Projects
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

interface ProjectModalProps {
  project: typeof projects[0];
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-gray-100 w-full sm:max-w-2xl sm:rounded-2xl rounded-t-2xl max-h-[90vh] overflow-y-auto animate-slideUp sm:animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-slate-100 px-4 sm:px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 truncate">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors active:scale-90"
          >
            <X className="w-6 h-6 text-slate-600" />
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <div className="mb-6 rounded-xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase mb-2">
                Description
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">
                Technologies & Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-4 py-2 bg-gradient-to-r ${project.color} text-white text-sm font-medium rounded-full`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <button className="w-full py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors active:scale-95">
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
