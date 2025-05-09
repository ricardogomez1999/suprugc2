import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function OurOffer() {
  const t = useTranslations("About");
  return (
    <div className="overflow-hidden">
      <div className="pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h2 className="max-w-3xl text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
            {t("Discover")}
          </h2>
          <div
            className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem] relative aspect-[var(--width)/var(--height)] [--radius:var(--radius-xl)]"
            style={{ width: 1216, height: 790 }}
          >
            <div className="absolute -inset-[var(--padding)] rounded-[calc(var(--radius)+var(--padding))] ring-1 shadow-xs ring-black/5 [--padding:--spacing(2)]"></div>
            <Image
              src="/offer.svg"
              className=" bg-cover rounded-[var(--radius)] ring-1 shadow-2xl ring-black/10"
              alt="image offer"
              width={2000}
              height={2000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
