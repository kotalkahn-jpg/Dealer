"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Truck, Wheat, Boxes } from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";
import type { ReactNode } from "react";


type ServiceApi = {
  id: string;
  title: string;
  shortDescription: string;
  icon: "truck" | "wheat" | "boxes";
  image: string;
  bannerImage: string; 
};

const iconMap: Record<ServiceApi["icon"], ReactNode> = {
  truck: <Truck className="w-7 h-7 text-blue-600" />,
  wheat: <Wheat className="w-7 h-7 text-blue-600" />,
  boxes: <Boxes className="w-7 h-7 text-blue-600" />,
};

export default function ServicesSection() {
  const [services, setServices] = useState<ServiceApi[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch("/api/services");
        if (!res.ok) throw new Error("Failed to fetch services");
        const data = await res.json();
        setServices(data);
      } catch (err) {
        console.error("Error loading services:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
            What We Offer
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Our Core Services
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We integrate agriculture, logistics, and bulk procurement expertise to
            support organizations, farmers, and businesses with reliable, end-to-end solutions.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading services...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <SlideUp delay={0.1 * index} key={service.id}>
                <Link
                  href={`/services/${service.id}`}
                  className="
                    group flex flex-col h-full
                    rounded-xl border border-gray-200 bg-white 
                    shadow-sm hover:shadow-md 
                    transition-all duration-200 
                    hover:-translate-y-1
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                  "
                >
                  {/* Image */}
                  <div className="h-40 w-full overflow-hidden rounded-t-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Text content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center">
                        {iconMap[service.icon]}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 flex-1">
                      {service.shortDescription}
                    </p>

                    <div className="mt-5 flex items-center text-blue-600 font-medium">
                      <span>View service details</span>
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </SlideUp>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
