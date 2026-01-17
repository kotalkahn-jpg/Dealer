import Link from "next/link";

export default function CommoditiesCTA() {
  return (
    <section className="py-20 bg-green-700 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Looking for Reliable Agricultural Supply?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-white/90">
          Get in touch with us to discuss your commodity requirements and volumes.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block bg-white text-green-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
