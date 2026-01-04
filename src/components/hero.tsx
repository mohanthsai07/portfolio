"use client";

import React, { useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import {
  Figma,
  Framer,
  Code,
  Monitor,
  Box,
  Video,
  Camera,
  Edit,
  GitBranchPlus,
} from "lucide-react";

/* ================= TOOLS ================= */
const tools = [
  { Icon: Figma, color: "#F24E1E" },
  { Icon: Framer, color: "#0055FF" },
  { Icon: Code, color: "#0F172A" },
  { Icon: Monitor, color: "#6366F1" },
  { Icon: Box, color: "#22C55E" },
  { Icon: Video, color: "#EF4444" },
  { Icon: Camera, color: "#FACC15" },
  { Icon: Edit, color: "#A855F7" },
  { Icon: GitBranchPlus, color: "#181717" },
];

export default function Hero() {
  const { scrollY } = useScroll();

  /* Smooth parallax */
  const imageY = useTransform(scrollY, (v) => -Math.min(v / 4, 140));
  const smoothY = useSpring(imageY, { stiffness: 70, damping: 22 });

  /* Responsive orbit radius */
  const orbitRadius = useMemo(() => {
    if (typeof window === "undefined") return 200;
    return window.innerWidth < 640 ? 120 : window.innerWidth < 1024 ? 160 : 200;
  }, []);

  return (
    <section
      id="hero"
      className="
        w-full min-h-screen
        flex flex-col md:flex-row
        items-center justify-center
        bg-[#e9e8e7]
        px-4 sm:px-6 md:px-12
        pt-5 pb-10 md:pt-0
        relative overflow-hidden
        scroll-mt-32
      "
    >
      {/* ================= LEFT ================= */}
      <div
        className="
          flex-1 flex flex-col
          justify-center
          space-y-6
          z-20
          text-center md:text-left
          items-center md:items-start
        "
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F172A]">
          <Typewriter
            options={{
              strings: ["Hi, I'm Mohanth Sai", "UI Engineer & Designer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <p className="text-[#334155] max-w-lg text-base sm:text-lg">
          Crafting{" "}
          <span className="font-semibold text-[#7C3AED]">
            clean interfaces
          </span>
          , strong UX systems, and modern web experiences.
        </p>

        <button
          className="
            px-7 py-3 rounded-md
            font-semibold
            bg-[#FACC15] text-black
            shadow-[6px_6px_0_#0F172A]
            hover:translate-x-[1px]
            hover:translate-y-[1px]
            hover:shadow-[4px_4px_0_#0F172A]
            transition
          "
        >
          View Projects
        </button>
      </div>

      {/* ================= RIGHT ================= */}
      <div
        className="
          flex-[1.2]
          relative
          flex justify-center items-center
          mt-16 md:mt-0
          w-full max-w-[100vw]
        "
      >
        {/* ===== RINGS ===== */}
        <motion.div
          className="
            absolute
            w-[260px] sm:w-[340px] md:w-[480px]
            aspect-square rounded-full
            border-2 border-[#FACC15]
          "
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
        />

        <motion.div
          className="
            absolute
            w-[200px] sm:w-[260px] md:w-[360px]
            aspect-square rounded-full
            border-2 border-[#7C3AED]
          "
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 44, ease: "linear" }}
        />

        {/* ===== ORBIT ICONS ===== */}
        <motion.div
          className="
            absolute
            w-[300px] sm:w-[420px] md:w-[520px]
            aspect-square
            flex justify-center items-center
          "
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {tools.map(({ Icon, color }, idx) => {
            const angle = (idx * (2 * Math.PI)) / tools.length;
            const x = orbitRadius * Math.cos(angle);
            const y = orbitRadius * Math.sin(angle);

            return (
              <motion.div
                key={idx}
                className="
                  absolute bg-white
                  border-2 border-black
                  rounded-md
                  shadow-[4px_4px_0_#0F172A]
                  p-3
                "
                style={{
                  top: "50%",
                  left: "50%",
                  translateX: "-50%",
                  translateY: "-50%",
                  x,
                  y,
                }}
                whileHover={{ scale: 1.25, rotate: 6 }}
              >
                <Icon size={22} style={{ color }} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ===== PROFILE IMAGE ===== */}
        <motion.div
          style={{ y: smoothY }}
          className="relative z-30"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          whileHover={{ scale: 1.08 }}
        >
          <Image
            src="/img.png"
            alt="Mohanth Sai"
            width={400}
            height={400}
            className="
              rounded-full object-cover
              w-[180px] h-[180px]
              sm:w-[240px] sm:h-[240px]
              md:w-[320px] md:h-[320px]
            "
          />
        </motion.div>
      </div>
    </section>
  );
}
