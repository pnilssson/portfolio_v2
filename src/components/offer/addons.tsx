import { TrendingUp, Sparkles, Plug, Circle, Lightbulb } from "lucide-react";
import { useTranslations } from 'next-intl';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Addons() {
  const t = useTranslations('offer.addons');
  
  const services = [
    {
      id: "expansion",
      category: t('categories.expansion.name'),
      icon: TrendingUp,
      items: [
        t('categories.expansion.items.pages'),
        t('categories.expansion.items.multilang'),
        t('categories.expansion.items.seo'),
        t('categories.expansion.items.analytics'),
      ],
    },
    {
      id: "automation",
      category: t('categories.automation.name'),
      icon: Sparkles,
      items: [
        t('categories.automation.items.chatbot'),
        t('categories.automation.items.quotes'),
        t('categories.automation.items.support'),
        t('categories.automation.items.email'),
        t('categories.automation.items.aiText'),
        t('categories.automation.items.custom'),
      ],
    },
    {
      id: "integrations",
      category: t('categories.integrations.name'),
      icon: Plug,
      items: [
        t('categories.integrations.items.booking'),
        t('categories.integrations.items.payment'),
        t('categories.integrations.items.api'),
      ],
    },
    {
      id: "consulting",
      category: t('categories.consulting.name'),
      icon: Lightbulb,
      items: [
        t('categories.consulting.items.strategy'),
        t('categories.consulting.items.domain'),
        t('categories.consulting.items.special'),
      ],
    },
  ];

  return (
    <section className="flex flex-col gap-6" aria-labelledby="addons-heading">
      <div>
        <h2 id="addons-heading" className="text-xl font-medium font-serif">
          {t('heading')}
        </h2>
        <p className="mt-4">{t('intro')}</p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <AccordionItem key={service.id} value={service.id}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon className="size-4" aria-hidden="true" />
                  <span className="font-medium text-base">{service.category}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 text-base pl-7 pt-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2.5">
                      <Circle className="size-1 fill-current flex-shrink-0 mt-2.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}

