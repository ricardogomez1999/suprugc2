import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

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
            <Link
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              href="/pricing"
            >
              {t("Pricing")}
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              href="#"
            >
              {t("Analysis")}
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              href="#"
            >
              API
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm/6 font-medium text-gray-950/50">
          {t("Company")}
        </h3>
        <ul className="mt-6 space-y-4 text-sm/6">
          <li>
            <Link
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              href="#"
            >
              {t("Careers")}
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              href="/company"
            >
              {t("Company")}
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm/6 font-medium text-gray-950/50">
          {t("Support")}
        </h3>
        <ul className="mt-6 space-y-4 text-sm/6">
          <li>
            <Link
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              href="/company"
            >
              {t("HelpCenter")}
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              href="/company"
            >
              {t("Community")}
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm/6 font-medium text-gray-950/50">
          {t("Company")}
        </h3>
        <ul className="mt-6 space-y-4 text-sm/6">
          <li>
            <Link
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              href="/company"
            >
              {t("LegalTerms")}
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              href="/company"
            >
              {t("LegalPrivacy")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
