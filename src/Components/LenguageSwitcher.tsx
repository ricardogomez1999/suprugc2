"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useLocale } from "next-intl";
// import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "../i18n/navigation";

export default function LanguageSwitcher() {
  const t = useTranslations("Language");
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  console.log(router);

  const locales = [
    { code: "en", label: t("English"), flag: "🇺🇸" },
    { code: "es", label: t("Spanish"), flag: "🇲🇽" },
  ];

  return (
    <Menu as="div" className="relative inline-block text-left z-50">
      <Menu.Button className="inline-flex items-center justify-center rounded-md border284F77 bg-[#284F77] px-3 py-1 text-sm font-medium text-white shadow-sm hover:bg-blue-950 ">
        {locales.find((l) => l.code === currentLocale)?.flag}
        <span className="ml-1">{currentLocale.toUpperCase()}</span>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-[#284F77] shadow-lg focus:outline-none">
          <div className="py-1">
            {locales.map(({ code, label, flag }) => (
              <Menu.Item key={code}>
                {({ active }) => (
                  <button
                    onClick={() => router.replace(pathname, { locale: code })}
                    className={`${
                      active ? "bg-gray-700" : ""
                    } flex w-full items-center px-4 py-2 text-sm text-white ${
                      code === currentLocale ? "font-bold" : ""
                    }`}
                  >
                    {flag} <span className="ml-2">{label}</span>
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
