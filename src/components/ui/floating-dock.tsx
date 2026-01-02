"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FloatingDock({ items, mobileClassName }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "flex flex-col gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg dark:bg-black/20",
        mobileClassName
      )}
    >
      {items.map((item: any, index: number) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.title}
          className="flex items-center justify-center p-3 rounded-full hover:bg-blue-500/10 transition-all"
        >
          {item.icon}
        </a>
      ))}
    </motion.div>
  );
}
