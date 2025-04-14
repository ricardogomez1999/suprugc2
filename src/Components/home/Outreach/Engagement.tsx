import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Engagement() {
  const t = useTranslations("Engagement");
  return (
    <div
      data-dark="true"
      className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 shadow-xs ring-black/5 data-dark:bg-gray-800 data-dark:ring-white/15"
    >
      <div className="relative h-80 shrink-0">
        <div aria-hidden="true" className="relative h-full overflow-hidden">
          <div className="absolute inset-0 top-8 z-10 flex items-center justify-center">
            <Image
              src={"/engagement.png"}
              alt="integration"
              width={500}
              height={200}
            />
          </div>
        </div>
      </div>
      <div className="relative p-10">
        <h3
          data-dark="true"
          className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400"
        >
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
