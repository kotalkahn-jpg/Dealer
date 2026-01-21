// lib/services.ts

export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: "truck" | "wheat" | "boxes";
  image: string;
  bannerImage: string;
};

export const services: Service[] = [

  {
    id: "commodities",
    title: "Agricultural Commodities Supply",
    shortDescription:
      "We source, aggregate, and supply high-quality maize, beans, rice, and more.",
    longDescription:
      "Daud's General Dealers connects buyers with trusted farmers...",
    icon: "wheat",
    image: "/services/commodities.jpg",
    bannerImage: "/services/commodities-banner.jpg",
  },
  
  {
    id: "logistics",
    title: "Transport & Logistics",
    shortDescription:
      "Reliable transport services for businesses, NGOs, and agricultural supply chains.",
    longDescription:
      "We provide dependable logistics solutions for short and long-haul routes...",
    icon: "truck",
    image: "/services/logistics.jpg",
    bannerImage: "/services/logistics-banner.webp",
  },
  


  {
    id: "bulk-procurement",
    title: "Bulk Procurement & Supply",
    shortDescription:
      "Coordinated large-scale purchasing for institutions and organizations.",
    longDescription:
      "We help organizations procure commodities in bulk with transparency...",
    icon: "boxes",
    image: "/services/procurement.webp",
    bannerImage: "/services/procurement-banner.jpeg",
  },
];
