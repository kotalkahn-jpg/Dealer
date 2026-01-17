"use client";

import { motion } from "framer-motion";

interface ShadowFloatProps {
  children: React.ReactNode;
}

export default function ShadowFloat({ children }: ShadowFloatProps) {
  return (
    <motion.div
      animate={{
        boxShadow: [
          "0 8px 20px rgba(0,0,0,0.12)",
          "0 14px 30px rgba(0,0,0,0.18)",
          "0 8px 20px rgba(0,0,0,0.12)",
        ],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
