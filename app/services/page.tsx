import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";
import { Truck, Wheat, Boxes, ArrowRight } from "lucide-react";

const iconMap = {
  truck: Truck,
  wheat: Wheat,
  boxes: Boxes,
};

export default function ServicesIndexPage() {
  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Our Services
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
            End-to-End Supply & Logistics Solutions
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-lg">
            We provide reliable transport, agricultural commodity supply, and
            structured bulk procurement services to organizations, businesses,
            and individuals.
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service) => {
              const Icon = iconMap[service.icon];

              return (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="
                    group flex flex-col h-full
                    border rounded-xl overflow-hidden
                    transition-all duration-300
                    hover:shadow-lg hover:-translate-y-1
                  "
                >
                  {/* Image */}
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1 bg-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 flex-1">
                      {service.shortDescription}
                    </p>

                    <div className="mt-6 inline-flex items-center text-blue-600 font-medium">
                      <span>View service details</span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Why Choose Us
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              A Reliable Partner You Can Trust
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold text-gray-900">
                Reliable & Professional
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                We deliver consistent, dependable services built on experience
                and professionalism.
              </p>
            </div>

            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold text-gray-900">
                End-to-End Solutions
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                From sourcing and procurement to transport and delivery, we
                manage the entire process.
              </p>
            </div>

            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold text-gray-900">
                Client-Focused Approach
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                We tailor our services to meet the unique needs of each client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Not Sure Which Service You Need?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/90">
            Get in touch with our team and we’ll help you choose the right
            solution for your needs.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
