// app/services/[slug]/page.tsx

import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { services } from "@/lib/services";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";

// Logistics service sections
import LogisticsAudience from "@/components/sections/services/logistics/LogisticsAudience";
import LogisticsCargo from "@/components/sections/services/logistics/LogisticsCargo";
import LogisticsProcess from "@/components/sections/services/logistics/LogisticsProcess";
import LogisticsWhyUs from "@/components/sections/services/logistics/LogisticsWhyUs";
import LogisticsCTA from "@/components/sections/services/logistics/LogisticsCTA";
import CommoditiesAudience from "@/components/sections/services/commodities/CommoditiesAudience";
import CommoditiesCTA from "@/components/sections/services/commodities/CommoditiesCTA";
import CommoditiesProducts from "@/components/sections/services/commodities/CommoditiesProducts";
import QualityAssurance from "@/components/sections/services/commodities/QualityAssurance";
import SourcingProcess from "@/components/sections/services/commodities/SourcingProcess";
import ProcurementAudience from "@/components/sections/services/procument/ProcurementAudience";
import ProcurementCTA from "@/components/sections/services/procument/ProcurementCTA";
import ProcurementProcess from "@/components/sections/services/procument/ProcurementProcess";
import WhatWeProcure from "@/components/sections/services/procument/WhatWeProcure";
import WhyOurProcurement from "@/components/sections/services/procument/WhyOurProcurement";


// ----------------------
// Types
// ----------------------
type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// ----------------------
// Metadata (SEO)
// ----------------------
export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return {
      title: "Service | Daud's General Dealers",
      description: "Explore our agricultural and logistics services.",
    };
  }
console.log("SERVICE ID:", service.id);

  return {
    title: `${service.title} | Daud's General Dealers`,
    description: service.shortDescription,
    openGraph: {
      title: service.title,
      description: service.shortDescription,
      images: [{ url: service.bannerImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.shortDescription,
    },
  };
}

// ----------------------
// Page Component
// ----------------------
export default async function ServicePage(props: PageProps) {
  const { slug } = await props.params;
  const service = services.find((s) => s.id === slug);

  if (!service) return notFound();

  return (
    <ServiceDetailLayout service={service}>
      {/* ================= SERVICE-SPECIFIC SECTIONS ================= */}

      {service.id === "logistics" && (
        <>
          <LogisticsAudience />
          <LogisticsCargo />
          <LogisticsProcess />
          <LogisticsWhyUs />
          <LogisticsCTA />
        </>
      )}

      {/* Later you will add: */}
      {/*
      {service.id === "commodities" && <CommoditiesSections />}
      {service.id === "bulk-procurement" && <ProcurementSections />}
      */}

      {service.id === "commodities" && (
  <>
    <CommoditiesAudience />
    <CommoditiesProducts />
    <SourcingProcess />
    <QualityAssurance />
    <CommoditiesCTA />
  </>
)}

{service.id === "bulk-procurement" && (
  <>
    <ProcurementAudience />
    <WhatWeProcure />
    <ProcurementProcess />
    <WhyOurProcurement />
    <ProcurementCTA />
  </>
)}


    </ServiceDetailLayout>
  );
}
