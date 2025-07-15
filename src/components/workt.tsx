import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Badge } from "./ui/badge";

export default function Work() {
  return (
    <main className="flex flex-col gap-6">
      <h3 className="font-medium">Work</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Norion Bank</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <h6 className="font-medium text-xs">Jan 2024 - Present</h6>
            <p>Maintenance of a large portfolio of .NET applications. Implementing requested functionality and regulations, ensuring they are up to date version wise and adhere to industry best practices.
              Development of new .NET applications, leveraging infrastructure as code (IaC) and Azure services to build scalable, efficient solutions.</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant={"secondary"}>Microsoft Azure</Badge>
              <Badge variant={"secondary"}>Elastic Stack</Badge>
              <Badge variant={"secondary"}>Infrastructure as Code</Badge>
              <Badge variant={"secondary"}>Terraform/Biceps</Badge>
              <Badge variant={"secondary"}>.NET</Badge>
              <Badge variant={"secondary"}>React</Badge>
              <Badge variant={"secondary"}>Blazor</Badge>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Volvo AB</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
          <h6 className="font-medium text-xs">June 2021 - Oct 2023</h6>
            <p>Breaking out parts of a monolithic system into microservices.
              Building multiple new front and back ends from the ground up as well as deciding on the architecture of these.
              Implementing and testing integrations between systems.
              Onboarding of new employees.</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant={"secondary"}>Blazor</Badge>
              <Badge variant={"secondary"}>Entity Framework</Badge>
              <Badge variant={"secondary"}>.NET</Badge>
              <Badge variant={"secondary"}>GraphQL</Badge>
              <Badge variant={"secondary"}>RabbitMQ</Badge>
              <Badge variant={"secondary"}>Docker</Badge>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Consid AB</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
          <h6 className="font-medium text-xs">Jan 2021 - Oct 2023</h6>
            <p>Completed the next level academy trainee program including its three blocks focusing on: consultancy, technology specialization and leadership.
              In-house project developing a web-based system used when applying to upper secondary school.</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant={"secondary"}>Next.js</Badge>
              <Badge variant={"secondary"}>Consultancy</Badge>
              <Badge variant={"secondary"}>Leadership</Badge>
              <Badge variant={"secondary"}>Microsoft Azure</Badge>
              <Badge variant={"secondary"}>AWS</Badge>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>DH Anticounterfeit</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
          <h6 className="font-medium text-xs">June 2020 - Jan 2021</h6>
            <p>Development of the brand protection SaaS product.
              Multi-national team with people working from around the world.
              Daily work was built on an agile way of working and scrum methodologies.</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant={"secondary"}>Angular</Badge>
              <Badge variant={"secondary"}>MongoDB</Badge>
              <Badge variant={"secondary"}>NoSQL</Badge>
              <Badge variant={"secondary"}>Microservices</Badge>
              <Badge variant={"secondary"}>.Net Core</Badge>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
