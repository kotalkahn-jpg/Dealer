"use client";

import Image from "next/image";

export default function WhoWeServe() {
  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Who We Serve
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Trusted Across Sectors & Industries
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Our services support public institutions, development partners,
            businesses, and producers — delivering consistent value through
            reliable supply and logistics execution.
          </p>

          <button className="mt-8 inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            See who we work with
          </button>
        </div>

        {/* ================= RIGHT TILED GRID ================= */}
        <div className="grid grid-cols-2 gap-8 auto-rows-[180px]">

          {/* NGOs (tall) */}
          <div className="relative row-span-2 rounded-2xl overflow-hidden shadow-sm group">
            <Image
              src="/NGO.jpg"
              alt="NGOs & Development Partners"
              fill
              priority
              className="
                object-cover object-center
                scale-[0.92]
                transition-transform duration-500 ease-out
                group-hover:scale-105
              "
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-end p-6">
              <p className="text-white text-lg font-semibold">
                NGOs & Development Partners
              </p>
            </div>
          </div>

          {/* Government */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm group">
            <Image
              src="/government agencies.webp"
              alt="Government Agencies"
              fill
              className="
                object-cover object-center
                scale-[0.92]
                transition-transform duration-500 ease-out
                group-hover:scale-105
              "
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-end p-6">
              <p className="text-white text-lg font-semibold">
                Government Agencies
              </p>
            </div>
          </div>

          {/* Businesses */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm group">
            <Image
              src="/wasds.webp"
              alt="Businesses & Corporations"
              fill
              className="
                object-cover object-center
                scale-[0.92]
                transition-transform duration-500 ease-out
                group-hover:scale-105
              "
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-end p-6">
              <p className="text-white text-lg font-semibold">
                Businesses & Corporations
              </p>
            </div>
          </div>

          {/* ================= BOTTOM CLUSTER ================= */}
          <div className="col-span-2 grid grid-cols-2 gap-8 mt-4">

            {/* Farmers */}
            <div className="relative row-span-2 rounded-2xl overflow-hidden shadow-sm group">
              <Image
                src="/The-Role-of-Cooperatives-in-Agricultural-Economics-Benefits-and-Challenges.jpeg"
                alt="Farmers & Cooperatives"
                fill
                className="
                  object-cover object-center
                  scale-[0.92]
                  transition-transform duration-500 ease-out
                  group-hover:scale-105
                "
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-end p-6">
                <p className="text-white text-lg font-semibold">
                  Farmers & Cooperatives
                </p>
              </div>
            </div>

            {/* Institutions (tall) */}
            <div className="relative row-span-2 rounded-2xl overflow-hidden shadow-sm group">
              <Image
                src="/organization-vs-institution.jpg"
                alt="Institutions & Organizations"
                fill
                className="
                  object-cover object-center
                  scale-[0.92]
                  transition-transform duration-500 ease-out
                  group-hover:scale-105
                "
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-end p-6">
                <p className="text-white text-lg font-semibold">
                  Institutions & Organizations
                </p>
              </div>
            </div>

            {/* Exporters */}
            <div className="relative row-span-2 rounded-2xl overflow-hidden shadow-sm group">
              <Image
                src="/Export_Trading_Company_e0521f1c7a.png"
                alt="Exporters & Traders"
                fill
                className="
                  object-cover object-center
                  scale-[0.92]
                  transition-transform duration-500 ease-out
                  group-hover:scale-105
                "
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-end p-6">
                <p className="text-white text-lg font-semibold">
                  Exporters & Traders
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
