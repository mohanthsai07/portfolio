"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutMe() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [role, setRole] = useState("UI/UX Designer 🎨");

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current?.currentTime || 0;

    if (currentTime >= 1 && currentTime < 2) setRole("UI/UX Designer 🎨");
    else if (currentTime >= 2 && currentTime < 4)
      setRole("Frontend Developer 💻");
    else if (currentTime >= 4 && currentTime < 7)
      setRole("Graphic Designer 🖌️");
    else if (currentTime >= 7 && currentTime < 10)
      setRole("Video Editor 🎥");
    else if (currentTime >= 10) setRole("Creative Innovator ⚡");
  };

  return (
    <section
      id="aboutme"
      className="relative flex flex-col md:flex-row items-center justify-center
      px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-24
      bg-[#f7ff9c] overflow-hidden scroll-mt-32 min-h-screen"
    >
      {/* LEFT — VIDEO */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0"
      >
        <div
          className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px]
          aspect-[9/14] rounded-xl overflow-hidden
          bg-white border-2 border-black
          shadow-[8px_8px_0_#0F172A]"
        >
          <video
            ref={videoRef}
            src="/mee.mp4"
            autoPlay
            muted
            loop
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Soft bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </motion.div>

      {/* RIGHT — TEXT */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center md:text-left max-w-xl"
      >
        {/* Section badge */}
        <span
          className="inline-block mb-4 px-4 py-1 rounded-md
          bg-[#FACC15] text-black font-semibold
          shadow-[4px_4px_0_#0F172A]"
        >
          About Me
        </span>

        {/* Dynamic role */}
        <AnimatePresence mode="wait">
          <motion.h2
            key={role}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold
            text-[#7C3AED] min-h-[3rem]"
          >
            {role}
          </motion.h2>
        </AnimatePresence>

        {/* Description */}
        <p className="text-[#334155] mt-6 text-base sm:text-lg leading-relaxed">
          As a{" "}
          <span className="font-semibold text-[#0F172A]">
            {role.replace(/🎨|💻|🖌️|🎥|⚡/g, "")}
          </span>
          , I blend creativity and logic to design meaningful digital
          experiences. Each role I take helps me bring ideas to life — one frame,
          one pixel, and one line of code at a time.
        </p>
      </motion.div>
    </section>
  );
}
