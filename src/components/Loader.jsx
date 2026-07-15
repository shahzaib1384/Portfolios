import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Loader({ onComplete }) {
  useEffect(() => {
    // Cap the maximum duration to 600ms
    const timer = setTimeout(() => {
      onComplete();
    }, 600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A2035]"
    >
      <motion.div
        animate={{
          scale: [0.95, 1.05, 0.95],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#111827] to-[#0A0F1E] border border-[#4F8EF7]/40 shadow-lg shadow-[#4F8EF7]/20"
      >
        <span className="text-3xl font-extrabold font-sora gradient-text">SH</span>
      </motion.div>
    </motion.div>
  );
}
