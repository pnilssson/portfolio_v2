"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const t = useTranslations("languageSwitcher");
  
  // Extract current locale from pathname
  const currentLocale = pathname.startsWith("/sv") ? "sv" : "en";
  
  // Get path without locale prefix
  const pathWithoutLocale = pathname.replace(/^\/(en|sv)/, "") || "/";

  return (
    <nav className="flex items-center h-4" aria-label={t("ariaLabel")}>
      <Link href={`/sv${pathWithoutLocale}`} aria-label={t("ariaSwedish")}>
        <Button
          variant="link"
          size="sm"
          className={`cursor-pointer ${
            currentLocale === "sv"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-current={currentLocale === "sv" ? "page" : undefined}
        >
          SV
        </Button>
      </Link>
      <Separator orientation="vertical" />
      <Link href={`/en${pathWithoutLocale}`} aria-label={t("ariaEnglish")}>
        <Button
          variant="link"
          size="sm"
          className={`cursor-pointer ${
            currentLocale === "en"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-current={currentLocale === "en" ? "page" : undefined}
        >
          EN
        </Button>
      </Link>
    </nav>
  );
}

