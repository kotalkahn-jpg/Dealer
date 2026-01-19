import Link from "next/link";

export default function LogisticsCTA() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Need Reliable Transport & Logistics?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-white/90">
          Let’s discuss how we can support your logistics needs with dependable,
          professional service.
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
  );
}
