"use client";
import React from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

export default function ZoomDiv({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  return (
    <motion.div
      className="container"
      viewport={{ once: true }}
      style={{ scale }}
    >
      {children}
    </motion.div>
  );
}