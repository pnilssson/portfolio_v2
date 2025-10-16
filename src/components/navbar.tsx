import { Link } from "@/i18n/navigation";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("navbar");

  return (
    <div className="flex flex-col mx-auto max-w-2xl px-6 mb-12">
      <nav className="flex flex-row gap-6 items-center py-6" aria-label={t("ariaLabel")}>
        <div className="flex gap-6 items-center">
          <Link 
            href="/" 
            className="text-sm hover:opacity-70 transition-opacity"
            aria-label={t("ariaHome")}
          >
            {t("home")}
          </Link>
          <Link 
            href="/offer" 
            className="text-sm hover:opacity-70 transition-opacity"
            aria-label={t("ariaServices")}
          >
            {t("services")}
          </Link>
        </div>
      </nav>
      <Separator />
    </div>
  );
}

