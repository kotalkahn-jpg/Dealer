import { ShieldCheck, Clock, Users, TrendingUp } from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";

const reasons = [
  {
    title: "Reliable & Secure",
    description: "We prioritize cargo safety and dependable service delivery.",
    icon: ShieldCheck,
  },
  {
    title: "Timely Deliveries",
    description: "Efficient planning ensures goods arrive on schedule.",
    icon: Clock,
  },
  {
    title: "Client-Focused",
    description: "We tailor solutions to meet each client’s unique needs.",
    icon: Users,
  },
  {
    title: "Proven Experience",
    description: "A growing track record in logistics and commodity transport.",
    icon: TrendingUp,
  },
];

export default function LogisticsWhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Why Choose Us
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Trusted Logistics Partner
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <SlideUp key={item.title} delay={0.1 * index}>
                <div className="p-6 border rounded-xl">
                  <Icon className="w-6 h-6 text-blue-600 mb-4" />
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
