import { Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import LanguageSwitcher from "@/components/language-switcher";
import PrivacyPolicy from "@/components/privacy-policy";
import CookiePolicy from "@/components/cookie-policy";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

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
              <Github color="oklch(44.6% 0.03 256.802)" size={18} aria-hidden="true" />
            </a>
            <a 
              href="https://www.linkedin.com/in/pnilssson/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("ariaLinkedin")}
            >
              <Linkedin color="oklch(44.6% 0.03 256.802)" size={18} aria-hidden="true" />
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
          </div>
          <div className="ml-auto sm:ml-0">
            <LanguageSwitcher />
          </div>
        </div>
        <div className="flex flex-col gap-4 text-sm sm:hidden">
          <PrivacyPolicy />
          <CookiePolicy />
        </div>
      </footer>
    </div>
  );
}
