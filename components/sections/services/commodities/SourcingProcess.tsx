import { Sprout, Users, Warehouse, CheckCircle } from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";

const steps = [
  {
    title: "Farmer Engagement",
    description: "We work directly with local farmers and producer groups.",
    icon: Sprout,
  },
  {
    title: "Aggregation",
    description: "Produce is collected and aggregated to meet buyer volumes.",
    icon: Users,
  },
  {
    title: "Storage & Handling",
    description: "Proper handling and storage to maintain quality.",
    icon: Warehouse,
  },
  {
    title: "Supply & Delivery",
    description: "Reliable delivery to buyers and partner organizations.",
    icon: CheckCircle,
  },
];

export default function SourcingProcess() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
            How We Source
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            From Farm to Buyer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <SlideUp key={step.title} delay={0.1 * index}>
                <div className="bg-white p-6 rounded-xl border">
                  <Icon className="w-6 h-6 text-green-700 mb-4" />
                  <h3 className="font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {step.description}
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
