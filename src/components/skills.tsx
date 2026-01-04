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
    { name: "Figma", icon: Figma, color: "#F24E1E" },
    { name: "Framer", icon: Framer, color: "#0055FF" },
    { name: "UI/UX Design", icon: Edit, color: "#7C3AED" },
  ],
  frontend: [
    { name: "React", icon: Code, color: "#61DAFB" },
    { name: "Next.js", icon: Monitor, color: "#000000" },
    { name: "Tailwind CSS", icon: Layout, color: "#38BDF8" },
  ],
  video: [
    { name: "Adobe Premiere Pro", icon: Video, color: "#EF4444" },
    { name: "After Effects", icon: Zap, color: "#A855F7" },
    { name: "Color Grading", icon: Camera, color: "#FACC15" },
  ],
  snapchat: [
    { name: "Lens Studio", icon: Sparkles, color: "#FACC15" },
    { name: "3D Modeling", icon: Layout, color: "#22C55E" },
    { name: "AR Scripting", icon: Code, color: "#0F172A" },
  ],
  tools: [
    { name: "Git & GitHub", icon: GitBranchPlus, color: "#181717" },
    { name: "Performance Optimization", icon: Zap, color: "#FACC15" },
    { name: "Database Management", icon: Database, color: "#0F172A" },
  ],
}

export default function Skills() {
  return (
    <section id="skills" className="w-full scroll-mt-32 min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#FFF3E6]">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16 space-y-4">
          <span
            className="inline-block px-4 py-1 rounded-md
            bg-[#FACC15] text-black font-semibold
            shadow-[4px_4px_0_#0F172A]"
          >
            Skills
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A]">
            Skills & Tools
          </h2>

          <p className="text-[#334155] max-w-2xl mx-auto">
            A versatile blend of design, development, and creative tools to craft
            immersive digital experiences.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <SkillCard title="Design" skills={skillsData.design} />
          <SkillCard title="Frontend" skills={skillsData.frontend} />
          <SkillCard title="Video Editing" skills={skillsData.video} />
          <SkillCard title="Snap Lens Creation" skills={skillsData.snapchat} />
          <SkillCard title="Tools & Others" skills={skillsData.tools} />
        </div>
      </div>
    </section>
  )
}

function SkillCard({
  title,
  skills,
}: {
  title: string
  skills: { name: string; icon: any; color: string }[]
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="p-6 rounded-xl bg-white
      border-2 border-black
      shadow-[6px_6px_0_#0F172A]
      transition-all duration-300"
    >
      {/* HEADER */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-lg font-semibold text-[#7C3AED]">
          {title}
        </h3>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown className="text-[#0F172A]" />
        </motion.div>
      </div>

      {/* CONTENT */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-6 space-y-4"
          >
            {skills.map((skill, idx) => {
              const Icon = skill.icon
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 cursor-pointer
                  hover:translate-x-1 transition-transform"
                >
                  <div
                    className="p-2 rounded-md bg-[#FFF3E6]
                    border-2 border-black
                    shadow-[2px_2px_0_#0F172A]"
                  >
                    <Icon size={18} style={{ color: skill.color }} />
                  </div>

                  <span className="text-sm font-medium text-[#0F172A]">
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
