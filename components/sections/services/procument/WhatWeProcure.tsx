import { Boxes, Wheat, Package, ShieldCheck } from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";

const categories = [
  {
    title: "Agricultural Commodities",
    description:
      "Structured procurement of staple crops such as maize, beans, and rice — aligned with quality standards and bulk requirements.",
    icon: Wheat,
  },
  {
    title: "General Operational Supplies",
    description:
      "Procurement of essential institutional and operational goods that support large-scale organizational functions.",
    icon: Package,
  },
  {
    title: "Bulk Consumables & Materials",
    description:
      "Efficient sourcing of high-volume consumable items to ensure continuity of supply with cost-effective strategies.",
    icon: Boxes,
  },
  {
    title: "Verified & Compliance-Ready Items",
    description:
      "Items and services aligned with organizational compliance, quality assurance, and procurement policy requirements.",
    icon: ShieldCheck,
  },
];

export default function WhatWeProcure() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
            Procurement Strategy
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            What We Procure & Why It Matters
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We organize procurement into strategic categories that drive efficiency,
            cost savings, and value creation across organizational spend. Well-defined
            procurement categories streamline supplier engagement, reduce risks,
            and improve spend visibility.
          </p>
        </div>

        {/* Zig-zag list */}
        <div className="space-y-10">

          {categories.map((item, index) => {
            const Icon = item.icon;
            const isRight = index % 2 !== 0;

            return (
              <SlideUp key={item.title} delay={0.12 * index}>
                <div
                  className={`flex ${
                    isRight ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`
                      w-full md:w-[70%]
                      rounded-2xl
                      border border-white/40
                      bg-white/60
                      backdrop-blur-xl
                      shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                      px-8 py-10
                      ${isRight ? "md:ml-24" : "md:mr-24"}
                    `}
                  >
                    <div className="flex items-start gap-6">

                      {/* Icon */}
                      <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-indigo-600/10 text-indigo-700 flex items-center justify-center">
                        <Icon className="w-8 h-8" />
                      </div>

                      {/* Text */}
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-gray-700 leading-relaxed text-lg">
                          {item.description}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </SlideUp>
            );
          })}

        </div>

      </div>
    </section>
  );
}
