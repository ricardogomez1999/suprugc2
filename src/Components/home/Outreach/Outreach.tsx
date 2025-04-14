import React from "react";
import Networking from "./Networking";
import Integration from "./Integration";
import Meeting from "./Meeting";
import Engagement from "./Engagement";
import { useTranslations } from "next-intl";

export default function Outreach() {
  const t = useTranslations("Outreach");
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-[#284F77] py-32">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h2
            data-dark="true"
            className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400"
          >
            {t("Title")}
          </h2>
          <h3
            data-dark="true"
            className="mt-2 max-w-3xl text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl"
          >
            {t("Subtitle")}
          </h3>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            <Networking />
            <Integration />
            <Meeting />
            <Engagement />
          </div>
        </div>
      </div>
    </div>
  );
}
