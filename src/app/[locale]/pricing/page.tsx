import Header from "@/Components/Header";
import Faqs from "@/Components/pricing/Faqs";
import type { Metadata } from "next";
import PricingBanner from "@/Components/pricing/PricingBanner";
import PricingCards from "@/Components/pricing/PricingCards";
import Title from "@/Components/pricing/Title";
import React from "react";

export const metadata: Metadata = {
  title: "Pricing - SupruGC",
  description: "SupruGC AI solutions company",
};

export default function layout() {
  return (
    <div className=" overflow-hidden bg-white">
      <div className="relative">
        <div className="relative mx-auto max-w-7xl">
          <div className="absolute -top-44 -right-60 h-60 w-[36rem] transform-gpu md:right-0 bg-linear-115 from-[#b6e0f4] from-28% via-[#284F77] via-70% to-[#284F77] rotate-[-10deg] rounded-full blur-3xl"></div>
        </div>
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <Header />
          </div>
        </div>
      </div>

      <div className="mt-16  mb-20 px-6 lg:px-8">
        <Title />
        <PricingCards />
        <Faqs />
        <PricingBanner />
      </div>
    </div>
  );
}
