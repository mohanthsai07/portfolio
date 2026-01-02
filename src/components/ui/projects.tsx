"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Events2Go – Event Booking Platform",
    desc: "A full-stack event booking website built with Next.js, Tailwind CSS, and Node.js.",
    img: "/projects/events2go.png",
    link: "https://events2go.com.au",
    tags: ["Next.js", "Tailwind", "UI/UX"],
  },
  {
    title: "Snap Lens – AR Filter",
    desc: "Custom Snapchat lens built using Lens Studio and 3D assets for brand engagement.",
    img: "/projects/lens.png",
    link: "#",
    tags: ["Lens Studio", "3D", "AR"],
  },
  {
    title: "Portfolio Redesign",
    desc: "Personal portfolio with motion animations, typewriter effects, and responsive design.",
    img: "/projects/portfolio.png",
    link: "#",
    tags: ["Next.js", "Framer Motion", "UI Design"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-gray-800"
        >
          My <span className="text-blue-600">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Here are some of the featured projects I’ve worked on — combining
          creativity, design, and development.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={proj.img}
                  alt={proj.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {proj.title}
                </h3>
                <p className="text-gray-600 mb-3">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
