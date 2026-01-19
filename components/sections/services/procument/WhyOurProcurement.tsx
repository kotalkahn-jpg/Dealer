import { ShieldCheck, Eye, Users, TrendingUp } from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";

const reasons = [
  {
    title: "Transparency",
    description: "Clear pricing, documentation, and reporting.",
    icon: Eye,
  },
  {
    title: "Compliance-Oriented",
    description: "Aligned with institutional procurement standards.",
    icon: ShieldCheck,
  },
  {
    title: "Strong Supplier Network",
    description: "Trusted suppliers across key categories.",
    icon: Users,
  },
  {
    title: "Cost Efficiency",
    description: "Optimized sourcing without compromising quality.",
    icon: TrendingUp,
  },
];

export default function WhyOurProcurement() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
            Why Choose Us
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            A Reliable Procurement Partner
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <SlideUp key={item.title} delay={0.1 * index}>
                <div className="p-6 border rounded-xl">
                  <Icon className="w-6 h-6 text-indigo-700 mb-4" />
                  <h3 className="font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </SlideUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
