"use client";

import { motion } from "framer-motion";

interface ShadowHoverProps {
  children: React.ReactNode;
  from?: string;
  to?: string;
}

export default function ShadowHover({
  children,
  from = "0 4px 12px rgba(0,0,0,0.08)",
  to = "0 12px 30px rgba(0,0,0,0.15)",
}: ShadowHoverProps) {
  return (
    <motion.div
      initial={{ boxShadow: from }}
      whileHover={{ boxShadow: to }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
