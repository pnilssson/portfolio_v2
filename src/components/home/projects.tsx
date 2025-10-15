import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

const projectUrls = [
  { key: "marialangfors", url: "https://www.marialangfors.se/" },
  { key: "fonsterputsverket", url: "https://www.fonsterputsverket.se/" },
  { key: "portfolioV1", url: "https://portfolio-v1-rosy-alpha.vercel.app/" },
];

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <section className="flex flex-col gap-6">
      <div>
        <h3 className="text-xl font-medium font-serif">{t("heading")}</h3>
      </div>
      <ul className="space-y-4">
        {projectUrls.map((project, index) => (
          <li key={index}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block gap-6 rounded-lg transition-all duration-300 hover:text-gray-900"
            >
              <div className="flex flex-row gap-3 items-center">
                <ArrowRight size={16} />
                <p className="font-normal truncate hover:text-gray-900">
                  {t(`items.${project.key}`)}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
