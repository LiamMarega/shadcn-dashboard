"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Transition } from "framer-motion";

export default function ScrollDiv({
  className,
  children,
  invert,
}: {
  className?: string;
  children: React.ReactNode;
  invert?: boolean;
}) {
  const transition: Transition = {
    type: "spring",
    damping: 100,
    stiffness: 0,
    delay: 5,
    velocity: 0.2,
  };
  const { scrollYProgress } = useScroll();
  const x = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    invert ? ["-100vw", "0vw", "100vw"] : ["100vw", "0vw", "-100vw"],
  );

  return (
    <motion.div
      className={`container ${className}`}
      style={{
        x,
      }}
      viewport={{ once: true }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
