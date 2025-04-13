import React from "react";
import { useTranslations } from "next-intl";

export default function FooterNav() {
  const t = useTranslations("Footer");

  return (
    <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-6">
      <div>
        <h3 className="text-sm/6 font-medium text-gray-950/50">
          {t("Product")}
        </h3>
        <ul className="mt-6 space-y-4 text-sm/6">
          <li>
            <a
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              href="/pricing"
            >
              {t("Pricing")}
            </a>
          </li>
          <li>
            <a
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              href="#"
            >
              {t("Analysis")}
            </a>
          </li>
          <li>
            <a
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              href="#"
            >
              API
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm/6 font-medium text-gray-950/50">
          {t("Company")}
        </h3>
        <ul className="mt-6 space-y-4 text-sm/6">
          <li>
            <a
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              href="#"
            >
              {t("Careers")}
            </a>
          </li>
          <li>
            <a
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              href="/blog"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              href="/company"
            >
              {t("Company")}
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm/6 font-medium text-gray-950/50">
          {t("Support")}
        </h3>
        <ul className="mt-6 space-y-4 text-sm/6">
          <li>
            <a
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              href="#"
            >
              {t("HelpCenter")}
            </a>
          </li>
          <li>
            <a
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              href="#"
            >
              {t("Community")}
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm/6 font-medium text-gray-950/50">
          {t("Company")}
        </h3>
        <ul className="mt-6 space-y-4 text-sm/6">
          <li>
            <a
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              href="#"
            >
              {t("LegalTerms")}
            </a>
          </li>
          <li>
            <a
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              href="#"
            >
              {t("LegalPrivacy")}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
