import { Building2, Globe, Warehouse, Users } from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";

const audiences = [
  {
    title: "NGOs & Aid Organizations",
    description: "Reliable supply of staple foods for programs and relief efforts.",
    icon: Building2,
  },
  {
    title: "Bulk Buyers & Institutions",
    description: "Consistent volumes for schools, hospitals, and organizations.",
    icon: Warehouse,
  },
  {
    title: "Exporters & Traders",
    description: "Quality commodities suitable for regional and export markets.",
    icon: Globe,
  },
  {
    title: "Local Markets & Individuals",
    description: "Accessible supply for traders and individual buyers.",
    icon: Users,
  },
];

export default function CommoditiesAudience() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
            Who We Supply
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Serving Buyers Across the Supply Chain
          </h2>
          <p className="mt-4 text-gray-600">
            We supply agricultural commodities to a wide range of buyers, ensuring
            reliability, transparency, and consistent quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <SlideUp key={item.title} delay={0.08 * index}>
                <div className="p-6 bg-white border rounded-xl">
                  <Icon className="w-6 h-6 text-green-700 mb-4" />
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
