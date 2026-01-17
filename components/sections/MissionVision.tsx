"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn"; // NEW
import { Target, Eye, ShieldCheck, Rocket, ChevronDown } from "lucide-react";

export default function MissionVision() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      title: "Our Mission",
      icon: <Target size={28} className="text-blue-500" />,
      content:
        "To deliver high-quality agricultural commodities and reliable logistics solutions that support Malawi's farmers, businesses, and organizations while maintaining professional service standards and strong client partnerships.",
    },
    {
      title: "Our Vision",
      icon: <Eye size={28} className="text-blue-500" />,
      content:
        "To become Malawi’s most trusted supplier and logistics provider, empowering agricultural development and economic growth through innovation, efficiency, and unwavering service excellence.",
    },
    {
      title: "Our Values",
      icon: <ShieldCheck size={28} className="text-blue-500" />,
      content:
        "Integrity, reliability, honesty, and professionalism form the core of our operations. We are committed to building long-term trust with our suppliers, clients, and partners.",
    },
    {
      title: "Our Goal",
      icon: <Rocket size={28} className="text-blue-500" />,
      content:
        "To expand our logistics network, empower local farmers, and strengthen agricultural supply chains across Malawi while providing unmatched customer satisfaction.",
    },
  ];

  return (
    <section className="relative py-24">

      {/* Curved Top Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-20">
          <path
            d="M0.00,49.98 C150.00,150.00 349.12,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
            className="fill-gray-50"
          ></path>
        </svg>
      </div>

      {/* Blurred Background */}
      
      <div className="absolute inset-0 bg-gray-900/10 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <FadeIn>
          <h2 className="text-center text-4xl font-bold text-blue-900 mb-12 drop-shadow-sm">
            Mission & Vision
          </h2>
        </FadeIn>

        {/* 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            // Direction logic for each card
            const direction =
              index === 0 ? "left" :
              index === 1 ? "right" :
              index === 2 ? "up" :
              "down";

            return (
              <SlideIn direction={direction} delay={0.1 * index} key={index}>
                <div
                  className="
                    backdrop-blur-xl bg-white/10 
                    border border-white/20 
                    shadow-xl rounded-xl 
                    p-6 cursor-pointer 
                    transition-all duration-300
                    hover:bg-white/20
                    hover:shadow-2xl
                    hover:-translate-y-1
                    hover:ring-2 hover:ring-blue-400/40
                  "
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">

                      {/* Icon Glow */}
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full blur-xl bg-blue-500/40"></div>

                        <div
                          className="
                            relative w-12 h-12 flex items-center justify-center 
                            bg-white/20 rounded-full shadow-md
                          "
                        >
                          {item.icon}
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.title}
                      </h3>
                    </div>

                    {/* Arrow */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown size={26} className="text-gray-800" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                      >
                        <p className="mt-4 text-gray-700 leading-relaxed">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </SlideIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
