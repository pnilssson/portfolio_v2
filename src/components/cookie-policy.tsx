"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CookiePolicy() {
  const t = useTranslations("cookiePolicy");
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
          {t("title")}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t("title")}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>{t("lastUpdated")}</p>

          <section className="space-y-2">
            <h3 className="font-medium text-foreground">{t("intro.heading")}</h3>
            <p>{t("intro.text")}</p>
          </section>

          <section className="space-y-2">
            <h3 className="font-medium text-foreground">{t("whatAreCookies.heading")}</h3>
            <p>{t("whatAreCookies.text")}</p>
          </section>

          <section className="space-y-2">
            <h3 className="font-medium text-foreground">{t("cookiesWeUse.heading")}</h3>

            <div className="space-y-1">
              <h4 className="font-medium text-foreground text-xs">{t("cookiesWeUse.necessary.title")}</h4>
              <p>{t("cookiesWeUse.necessary.text")}</p>
            </div>

            <div className="space-y-1">
              <h4 className="font-medium text-foreground text-xs">{t("cookiesWeUse.analytics.title")}</h4>
              <p>{t("cookiesWeUse.analytics.text")}</p>
            </div>
          </section>

          <section className="space-y-2">
            <h3 className="font-medium text-foreground">{t("managePreferences.heading")}</h3>
            <p>{t("managePreferences.text")}</p>
          </section>

          <section className="space-y-2">
            <h3 className="font-medium text-foreground">{t("contact.heading")}</h3>
            <p>{t("contact.text")}</p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
