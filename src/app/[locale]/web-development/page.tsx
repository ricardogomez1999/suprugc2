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
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {[
            {
              title: t("LandingTitle"),
              price: t("LandingPrice"),
              description: t("LandingDescription"),
            },
            {
              title: t("InfoTitle"),
              price: t("InfoPrice"),
              description: t("InfoDescription"),
            },
            {
              title: t("WebAppTitle"),
              price: t("WebAppPrice"),
              description: t("WebAppDescription"),
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-3xl bg-white p-8 ring-1 ring-black/5 shadow-md data-dark:bg-gray-800 data-dark:ring-white/15"
            >
              <h3 className="text-xl font-medium text-gray-950 data-dark:text-white">
                {card.title}
              </h3>
              <p className="mt-2 text-3xl font-semibold text-gray-950 data-dark:text-white">
                {card.price}
              </p>
              <p className="mt-2 text-sm text-gray-600 data-dark:text-gray-400">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
