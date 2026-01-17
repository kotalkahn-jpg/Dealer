import { ShieldCheck, Award, ClipboardCheck } from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";

const points = [
  {
    title: "Quality Control",
    description: "Careful selection and inspection of commodities.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Standards",
    description: "Consistent supply that meets buyer expectations.",
    icon: ClipboardCheck,
  },
  {
    title: "Trusted Partnerships",
    description: "Strong relationships with farmers and buyers.",
    icon: Award,
  },
];

export default function QualityAssurance() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
            Quality & Trust
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Commitment to Quality
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {points.map((item, index) => {
            const Icon = item.icon;
            return (
              <SlideUp key={item.title} delay={0.1 * index}>
                <div className="p-6 border rounded-xl">
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
