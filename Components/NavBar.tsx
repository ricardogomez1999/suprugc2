import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  const t = useTranslations("Header");
  return (
    <nav className="relative  lg:flex hidden">
      <div className=" relative flex group/item">
        <Link
          href="/pricing"
          className="flex items-center px-4 py-3 text-base font-bold text-gray-900 bg-blend-multiply data-hover:bg-black/[2.5%]"
        >
          {t("Pricing")}
        </Link>
      </div>
      <div className=" relative flex group/item">
        <Link
          href="/company"
          className="flex items-center px-4 py-3 text-base font-bold text-gray-900 bg-blend-multiply data-hover:bg-black/[2.5%]"
        >
          {t("Company")}
        </Link>
      </div>
      {/* <div className=" relative flex group/item">
        <Link
          href="/blog"
          className="flex items-center px-4 py-3 text-base font-bold text-gray-900 bg-blend-multiply data-hover:bg-black/[2.5%]"
        >
          Blog
        </Link>
      </div>
      <div className=" relative flex group/item">
        <Link
          href="#"
          className="flex items-center px-4 py-3 text-base font-bold text-gray-900 bg-blend-multiply data-hover:bg-black/[2.5%]"
        >
          Login
        </Link>
      </div> */}
    </nav>
  );
}
