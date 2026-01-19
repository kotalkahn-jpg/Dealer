    import { Building2, Landmark, Hospital, GraduationCap } from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";

const audiences = [
  {
    title: "NGOs & Development Organizations",
    description: "Procurement support for projects, programs, and field operations.",
    icon: Building2,
  },
  {
    title: "Government & Public Institutions",
    description: "Structured procurement aligned with institutional requirements.",
    icon: Landmark,
  },
  {
    title: "Hospitals & Health Facilities",
    description: "Bulk sourcing of essential supplies and consumables.",
    icon: Hospital,
  },
  {
    title: "Schools & Training Institutions",
    description: "Reliable procurement for feeding programs and operations.",
    icon: GraduationCap,
  },
];

export default function ProcurementAudience() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
            Who We Serve
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Procurement for Institutions & Organizations
          </h2>
          <p className="mt-4 text-gray-600">
            We support organizations that require reliable, transparent, and
            well-coordinated bulk procurement solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <SlideUp key={item.title} delay={0.08 * index}>
                <div className="p-6 bg-white border rounded-xl">
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
