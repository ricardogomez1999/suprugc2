import { useTranslations } from "next-intl";
import React from "react";

export default function TeamText() {
  const t = useTranslations("Team");
  return (
    <div className="max-w-lg">
      <p className="text-sm/6 text-gray-600">{t("About")}</p>
      <p className="mt-8 text-sm/6 text-gray-600">{t("Why")}</p>
      <div className="mt-6">
        <a
          className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)] rounded-full border border-transparent bg-gray-950 shadow-md text-base font-medium whitespace-nowrap text-white data-disabled:bg-gray-950 data-disabled:opacity-40 data-hover:bg-gray-800"
          data-headlessui-state=""
          href="#"
        >
          {t("Button")}
        </a>
      </div>
    </div>
  );
}
