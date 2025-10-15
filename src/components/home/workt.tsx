import { useTranslations } from "next-intl";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const workItems = [
  {
    key: "norion",
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
    key: "volvo",
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
    key: "consid",
    tech: [
      "Next.js",
      "Consultancy",
      "Leadership",
      "Microsoft Azure",
      "AWS",
    ],
  },
  {
    key: "dh",
    tech: ["Angular", "MongoDB", "NoSQL", "Microservices", ".Net Core"],
  },
];

export default function Work() {
  const t = useTranslations("work");

  return (
    <main className="flex flex-col gap-6">
      <h3 className="text-xl font-medium font-serif">{t("heading")}</h3>
      <Accordion type="single" collapsible>
        {workItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="font-normal">{t(`items.${item.key}.company`)}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-6">
              <h6 className="font-medium">{t(`items.${item.key}.period`)}</h6>
              <p className="text-base">{t(`items.${item.key}.description`)}</p>
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