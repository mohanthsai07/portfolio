"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutMeVideoSync() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [role, setRole] = useState("UI/UX Designer 🎨");

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current?.currentTime || 0;

    if (currentTime >= 1 && currentTime < 2) setRole("UI/UX Designer 🎨");
    else if (currentTime >= 2 && currentTime < 4) setRole("Frontend Developer 💻");
    else if (currentTime >= 4 && currentTime < 7) setRole("Graphic Designer 🖌️");
    else if (currentTime >= 7 && currentTime < 10) setRole("Video Editor 🎥");
    else if (currentTime >= 10) setRole("Creative Innovator ⚡");
  };

  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-24 bg-gray-100 text-gray-900 overflow-hidden"
    >
      {/* --- Animated Background Circles --- */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full blur-3xl opacity-20 top-10 left-10"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 bottom-10 right-10"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
      </motion.div>

      {/* --- Left: Video --- */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0"
      >
        <div className="relative w-full max-w-[400px] sm:max-w-[300px] md:max-w-[400px] aspect-[9/14] rounded-3xl overflow-hidden shadow-2xl border border-gray-300">
          <video
            ref={videoRef}
            src="/mee.mp4" // 🔁 Replace with your actual video file path (e.g., /about/video.mp4)
            autoPlay
            muted
            loop
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent rounded-3xl" />
        </div>
      </motion.div>

      {/* --- Right: Dynamic Role Text --- */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left max-w-xl"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">About Me</h2>

        <AnimatePresence mode="wait">
          <motion.p
            key={role}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-semibold text-indigo-600 h-12 sm:h-14"
          >
            {role}
          </motion.p>
        </AnimatePresence>

        <p className="text-gray-600 mt-6 text-base sm:text-lg leading-relaxed">
          As a <span className="font-medium text-indigo-600">{role.replace(/🎨|💻|🖌️|🎥|⚡/g, "")}</span>,  
          I blend creativity and logic to craft immersive digital experiences.  
          Each role I take helps me bring ideas to life — one frame, one pixel, and one line of code at a time.
        </p>
      </motion.div>
    </section>
  );
}
