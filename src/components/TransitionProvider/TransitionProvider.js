"use client";

import { useFollowPointer } from "@/hooks/use-follow-pointer";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Transition({ children }) {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
      {/* <motion.div
        className="h-10 w-10 bg-red-600 rounded-full absolute z-30"
        animate={{ rotate: 360 }}
        ref={ref}
        transition={{ type: "spring" }}
        style={{ x, y }}
      /> */}
    </motion.div>
  );
}
