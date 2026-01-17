import { FileText, Search, ClipboardCheck, Truck } from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";

const steps = [
  {
    title: "Requirement Definition",
    description: "Understanding specifications, quantities, and timelines.",
    icon: FileText,
  },
  {
    title: "Sourcing & Verification",
    description: "Identifying reliable suppliers and verifying quality.",
    icon: Search,
  },
  {
    title: "Procurement & Coordination",
    description: "Managing purchasing, documentation, and approvals.",
    icon: ClipboardCheck,
  },
  {
    title: "Delivery & Reporting",
    description: "Timely delivery with clear reporting and accountability.",
    icon: Truck,
  },
];

export default function ProcurementProcess() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
            How It Works
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Our Procurement Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <SlideUp key={step.title} delay={0.1 * index}>
                <div className="bg-white p-6 rounded-xl border">
                  <Icon className="w-6 h-6 text-indigo-700 mb-4" />
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
