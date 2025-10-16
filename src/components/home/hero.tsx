import { useTranslations } from "next-intl";
import Typewriter from "@/components/ui/typewriter";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="flex flex-col gap-6" aria-labelledby="hero-heading">
      <div>
        <h1 id="hero-heading" className="text-xl font-medium font-serif">{t("heading")}</h1>
      </div>
      <div className="whitespace-pre-wrap">
        <span>{t("prefix")}</span>
        <Typewriter
          text={[
            t("typewriterTexts.name"),
            t("typewriterTexts.nerd"),
            t("typewriterTexts.enthusiast"),
            t("typewriterTexts.friend"),
          ]}
          speed={90}
          className="font-medium"
          waitTime={2000}
          deleteSpeed={70}
          cursorChar={"|"}
        />
      </div>
      <p>{t("description")}</p>
    </section>
  );
}
