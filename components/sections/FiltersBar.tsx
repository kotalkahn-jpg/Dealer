import Link from "next/link";
import { Wheat, Truck, Utensils } from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";


export default function FiltersBar() {
 
  const items = [
    {

      title: "Agricultural Products",
      icon: <Wheat size={30} />,
      href: "/services/",
    },
    
    {
    
      title: "Transport & Car Hire",
      icon: <Truck size={30} />,
      href: "/services/",
      
    },
    {
      title: "Food Supply",
      icon: <Utensils size={30} />,
      href: "/services/",
    },
   
  ];
   

 return (
  <SlideUp delay={0.2}>
    <div className="relative -mt-6 z-30 hidden md:block">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap gap-4 justify-end">

        {items.map((item, index) => (
          <SlideUp delay={0.3 + index * 0.1} key={index}>
            <Link
              href={item.href}
              className="
                group relative flex items-center gap-3 px-8 py-5
                bg-white shadow-lg rounded-md
                border border-gray-200 cursor-pointer
                transition-all duration-200
                hover:shadow-xl max-w-[260px]
              "
              style={{
                clipPath:
                  "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)",
              }}
            >
              <div className="text-blue-600 group-hover:scale-110 transition">
                {item.icon}
              </div>
              <span className="font-semibold text-gray-800 text-sm group-hover:text-blue-600">
                {item.title}
              </span>
            </Link>
          </SlideUp>
        ))}

      </div>
    </div>
  </SlideUp>
);

}
