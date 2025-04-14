import { useTranslations } from "next-intl";
import React from "react";

export default function Title() {
  const t = useTranslations("TitleCompany");
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl">
      <h1 className="text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
        {t("Title")}
      </h1>
      <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
        {t("Subtitle")}
      </p>
    </div>
  );
}
