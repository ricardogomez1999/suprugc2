import { defaultLocale, locales } from "@/i18n";
import { redirect } from "next/navigation";

export default function RootPage() {
  const getPreferredLocale = () => {
    if (typeof navigator !== "undefined") {
      const preferred = navigator.language.split("-")[0];
      return locales.includes(preferred as any) ? preferred : defaultLocale;
    }
    return defaultLocale;
  };

  const locale = getPreferredLocale();
  redirect(`/${locale}`);
}
