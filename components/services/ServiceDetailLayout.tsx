"use client";

import Image from "next/image";
import { Service } from "@/lib/services";
import { Truck, Wheat, Boxes } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import type { ReactNode } from "react";
import { ShieldCheck, Clock, DollarSign, Settings } from "lucide-react";
import { motion } from "framer-motion";
const iconMap = {
  truck: Truck,
  wheat: Wheat,
  boxes: Boxes,
};

type Props = {
  service: Service;
  children?: ReactNode;
};

export default function ServiceDetailLayout({
  service,
  children,
}: Props) {
  const Icon = iconMap[service.icon];

  return (
    <main className="min-h-screen bg-white">
      {/* ================= HERO / BANNER ================= */}
      <section className="relative w-full h-[380px] md:h-[420px] overflow-hidden">
        <Image
          src={service.bannerImage}
          alt={service.title}
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
          <div className="text-white w-full">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: service.title },
              ]}
            />

            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
              {service.title}
            </h1>

            <p className="mt-4 max-w-3xl text-lg md:text-xl text-white/90">
              {service.shortDescription}
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute right-8 bottom-6 hidden md:flex">
          <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur flex items-center justify-center shadow-lg">
            <Icon className="w-12 h-12 text-white/80" />
          </div>
        </div>
      </section>

    {/* ================= OVERVIEW ================= */}
<section id="overview" className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

    {/* LEFT — Narrative */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
        Service Overview
      </p>

      <h2 className="mt-3 text-3xl font-bold text-gray-900">
        Reliable & Professional {service.title}
      </h2>

      <p className="mt-6 text-gray-700 leading-relaxed text-lg">
        {service.longDescription}
      </p>
    </motion.div>

    {/* RIGHT — Highlights */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-white border rounded-xl p-8 shadow-sm"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-8">
        What We Provide
      </h3>

      <ul className="space-y-6">
        {[
          {
            icon: ShieldCheck,
            text: "Professional handling and secure transport of goods",
          },
          {
            icon: Clock,
            text: "Timely deliveries with optimized route planning",
          },
          {
            icon: DollarSign,
            text: "Transparent pricing and clear communication throughout",
          },
          {
            icon: Settings,
            text: "Custom logistics solutions for organizations and bulk buyers",
          },
        ].map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 * index }}
              className="flex items-start gap-4"
            >
              <div className="mt-1 w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>

              <p className="text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>

  </div>
</section>



      {/* ================= SERVICE-SPECIFIC SECTIONS ================= */}
      {children}
    </main>
  );
}
