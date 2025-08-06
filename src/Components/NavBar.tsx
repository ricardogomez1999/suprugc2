"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import LanguageSwitcher from "./LenguageSwitcher";

export default function NavBar() {
  const t = useTranslations("Header");
  return (
    <nav className="relative  lg:flex hidden items-center">
      <Menu as="div" className="relative flex group/item">
        <MenuButton className="flex items-center px-4 py-3 text-base font-bold text-gray-900 bg-blend-multiply data-hover:bg-black/[2.5%]">
          {t("Services")}
        </MenuButton>
        <MenuItems
          anchor="bottom start"
          className="mt-2 flex flex-col rounded-lg bg-white p-2 shadow-lg ring-1 ring-black/5"
        >
          <MenuItem>
            <Link
              href="/web-development"
              className="block rounded px-4 py-2 text-base font-bold text-gray-900 data-[focus]:bg-black/[2.5%]"
            >
              {t("WebDevelopment")}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/automations"
              className="block rounded px-4 py-2 text-base font-bold text-gray-900 data-[focus]:bg-black/[2.5%]"
            >
              {t("Automations")}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/digitalization"
              className="block rounded px-4 py-2 text-base font-bold text-gray-900 data-[focus]:bg-black/[2.5%]"
            >
              {t("Digitalization")}
            </Link>
          </MenuItem>
        </MenuItems>
      </Menu>
      <div className=" relative flex group/item">
        <Link
          href="/company"
          className="flex items-center px-4 py-3 text-base font-bold text-gray-900 bg-blend-multiply data-hover:bg-black/[2.5%]"
        >
          {t("Company")}
        </Link>
      </div>
      <LanguageSwitcher />
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
