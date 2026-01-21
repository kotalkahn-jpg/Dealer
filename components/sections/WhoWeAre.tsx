import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Car, Wheat, Globe, ShieldCheck } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SlideInLeft from "@/components/animations/SlideInLeft";
import SlideInRight from "@/components/animations/SlideInRight";
import WordReveal from "../animations/WordReveal";
import Floating from "../animations/Floating";



export default function WhoWeAre() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE TEXT */}
        <div>
          {/* Tag */}
          <FadeIn>
            <Floating>
          <span className="text-blue-600 font-semibold tracking-wide uppercase">
            About Our Company
          </span>
</Floating>

          {/* Header */}
          
          <WordReveal
  text="Who We Are"
  delay={0.2}
  duration={0.26}
  className="mt-3 text-4xl md:text-5xl font-bold leading-tight text-gray-900"
/>

         
          
          </FadeIn>

          {/* Subtitle */}
         <WordReveal
         text=" Daud’s General Dealers is a diversified Malawian company known for 
            high-quality agricultural commodities, reliable transport services, 
            and sustainable supply solutions. We proudly serve clients locally 
            and across the African region."
            delay={0.2}
            duration={0.16}
           className="mt-4 text-lg text-gray-700"
           />
          
      
          

          {/* Bullet Banner */}
          <SlideInLeft delay={0.2}>
<div className="relative mt-10">

  {/* Transparent Banner */}
  <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl shadow-lg p-6">
    
    {/* 2 Columns */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

      {/* Car — Transport */}
      <div className="flex items-center gap-3">
        <Car className="text-blue-600" size={26} />
        <p className="text-gray-800 text-lg">Reliable transport & logistics solutions</p>
      </div>

      {/* Wheat — Agriculture */}
      <div className="flex items-center gap-3">
        <Wheat className="text-blue-600" size={26} />
        <p className="text-gray-800 text-lg">High-quality agricultural commodities</p>
      </div>

      {/* Globe — Export */}
      <div className="flex items-center gap-3">
        <Globe className="text-blue-600" size={26} />
        <p className="text-gray-800 text-lg">Trusted supplier for exporters & organizations</p>
      </div>

      {/* ShieldCheck — Professionalism */}
      <div className="flex items-center gap-3">
        <ShieldCheck className="text-blue-600" size={26} />
        <p className="text-gray-800 text-lg">Committed to professional service delivery</p>
      </div>

    </div>

  </div>
  

  {/* Badge — Overlapping Circle */}
  <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-blue-600 shadow-xl flex items-center justify-center ring-4 ring-white">
    <ShieldCheck className="text-white" size={38} />
  </div>

</div>
</SlideInLeft>


          {/* CTA Button */}
          <FadeIn>
            <Floating>
          <div className="mt-8 flex ">
            <Link
              href="/contact"
               className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-medium ml-6"
            >
              Contact Our Team
            </Link>
          </div>
           </Floating>
          </FadeIn>
         
        </div>

       {/* RIGHT SIDE IMAGE STACK */}
<SlideInRight delay={0.3}>
  <Floating>
    <div className="relative w-full h-[460px]">

      {/* Image 1 — Back / Anchor */}
      <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-3xl overflow-hidden shadow-xl">
        <Image
          src="/who1.jpg"
          alt="Agriculture sourcing"
          fill
          className="object-cover"
        />
      </div>

      {/* Image 2 — Mid layer */}
      <div className="absolute top-10 right-0 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white">
        <Image
          src="/who2.jpg"
          alt="Logistics operations"
          fill
          className="object-cover"
        />
      </div>

      {/* Image 3 — Bottom left */}
      <div className="absolute bottom-0 left-12 w-[45%] h-[45%] rounded-3xl overflow-hidden shadow-xl ring-4 ring-white">
        <Image
          src="/farming.webp"
          alt="Farmers and cooperatives"
          fill
          className="object-cover"
        />
      </div>

      {/* Image 4 — Front / Highlight */}
      <div className="absolute bottom-10 right-20 w-[38%] h-[38%] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white">
        <Image
          src="/logistics.webp"
          alt="Bulk supply and transport"
          fill
          className="object-cover"
        />
      </div>

    </div>
  </Floating>
</SlideInRight>

        

      </div>
    </section>
  );
  
}
