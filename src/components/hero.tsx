"use client";
import React from "react";
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

const tools = [
  { icon: <Figma size={24} />, color: "#ec4899" },
  { icon: <Framer size={24} />, color: "#a855f7" },
  { icon: <Code size={24} />, color: "#3b82f6" },
  { icon: <Monitor size={24} />, color: "#22d3ee" },
  { icon: <Box size={24} />, color: "#2dd4bf" },
  { icon: <Video size={24} />, color: "#ef4444" },
  { icon: <Camera size={24} />, color: "#facc15" },
  { icon: <Edit size={24} />, color: "#22c55e" },
  { icon: <GitBranchPlus size={24} />, color: "#1f2937" },
];

export default function Hero() {
  const orbitRadius = 200;
  const rotationDuration = 40;
  const { scrollY } = useScroll();

  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isScrollingDown, setIsScrollingDown] = React.useState(false);

  React.useEffect(() => {
    return scrollY.onChange((y) => {
      if (y > lastScrollY) setIsScrollingDown(true);
      else setIsScrollingDown(false);
      setLastScrollY(y);
    });
  }, [scrollY, lastScrollY]);

  const imageY = useTransform(scrollY, (value) =>
    isScrollingDown ? -Math.min(value / 4, 200) : 0
  );
  const smoothY = useSpring(imageY, { stiffness: 80, damping: 20 });

  return (
  <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 sm:px-6 md:px-12 relative overflow-hidden">
  {/* Left Side */}
  <div className="flex-1 flex flex-col justify-center space-y-6 z-20 text-center md:text-left mt-10 md:mt-0">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
      <Typewriter
        options={{
          strings: ["Hi, I'm Mohanthsai", "UI Engineer & Designer"],
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
    <p className="text-gray-700 dark:text-gray-300 max-w-lg mx-auto md:mx-0 text-base sm:text-lg">
      Crafting beautiful user interfaces, animations, graphics, and interactive experiences with modern web technologies.
    </p>
    <button className="px-6 py-3 bg-blue-600 text-white rounded-full w-max mx-auto md:mx-0 hover:bg-blue-700 transition">
      View Projects
    </button>
  </div>

  {/* Right Side */}
  <div className="flex-[1.2] relative flex justify-center items-center mt-12 md:mt-0 w-full">
    {/* Background Circles */}
    <motion.div
      className="absolute w-[400px] sm:w-[480px] md:w-[520px] aspect-square rounded-full border-4 border-blue-300 dark:border-blue-700 z-0"
      animate={{ scale: [1, 1.05, 1], rotate: [0, 360, 0] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    />
    <motion.div
      className="absolute w-[300px] sm:w-[360px] md:w-[400px] aspect-square rounded-full border-2 border-blue-400 dark:border-blue-600 opacity-50 z-0"
      animate={{ scale: [1, 0.95, 1], rotate: [360, 0, 360] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    />

    {/* Rotating Orbit Icons */}
    <motion.div
      className="absolute w-[420px] sm:w-[520px] md:w-[600px] aspect-square rounded-full flex justify-center items-center z-10"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: rotationDuration,
        ease: "linear",
      }}
    >
      {tools.map((tool, idx) => {
        const angle = (idx * (2 * Math.PI)) / tools.length;
        const x = orbitRadius * Math.cos(angle);
        const y = orbitRadius * Math.sin(angle);
        return (
          <motion.div
            key={idx}
            className="absolute cursor-pointer z-20"
            style={{
              top: "50%",
              left: "50%",
              translateX: "-50%",
              translateY: "-50%",
              x,
              y,
              backdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.08)",
              border: `2px solid ${tool.color}`,
              boxShadow: `0 0 15px ${tool.color}`,
              borderRadius: "12px",
              padding: "10px",
            }}
            whileHover={{
              scale: 1.5,
              boxShadow: `0 0 25px ${tool.color}`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {tool.icon}
          </motion.div>
        );
      })}
    </motion.div>

    {/* Profile Image */}
    <motion.div
      className="relative z-30 cursor-pointer rounded-full"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 25px 5px rgba(255,255,255,0.7)",
      }}
    >
      <Image
        src="/img.png"
        alt="Mohanthsai"
        width={600}
        height={600}
        className="rounded-full w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto object-cover"
      />
    </motion.div>
  </div>
</section>

  );
}
