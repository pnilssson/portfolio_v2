import { Project } from "@/lib/types";

const projects: Project[] = [
  {
    name: "marialangfors.se",
    description: "Hemsida för Maria Längfors, dietist och PT.",
    url: "https://www.marialangfors.se/",
  },
  {
    name: "fonsterputsverket.se",
    description: "Företagssida för fönsterputsverket.",
    url: "https://www.fonsterputsverket.se/",
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
              className="group block gap-6 rounded-lg p-4 transition-all duration-300 hover:bg-gray-100 -mx-4"
            >
              <div className="grid items-center gap-2 grid-cols-[auto_1fr_auto]">
                <h3 className="text-sm font-medium text-gray-800 dark:text-white">
                  {project.name}
                </h3>
                <p className="text-xs text-gray-500 truncate">
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
