import { Building2, Landmark, Briefcase, Tractor, Ship, Users } from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";

const audiences = [
  {
    title: "NGOs & Development Organizations",
    description:
      "Reliable logistics support for humanitarian aid, development projects, and field operations.",
    icon: Building2,
  },
  {
    title: "Government Agencies",
    description:
      "Secure and compliant transport for public-sector programs and national initiatives.",
    icon: Landmark,
  },
  {
    title: "Businesses & Corporations",
    description:
      "Efficient logistics solutions for supply chains, distribution, and commercial operations.",
    icon: Briefcase,
  },
  {
    title: "Farmers & Aggregators",
    description:
      "Timely transport of agricultural produce from farms to markets and warehouses.",
    icon: Tractor,
  },
  {
    title: "Exporters & Traders",
    description:
      "Dependable logistics for export-ready goods, bulk cargo, and cross-border trade.",
    icon: Ship,
  },
  {
    title: "Individuals",
    description:
      "Safe and dependable transport solutions for personal and small-scale needs.",
    icon: Users,
  },
];

export default function LogisticsAudience() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Who We Serve
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Logistics Solutions for Every Sector
          </h2>
          <p className="mt-4 text-gray-600">
            Our transport and logistics services are designed to support a wide
            range of clients, from institutions to individuals.
          </p>
        </div>

        {/* Audience cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <SlideUp key={item.title} delay={0.08 * index}>
                <div
                  className="
                    h-full rounded-xl border border-gray-200 bg-white
                    p-6 shadow-sm transition-all duration-300
                    hover:-translate-y-1 hover:shadow-lg
                  "
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
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
