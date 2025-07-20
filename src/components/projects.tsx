import { Project } from "@/lib/types";
import { ArrowRight } from "lucide-react";

const projects: Project[] = [
  {
    description: "Website for Maria Längfors, dietitian and personal trainer.",
    url: "https://www.marialangfors.se/",
  },
  {
    description: "Company website for Fönsterputsverket.",
    url: "https://www.fonsterputsverket.se/",
  },
  {
    description: "The first version of my portfolio.",
    url: "https://portfolio-v1-rosy-alpha.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h3 className="text-xl font-medium font-serif">things I have built</h3>
      </div>
      <ul className="space-y-4">
        {projects.map((project, index) => (
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
                  {project.description}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
