"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface WordRevealProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function WordReveal({
  text,
  delay = 0,
  duration = 0.05,
  className,
}: WordRevealProps) {
  const words = text.split(" ");

  return (
    <p className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: delay + index * duration,
            duration: 0.25,
          }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}
