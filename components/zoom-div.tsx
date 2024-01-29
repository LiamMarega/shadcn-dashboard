"use client";
import React from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

export default function ZoomDiv({ children }: { children: React.ReactNode }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const [hookedYPostion, setHookedYPosition] = React.useState(0);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHookedYPosition(latest);
  });

  return (
    <motion.div viewport={{ once: true }} style={{ scale }}>
      {children}
    </motion.div>
  );
}
