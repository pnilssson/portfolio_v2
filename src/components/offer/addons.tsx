import { TrendingUp, Sparkles, Plug, Circle, Lightbulb } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Addons() {
  const t = useTranslations('offer.addons');
  
  const services = [
    {
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
      category: t('categories.integrations.name'),
      icon: Plug,
      items: [
        t('categories.integrations.items.booking'),
        t('categories.integrations.items.payment'),
        t('categories.integrations.items.api'),
      ],
    },
    {
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

      <div className="flex flex-col gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div 
              key={index} 
              className="group flex flex-col gap-3 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Icon className="size-4" aria-hidden="true" />
                <h4 className="font-medium text-base">{service.category}</h4>
              </div>
              <ul className="space-y-4 text-sm pl-8">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2.5">
                    <Circle className="size-1 fill-current flex-shrink-0 mt-3" aria-hidden="true" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

