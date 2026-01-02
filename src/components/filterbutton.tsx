import { LucideIcon } from 'lucide-react';

interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface FilterButtonProps {
  category: Category;
  isActive: boolean;
  onClick: () => void;
}

export default function FilterButton({ category, isActive, onClick }: FilterButtonProps) {
  const Icon = category.icon;

  return (
    <button
      onClick={onClick}
      className={`
        group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap
        ${isActive
          ? 'bg-slate-900 text-white shadow-lg scale-100'
          : 'bg-white text-slate-700 hover:bg-slate-100 hover:shadow-md'
        }
      `}
    >
      <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-12' : 'group-hover:scale-110'}`} />
      <span className="hidden sm:inline">{category.label}</span>
      <span className="sm:hidden text-xs">{category.label.split(' ')[0]}</span>
    </button>
  );
}
