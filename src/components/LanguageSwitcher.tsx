"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        disabled={locale === "en"}
        onClick={() => router.replace(pathname, { locale: "en" })}
      >
        EN
      </button>

      <span aria-hidden="true">|</span>

      <button
        type="button"
        disabled={locale === "ja"}
        onClick={() => router.replace(pathname, { locale: "ja" })}
      >
        日本語
      </button>
    </div>
  );
}