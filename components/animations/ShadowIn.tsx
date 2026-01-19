"use client";

import { motion } from "framer-motion";

interface ShadowInProps {
  children: React.ReactNode;
  delay?: number;
}

export default function ShadowIn({
  children,
  delay = 0,
}: ShadowInProps) {
  return (
    <motion.div
      initial={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
      whileInView={{ boxShadow: "0 10px 25px rgba(0,0,0,0.12)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
