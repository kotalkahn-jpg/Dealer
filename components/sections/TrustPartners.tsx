"use client";

import Image from "next/image";

const partners : {
  name: string;
  logo: string;
}[] =[
  {
    name: "world bank",
    logo: "partners/world bank.png",
  },
  {
    name: "Partner",
    logo: "partners/partner.jpg",
  },
  {
    name: "FAO",
    logo: "partners/rec-logo.jpg",
  },
  
];

{partners.map((partner) =>(
  <div
  key={partner.name}
  className="flex items-center justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
  >
  <image
  src={partner.logo}
  alt={partner.name}
  width={140}
  height={100}
  className="object-contain"
  />
  </div>
))}




export default function TrustPartners() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Trusted By
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Organizations & Partners We Work With
          </h2>
        </div>

        {/* Marquee */}
        <div className="relative">
          <div className="flex gap-20 animate-marquee hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[200px]"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  unoptimized
                  className="object-contain opacity-90 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </section>
  );
}
