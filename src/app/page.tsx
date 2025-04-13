import { defaultLocale, locales } from "@/i18n";
import { redirect } from "next/navigation";

export default function RootPage() {
  const getPreferredLocale = (): (typeof locales)[number] => {
    if (typeof navigator !== "undefined") {
      const preferred = navigator.language.split("-")[0];
      if (locales.includes(preferred as (typeof locales)[number])) {
        return preferred as (typeof locales)[number];
      }
    }
    return defaultLocale;
  };

  const locale = getPreferredLocale();
  redirect(`/${locale}`);
}
