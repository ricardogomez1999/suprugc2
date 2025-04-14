"use client";

import faqs from "@/src/Data/faqs";
import React from "react";
import Questions from "./Questions";
import { useParams } from "next/navigation";
import faqsES from "@/src/Data/faqsES";
import { useTranslations } from "next-intl";

export default function Faqs() {
  const { locale } = useParams();
  const t = useTranslations("Faqs");
  return (
    <div className="px-6 lg:px-8 py-10">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <section id="faqs" className="scroll-mt-8">
          <h2 className="text-center font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
            {t("Title")}
          </h2>
          <div className="mt-2 text-center text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
            {t("Subtitle")}
          </div>
          <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
            {locale === "en"
              ? faqs.map((question, index) => (
                  <Questions question={question} key={index} />
                ))
              : faqsES.map((question, index) => (
                  <Questions question={question} key={index} />
                ))}
          </div>
        </section>
      </div>
    </div>
  );
}
