"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Figma,
  Framer,
  Edit,
  Code,
  Monitor,
  Layout,
  GitBranchPlus,
  Zap,
  Database,
  Video,
  Camera,
  Sparkles,
  ChevronDown,
} from "lucide-react"

const skillsData = {
  design: [
    { name: "Figma", icon: Figma },
    { name: "Framer", icon: Framer },
    { name: "UI/UX Design", icon: Edit },
  ],
  frontend: [
    { name: "React", icon: Code },
    { name: "Next.js", icon: Monitor },
    { name: "Tailwind CSS", icon: Layout },
  ],
  video: [
    { name: "Adobe Premiere Pro", icon: Video },
    { name: "After Effects", icon: Zap },
    { name: "Color Grading", icon: Camera },
  ],
  snapchat: [
    { name: "Lens Studio", icon: Sparkles },
    { name: "3D Modeling", icon: Layout },
    { name: "AR Scripting", icon: Code },
  ],
  tools: [
    { name: "Git & GitHub", icon: GitBranchPlus },
    { name: "Performance Optimization", icon: Zap },
    { name: "Database Management", icon: Database },
  ],
}

export default function SkillsTools() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Skills & Tools
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A versatile blend of design, development, and creative tools to craft immersive digital experiences.
          </p>
        </div>

        {/* Accordion for mobile, grid for desktop */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <SkillCard title="Design" color="pink" skills={skillsData.design} />
          <SkillCard title="Frontend" color="blue" skills={skillsData.frontend} />
          <SkillCard title="Video Editing" color="red" skills={skillsData.video} />
          <SkillCard title="Snap Lens Creation" color="yellow" skills={skillsData.snapchat} />
          <SkillCard title="Tools & Others" color="purple" skills={skillsData.tools} />
        </div>
      </div>
    </section>
  )
}

function SkillCard({
  title,
  color,
  skills,
}: {
  title: string
  color: string
  skills: { name: string; icon: any }[]
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-${color}-50 to-${color}-100 dark:from-${color}-900/20 dark:to-${color}-800/10 border border-${color}-200 dark:border-${color}-800 shadow-sm transition-all duration-300`}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between sm:block cursor-pointer sm:cursor-default"
        onClick={() => setOpen(!open)}
      >
        <h3
          className={`text-lg sm:text-xl font-bold text-${color}-700 dark:text-${color}-400`}
        >
          {title}
        </h3>
        <motion.div
          className="sm:hidden"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-slate-600 dark:text-slate-300" />
        </motion.div>
      </div>

      {/* Accordion Content for mobile */}
      <AnimatePresence>
        {(open || typeof window !== "undefined" && window.innerWidth >= 640) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-4"
          >
            {skills.map((skill, idx) => {
              const Icon = skill.icon
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 py-2 group cursor-pointer hover:translate-x-1 transition-transform"
                >
                  <div
                    className={`p-2 rounded-lg bg-${color}-100 dark:bg-${color}-900/30 group-hover:bg-${color}-200 dark:group-hover:bg-${color}-900/50 transition-colors`}
                  >
                    <Icon size={20} className={`text-${color}-600 dark:text-${color}-400`} />
                  </div>
                  <span className="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-medium">
                    {skill.name}
                  </span>
                </div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
