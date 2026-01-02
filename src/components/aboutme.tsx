"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Figma, Code2, Monitor, PenTool } from "lucide-react";

export default function AboutSection() {
  return (
   <section
  id="about"
  className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-gray-100 text-gray-900 overflow-x-hidden"
>

      {/* --- SVG Background Animation --- */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full -z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="10%"
          cy="20%"
          r="80"
          fill="url(#grad1)"
          animate={{ cy: ["20%", "25%", "20%"], r: [80, 90, 80] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.circle
          cx="90%"
          cy="70%"
          r="100"
          fill="url(#grad2)"
          animate={{ cy: ["70%", "75%", "70%"], r: [100, 115, 100] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EC4899" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* --- Left Side (Image + Floating Icons) --- */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-xl mb-10 md:mb-0 bg-white"
      >
        <Image
          src="/me.png"
          alt="My photo"
          width={400}
          height={400}
          className="object-cover w-full h-full"
        />

        {/* Floating Tool Icons */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute -top-6 -left-6 bg-white shadow-md p-3 rounded-full border border-gray-200"
        >
          <Figma className="text-indigo-500" size={24} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: 1 }}
          className="absolute top-6 -right-6 bg-white shadow-md p-3 rounded-full border border-gray-200"
        >
          <Code2 className="text-blue-500" size={24} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
          className="absolute bottom-6 -left-6 bg-white shadow-md p-3 rounded-full border border-gray-200"
        >
          <Monitor className="text-violet-500" size={24} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: 2 }}
          className="absolute -bottom-6 right-6 bg-white shadow-md p-3 rounded-full border border-gray-200"
        >
          <PenTool className="text-pink-500" size={24} />
        </motion.div>
      </motion.div>

      {/* --- Right Side (Text Content) --- */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-xl text-center md:text-left"
      >
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Hi! I’m <span className="font-semibold text-gray-900">[Your Name]</span>, 
          a passionate <span className="text-indigo-600 font-medium">UI/UX & Frontend Developer</span> 
          who loves designing and coding interactive experiences that are functional and beautiful.  
          I believe great design bridges the gap between creativity and technology.
        </p>

        <ul className="text-gray-600 space-y-2 mb-8">
          <li>🎨 UI/UX Design (Figma, Framer, Adobe XD)</li>
          <li>💻 Frontend Development (Next.js, React, Tailwind CSS)</li>
          <li>🧠 Creative Problem Solving</li>
          <li>🎥 Graphic & Video Editing (Canva, Premiere Pro)</li>
        </ul>

        <Button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-6 py-3 shadow-md">
          Let’s Connect
        </Button>
      </motion.div>
    </section>
  );
}
