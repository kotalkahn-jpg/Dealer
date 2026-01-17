import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import SlideInLeft from "@/components/animations/SlideInLeft";
import SlideUp from "@/components/animations/SlideUp";

export default function Hero() {
  return (
    
    <section className="relative w-full h-[85vh] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg" // <-- replace with your image filename
          alt="Agriculture and Logistics"
          fill
          priority
          className="object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-14 max-w-3xl">

       {/* Tagline */}
  <FadeIn delay={0.1}>
    <span className="text-blue-300 font-medium tracking-wider uppercase text-sm md:text-base">
      Delivering Quality & Reliability
    </span>
  </FadeIn>

        {/* Main Heading */}
  <SlideInLeft delay={0.2}>
    <h1 className="mt-3 text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
      Agriculture & Logistics Services  
      <br />
      You Can Rely On.
    </h1>
  </SlideInLeft>

        {/* Subtitle */}
  <SlideUp delay={0.35}>
    <p className="mt-5 text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow">
      Trusted by farmers, exporters, and organizations across Malawi.  
      We provide high-quality agricultural commodities and dependable transport solutions.
    </p>
  </SlideUp>

        {/* Buttons */}
  <SlideInLeft delay={0.5}>
    <div className="mt-8 flex gap-4">
      <Link
        href="/services"
        className="
          px-7 py-3 
          bg-blue-600 
          hover:bg-blue-700 
          text-white 
          font-semibold 
          text-lg 
          rounded-lg 
          shadow-md 
          hover:shadow-lg 
          transition-all 
          duration-200
        "
      >
        Explore Services →
      </Link>

      <Link
        href="/contact"
        className="
          px-7 py-3 
          bg-white/90 
          text-gray-900 
          font-semibold 
          text-lg 
          rounded-lg 
          shadow-md
          hover:bg-white
          hover:shadow-lg
          transition-all 
          duration-200
        "
      >
        Contact Us
      </Link>
    </div>
  </SlideInLeft>

      </div>

    </section>
    
  );
}

