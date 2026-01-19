import Link from "next/link";

export default function ProcurementCTA() {
  return (
    <section className="py-20 bg-indigo-700 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Need Structured Bulk Procurement?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-white/90">
          Let’s help you source and coordinate bulk supplies efficiently and transparently.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
