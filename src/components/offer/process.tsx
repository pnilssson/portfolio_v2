import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Behovsanalys och planering",
    description: "Vi går igenom mål, målgrupp och innehåll.",
  },
  {
    number: "02",
    title: "Design och demo",
    description: "Ni får en klickbar förhandsvisning innan utvecklingen startar.",
  },
  {
    number: "03",
    title: "Utveckling och testning",
    description: "Jag bygger sidan och testar prestanda och funktionalitet.",
  },
  {
    number: "04",
    title: "Lansering och support",
    description: "Sidan publiceras och jag finns tillgänglig för frågor och uppföljning.",
  },
];

export default function Process() {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h3 className="text-xl font-medium font-serif">
          arbetsprocess
        </h3>
        <p className="mt-4">
          Jag arbetar i nära dialog med varje kund för att projektet ska bli smidigt, transparent och effektivt.
          Ni vet alltid vad som händer och när.
        </p>
      </div>

      <div className="grid gap-4">
        {steps.map((step, index) => (
          <Card key={index} className="shadow-none">
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <span className="text-2xl font-serif">
                    {step.number}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-normal">{step.title}</h4>
                  <p className="text-sm">{step.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-none border-dashed">
        <CardContent>
          <div className="flex flex-col gap-2">
            <h4 className="font-normal">Betalningsmodell</h4>
            <p className="text-sm">
              50 procent vid start, 50 procent vid leverans.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

