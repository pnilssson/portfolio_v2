"use client";

import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { useCookieConsent } from "./cookie-consent-provider";
import { CookiePreferencesDialog } from "./cookie-preferences-dialog";

export function CookieBanner() {
  const { consent, acceptAll, rejectAll, openPreferences } =
    useCookieConsent();
  const t = useTranslations("cookieBanner");

  const showBanner = consent === null;

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed right-4 bottom-4 z-50 w-[calc(100%-2rem)] max-w-md rounded-xl border bg-background p-4 shadow-xl sm:right-6 sm:bottom-6"
            role="dialog"
            aria-label={t("ariaLabel")}
            aria-modal="false"
          >
            <div className="flex flex-col gap-4">
              <p className="text-sm text-muted-foreground">
                {t("description")}
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <Button variant="outline" size="sm" onClick={rejectAll}>
                  {t("rejectAll")}
                </Button>
                <Button variant="outline" size="sm" onClick={openPreferences}>
                  {t("managePreferences")}
                </Button>
                <Button size="sm" onClick={acceptAll}>
                  {t("acceptAll")}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CookiePreferencesDialog />
    </>
  );
}
