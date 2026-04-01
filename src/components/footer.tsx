"use client";

import { Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import LanguageSwitcher from "@/components/language-switcher";
import PrivacyPolicy from "@/components/privacy-policy";
import CookiePolicy from "@/components/cookie-policy";
import { useCookieConsent } from "@/components/cookies/cookie-consent-provider";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const { openPreferences } = useCookieConsent();

  return (
    <div className="flex flex-col mx-auto max-w-2xl px-6 mt-12 text-muted-foreground">
      <Separator />
      <footer className="flex flex-col gap-12 py-12">
        <div className="flex flex-row items-center">
          <nav className="flex flex-row gap-6" aria-label={t("ariaSocialMedia")}>
            <a
              href="https://github.com/pnilssson"
              aria-label={t("ariaGithub")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="oklch(44.6% 0.03 256.802)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </a>
            <a
              href="https://www.linkedin.com/in/pnilssson/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("ariaLinkedin")}
            >
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="oklch(44.6% 0.03 256.802)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a
              href="mailto:p.nilsson95@hotmail.com"
              aria-label={t("ariaEmail")}
            >
              <Mail color="oklch(44.6% 0.03 256.802)" size={18} aria-hidden="true" />
            </a>
          </nav>
          <div className="sm:flex gap-4 text-sm hidden mx-auto">
            <PrivacyPolicy />
            <CookiePolicy />
            <button
              onClick={openPreferences}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              {t("cookiePreferences")}
            </button>
          </div>
          <div className="ml-auto sm:ml-0">
            <LanguageSwitcher />
          </div>
        </div>
        <div className="flex flex-col gap-4 text-sm sm:hidden items-start">
          <PrivacyPolicy />
          <CookiePolicy />
          <button
            onClick={openPreferences}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            {t("cookiePreferences")}
          </button>
        </div>
      </footer>
    </div>
  );
}
