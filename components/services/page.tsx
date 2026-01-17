// app/services/page.tsx
import ServicesSection from "@/components/sections/ServicesSection";

export const metadata = {
  title: "Services | Daud's General Dealers",
  description:
    "Explore our services — Transport & Logistics, Agricultural Commodities Supply, and Bulk Procurement.",
};

export default function ServicesIndexPage() {
  return (
    <main>
      <section className="py-20 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
          <p className="mt-3 text-gray-600">
            Explore the full range of solutions we provide for organizations, farmers, and businesses across Malawi.
          </p>
        </div>
      </section>

      <ServicesSection />
    </main>
  );
}
