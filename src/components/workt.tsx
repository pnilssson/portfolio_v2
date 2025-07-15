import { WorkItem } from "@/lib/types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Badge } from "./ui/badge";

const workItems: WorkItem[] = [
  {
    company: "Norion Bank",
    period: "Jan 2024 - Present",
    description:
      "Maintenance of a large portfolio of .NET applications. Implementing requested functionality and regulations, ensuring they are up to date version wise and adhere to industry best practices. Development of new .NET applications, leveraging infrastructure as code (IaC) and Azure services to build scalable, efficient solutions.",
    tech: [
      "Microsoft Azure",
      "Elastic Stack",
      "Infrastructure as Code",
      "Terraform/Biceps",
      ".NET",
      "React",
      "Blazor",
    ],
  },
  {
    company: "Volvo AB",
    period: "June 2021 - Oct 2023",
    description:
      "Breaking out parts of a monolithic system into microservices. Building multiple new front and back ends from the ground up as well as deciding on the architecture of these. Implementing and testing integrations between systems. Onboarding of new employees.",
    tech: [
      "Blazor",
      "Entity Framework",
      ".NET",
      "GraphQL",
      "RabbitMQ",
      "Docker",
    ],
  },
  {
    company: "Consid AB",
    period: "Jan 2021 - Oct 2023",
    description:
      "Completed the next level academy trainee program including its three blocks focusing on: consultancy, technology specialization and leadership. In-house project developing a web-based system used when applying to upper secondary school.",
    tech: [
      "Next.js",
      "Consultancy",
      "Leadership",
      "Microsoft Azure",
      "AWS",
    ],
  },
  {
    company: "DH Anticounterfeit",
    period: "June 2020 - Jan 2021",
    description:
      "Development of the brand protection SaaS product. Multi-national team with people working from around the world. Daily work was built on an agile way of working and scrum methodologies.",
    tech: ["Angular", "MongoDB", "NoSQL", "Microservices", ".Net Core"],
  },
];

export default function Work() {
  return (
    <main className="flex flex-col gap-6">
      <h3 className="text-xl font-medium font-serif">work so far</h3>
      <Accordion type="single" collapsible>
        {workItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.company}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-6">
              <h6 className="font-medium text-xs">{item.period}</h6>
              <p>{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech, i) => (
                  <Badge key={i} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}