import Image from "next/image";
import SlideUp from "@/components/animations/SlideUp";

const cargo = [
  {
    title: "Agricultural Produce",
    description:
      "Maize, beans, rice, groundnuts, and other farm produce handled with care from source to destination.",
    image: "/logistics.webp",
  },
  {
    title: "Bulk & Commercial Goods",
    description:
      "Large-scale and commercial cargo including packaged goods, relief supplies, and institutional consignments.",
    image: "/stock.jpg",
  },
];

export default function LogisticsCargo() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        {cargo.map((item, index) => (
          <SlideUp key={item.title}>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-72 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                  What We Transport
                </p>
                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  {item.title}
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </SlideUp>
        ))}
      </div>
    </section>
  );
}
