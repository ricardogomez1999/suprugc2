"use client";

import React from "react";
import Card from "./Card";
import pricesPackages from "@/src/Data/pricesEn";
import BrandsBanner from "../home/BrandsBanner";
import { useParams } from "next/navigation";
import pricesPackagesES from "@/src/Data/pricesES";

export default function PricingCards() {
  const { locale } = useParams();

  return (
    <div className="relative py-24">
      <div className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset bg-linear-115 from-[#b6e0f4] from-28% via-[#284F77] via-70% to-[#284F77] sm:bg-linear-145"></div>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {locale === "es"
              ? pricesPackagesES.map((card, index) => (
                  <Card card={card} key={index} />
                ))
              : pricesPackages.map((card, index) => (
                  <Card card={card} key={index} />
                ))}
          </div>
        </div>
        <BrandsBanner />
      </div>
    </div>
  );
}
