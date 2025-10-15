import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Sparkles, Plug, Circle, Lightbulb } from "lucide-react";

const services = [
  {
    category: "Utbyggnad, underhåll och synlighet",
    icon: TrendingUp,
    items: [
      "Ytterliggare sidor utöver de som ingår",
      "Anpassad flerspråkighet (svenska, engelska, etc.)",
      "SEO-analys med löpande förbättringar (avtal månadsvis eller kvartalsvis)",
      "Analytics-rapportering",
    ],
  },
  {
    category: "Automation och AI",
    icon: Sparkles,
    items: [
      "AI-chatbot",
      "Automatiserade offertflöden",
      "Automatisering av kundsupport",
      "Automatisering av e-post",
      "Integration av AI-textförslag (blogg, nyheter, produktbeskrivningar)",
      "Skräddarsydda AI-lösningar för interna processer",
    ],
  },
  {
    category: "Integrationer och teknik",
    icon: Plug,
    items: [
      "Integration mot bokningssystem, CRM eller e-postplattform",
      "Integration mot betalningslösningar (Stripe, Klarna, Swish etc.)",
      "API-integrationer mellan olika system (t.ex. offertsystem, logistik eller interna appar)",
    ],
  },
  {
    category: "Konsultation och speciallösningar",
    icon: Lightbulb,
    items: [
      "Konsultation kring digital strategi, systemarkitektur eller molninfrastruktur",
      "Hjälp med domänhantering och DNS",
      "Särskilda önskemål eller speciallösningar diskuteras alltid",
    ],
  },
];

export default function AdditionalServices() {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h3 className="text-xl font-medium font-serif">
          tilläggstjänster
        </h3>
        <p className="mt-4">
          Utöka efter behov och skräddarsy er lösning. Alla tilläggstjänster kan kombineras med vilket paket som helst.
        </p>
      </div>

      <div className="grid gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={index} className="shadow-none">
              <CardHeader>
                <CardTitle className="font-normal text-base flex items-center gap-2">
                  <Icon className="size-4" />
                  <span>{service.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <Circle className="size-1 fill-current" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

