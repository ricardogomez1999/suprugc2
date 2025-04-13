import { useTranslations } from "next-intl";
import React from "react";

export default function Speed() {
  const t = useTranslations("Speed");
  return (
    <div className="lg:col-span-2 lg:rounded-bl-4xl group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 shadow-xs ring-black/5 data-dark:bg-gray-800 data-dark:ring-white/15">
      <div className="relative h-80 shrink-0">
        <div className="h-80 bg-[url(/speed.png)] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0  group-data-dark:from-gray-800 group-data-dark:from-[-25%]"></div>
      </div>
      <div className="relative p-10">
        <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
          {t("Title")}
        </h3>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-dark:text-white">
          {t("Subtitle")}
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-dark:text-gray-400">
          {t("Description")}
        </p>
      </div>
    </div>
  );
}
