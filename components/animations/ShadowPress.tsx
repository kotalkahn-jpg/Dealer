"use client";

import { motion } from "framer-motion";

interface ShadowPressProps {
  children: React.ReactNode;
}

export default function ShadowPress({ children }: ShadowPressProps) {
  return (
    <motion.div
      initial={{ boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
      whileTap={{ boxShadow: "0 4px 10px rgba(0,0,0,0.12)" }}
      transition={{ duration: 0.12 }}
    >
      {children}
    </motion.div>
  );
}
