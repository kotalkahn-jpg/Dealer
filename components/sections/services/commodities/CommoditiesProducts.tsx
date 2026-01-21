"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SlideInLeft from "@/components/animations/SlideInLeft";
const products = [
  {
    name: "Maize",
    image: "/services/commodities-maize.jpg",
    description:
      "High-quality maize sourced from trusted local farmers, suitable for food processing and bulk supply.",
  },
  {
    name: "Beans",
    image: "/services/commodities-beans.jpg",
    description:
      "Clean, well-graded beans supplied in bulk for institutions, exporters, and commercial buyers.",
  },
  {
    name: "Rice",
    image: "/services/commodities-rice.jpg",
    description:
      "Locally and regionally sourced rice, carefully handled to meet quality standards.",
  },
];

export default function CommoditiesProducts() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [flipped, setFlipped] = useState<boolean[]>(
    new Array(products.length).fill(false)
  );
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Scroll-based flip ONLY on mobile
  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setFlipped((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Products
          </p>
          <SlideInLeft>
          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            Agricultural Commodities We Supply
          </h2>
          </SlideInLeft>
          
          <p className="mt-4 text-gray-600 text-lg">
            We supply carefully sourced agricultural commodities to meet the
            needs of organizations, exporters, and bulk buyers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div
              key={product.name}
              ref={(el) => {
  cardRefs.current[index] = el;
}}

              data-index={index}
              className="relative h-80 perspective"
              onClick={() => {
                if (isMobile) {
                  setFlipped((prev) => {
                    const next = [...prev];
                    next[index] = !next[index];
                    return next;
                  });
                }
              }}
            >
              <div
                className={`
                  relative w-full h-full transition-transform duration-700
                  transform-style-preserve-3d
                  ${flipped[index] ? "rotate-y-180" : ""}
                  md:hover:rotate-y-180
                `}
              >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-0 p-5 text-white">
                    <h3 className="text-xl font-semibold">
                      {product.name}
                    </h3>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-white border shadow-md p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                  <p className="mt-4 text-sm font-medium text-blue-600">
                    Available for bulk supply
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Helpers */}
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .md\\:hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
