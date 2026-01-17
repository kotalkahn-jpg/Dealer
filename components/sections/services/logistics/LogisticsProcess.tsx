import { ClipboardList, Truck, MapPin, CheckCircle } from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";

const steps = [
  {
    title: "Request & Planning",
    description:
      "We understand your cargo needs, timelines, and destination requirements.",
    icon: ClipboardList,
  },
  {
    title: "Pickup & Handling",
    description:
      "Goods are collected and handled professionally to ensure safety and quality.",
    icon: Truck,
  },
  {
    title: "Transport & Tracking",
    description:
      "Your cargo is transported efficiently with clear communication throughout.",
    icon: MapPin,
  },
  {
    title: "Delivery & Confirmation",
    description:
      "Timely delivery with confirmation and post-delivery support.",
    icon: CheckCircle,
  },
];

export default function LogisticsProcess() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            How It Works
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Our Logistics Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <SlideUp key={step.title} delay={0.1 * index}>
                <div className="relative bg-white p-6 rounded-xl shadow-sm">
                  <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <div className="mt-6">
                    <Icon className="w-6 h-6 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm">
                      {step.description}
                    </p>
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
