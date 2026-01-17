"use client";

import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative py-10 bg-gradient-to-br from-blue-600 to-blue-700 overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-black/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        {/* Headline */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          Let’s Build a Reliable Supply & Logistics Partnership
        </h2>

        {/* Supporting text */}
        <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-white/90 leading-relaxed">
          Whether you’re a government agency, NGO, business, farmer, or exporter,
          we deliver dependable logistics, structured procurement, and
          quality-driven supply solutions you can trust.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-blue-700 font-semibold text-base hover:bg-gray-100 transition"
          >
            Request Our Services
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/40 text-white font-semibold text-base hover:bg-white/10 transition"
          >
            Explore Our Services
          </Link>
        </div>

        {/* Trust micro-copy */}
        <p className="mt-6 text-sm text-white/80">
          Trusted by organizations across agriculture, trade, development, and
          public service.
        </p>
      </div>
    </section>
  );
}
