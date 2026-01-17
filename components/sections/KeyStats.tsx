import Counter from "@/components/animations/Counter";
import FadeIn from "@/components/animations/FadeIn";
import { CheckCircle, Truck, Leaf, Award } from "lucide-react";

export default function KeyStats() {
  const stats = [
    {
      label: "Years of Experience",
      value: 5,
      icon: <Award size={32} className="text-blue-200" />,
    },
    {
      label: "Deliveries Completed",
      value: 200,
      icon: <Truck size={32} className="text-blue-200" />,
    },
    {
      label: "Partnering Farms",
      value: 10,
      icon: <Leaf size={32} className="text-blue-200" />,
    },
    {
      label: "Client Satisfaction",
      value: 100,
      icon: <CheckCircle size={32} className="text-blue-200" />,
    },
  ];

  return (
    <section className="relative py-14 text-blue-400">

      {/* Background image */}
      <div className="absolute inset-0 backdrop-blur-none ">
        <img
          src="/keys.jpg"
          alt="Agriculture & Logistics Background"
          className="w-full h-full object-cover"
        />

        {/* Adjustable darkness + blur */}
        <div
          className="absolute inset-0 backdrop-blur-[1px]"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.12)", // <-- adjust darkness here
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 z-10">

        {stats.map((stat, index) => (
          <FadeIn delay={0.15 * index} key={index}>
            <div
              className="
                backdrop-blur-xl 
                bg-white/5 
                
                border border-white/30 
                shadow-xl 
                rounded-xl
                p-3
                flex flex-col items-center 
                transition-all duration-300 
                hover:bg-white/25
                hover:shadow-2xl
                hover:-translate-y-1
              "
            >
              {/* Icon */}
              <div
                className="
                  w-16 h-16 flex items-center justify-center 
                  bg-white/30 rounded-full 
                  shadow-sm mb-4
                "
              >
                {stat.icon}
              </div>

              {/* Counter */}
              <div className="relative text-white">
                <Counter
                  to={stat.value}
                  duration={2}
                  className="text-4xl md:text-5xl font-bold"
                />

                {stat.value < 100 && (
                  <span className="absolute -right-4 top-0 text-3xl font-bold">+</span>
                )}
              </div>

              <p className="mt-3 text-white/90 font-medium text-lg text-center">
                {stat.label}
              </p>
            </div>
          </FadeIn>
        ))}

      </div>
    </section>
  );
}
