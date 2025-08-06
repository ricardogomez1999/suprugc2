import Header from "@/src/Components/Header";
import { useTranslations } from "next-intl";
import React from "react";

export default function DigitalizationPage() {
  const t = useTranslations("DigitalizationPage");
  return (
    <div className="overflow-hidden bg-white">
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
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="mt-16 mb-20 px-6 lg:px-8">
          <h1 className="text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
            {t("Title")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-600 data-dark:text-gray-400">
            {t("Description")}
          </p>
          <p className="mt-4 max-w-3xl text-lg text-gray-600 data-dark:text-gray-400">
            {t("Pricing")}
          </p>
        </div>
      </div>
    </div>
  );
}
