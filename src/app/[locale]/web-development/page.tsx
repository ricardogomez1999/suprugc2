import Header from "@/src/Components/Header";
import { useTranslations } from "next-intl";
import React from "react";

export default function WebDevelopmentPage() {
  const t = useTranslations("WebDevelopmentPage");
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <Header />
          </div>
        </div>
      </div>
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
  );
}
