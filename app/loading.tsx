"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLockedBody } from "@/lib/hooks/useBodyLock";
import { useGlobalStore } from "@/lib/stores/global-store";
import { Icons } from "@/components/icons";

export default function Loading() {
  const [_, setLocked] = useLockedBody(false);

  const { loading } = useGlobalStore((state: { loading: any }) => ({
    loading: state.loading,
  }));

  /* if (!loading) return null; */

  return (
    <motion.div
      className="flex bg-white justify-center items-center z-50 w-screen h-screen fixed"
      animate={
        !loading
          ? {
              clipPath: ["circle(150% at 50% 50%)", "circle(0% at 0% 0%)"],
            }
          : {}
      }
      transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
    >
      <div className="flex flex-col justify-center items-center">
        <motion.div
          className="absolute"
          animate={!loading ? { top: 20, left: "2rem" } : {}}
          transition={{ ease: "easeIn", duration: 0.5 }}
        >
          <Icons.logo className="h-8 animate-[pulse_2s_ease-in-out_infinite] " />
        </motion.div>
      </div>
    </motion.div>
  );
}
