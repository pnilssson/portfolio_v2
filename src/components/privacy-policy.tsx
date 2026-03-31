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

export default function PrivacyPolicy() {
  const t = useTranslations("privacyPolicy");
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
            <h3 className="font-medium text-foreground">{t("dataCollection.heading")}</h3>
            <p>{t("dataCollection.text")}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t("dataCollection.items.analytics")}</li>
              <li>{t("dataCollection.items.locale")}</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="font-medium text-foreground">{t("purpose.heading")}</h3>
            <p>{t("purpose.text")}</p>
          </section>

          <section className="space-y-2">
            <h3 className="font-medium text-foreground">{t("thirdParties.heading")}</h3>
            <p>{t("thirdParties.text")}</p>
          </section>

          <section className="space-y-2">
            <h3 className="font-medium text-foreground">{t("rights.heading")}</h3>
            <p>{t("rights.text")}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t("rights.items.access")}</li>
              <li>{t("rights.items.rectification")}</li>
              <li>{t("rights.items.erasure")}</li>
              <li>{t("rights.items.objection")}</li>
            </ul>
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
