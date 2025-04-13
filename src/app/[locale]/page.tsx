"use client";

import { useTranslations } from "next-intl";
import Head from "next/head";
import Header from "@/src/Components/Header";
import Hero from "@/src/Components/Hero";
import BrandsBanner from "@/src/Components/home/BrandsBanner";
import OurOffer from "@/src/Components/home/OurOffer";
import Outreach from "@/src/Components/home/Outreach/Outreach";
import Portfolio from "@/src/Components/home/Portfolio/Portfolio";

export default function Home() {
  const t = useTranslations("Hero");

  return (
    <>
      <Head>
        <title>{t("HeroTitle")}</title>
        <meta name="HeroDescription" content={t("HeroDescription")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="overflow-hidden bg-white">
        <div className="relative">
          <div className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset bg-linear-120 from-[#b6e0f4] from-25% via-[#284F77] via-70% to-[#284F77] sm:bg-linear-150 "></div>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
              <Header />
              <Hero />
            </div>
          </div>
        </div>
        <main>
          <BrandsBanner />
          <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
            <OurOffer />
            <Portfolio />
          </div>
          <Outreach />
        </main>
      </div>
    </>
  );
}
