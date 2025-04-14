import { useTranslations } from "next-intl";
import React from "react";

export default function OurMission() {
  const t = useTranslations("OurMission");
  return (
    <div className="max-w-lg">
      <h2 className="text-2xl font-medium tracking-tight">Our mission</h2>
      <p className="mt-6 text-sm/6 text-gray-600">{t("Text1")}</p>
      <p className="mt-8 text-sm/6 text-gray-600">{t("Text2")}</p>
    </div>
  );
}
