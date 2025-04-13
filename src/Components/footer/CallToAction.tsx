import { useTranslations } from "next-intl";
import React from "react";

export default function CallToAction() {
  const t = useTranslations("Footer");
  return (
    <div className="relative pt-20 pb-16 text-center sm:py-24">
      <hgroup>
        <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
          {t("FooterCTA")}
        </h2>
        <p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
          {t("GetStarted")}
          <br />
          {t("StartFreeTrial")}
        </p>
      </hgroup>
      <p className="mx-auto mt-6 max-w-xs text-sm/6 text-gray-500">
        {t("Cheat")}
      </p>
      <div className="mt-6">
        <a
          className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)] rounded-full border border-transparent bg-gray-950 shadow-md text-base font-medium whitespace-nowrap text-white data-disabled:bg-gray-950 data-disabled:opacity-40 data-hover:bg-gray-800"
          data-headlessui-state=""
          href="#"
        >
          Get started
        </a>
      </div>
    </div>
  );
}
