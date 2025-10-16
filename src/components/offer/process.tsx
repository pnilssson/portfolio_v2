import { useTranslations } from 'next-intl';

export default function Process() {
  const t = useTranslations('offer.process');
  
  const steps = [
    {
      number: "01",
      title: t('steps.analysis.title'),
      description: t('steps.analysis.description'),
    },
    {
      number: "02",
      title: t('steps.design.title'),
      description: t('steps.design.description'),
    },
    {
      number: "03",
      title: t('steps.payment1.title'),
      description: t('steps.payment1.description'),
    },
    {
      number: "04",
      title: t('steps.development.title'),
      description: t('steps.development.description'),
    },
    {
      number: "05",
      title: t('steps.feedback.title'),
      description: t('steps.feedback.description'),
    },
    {
      number: "06",
      title: t('steps.payment2.title'),
      description: t('steps.payment2.description'),
    },
    {
      number: "07",
      title: t('steps.launch.title'),
      description: t('steps.launch.description'),
    },
  ];
  
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h3 className="text-xl font-medium font-serif">{t('heading')}</h3>
        <p className="mt-4">{t('intro')}</p>
      </div>

      <div className="relative mt-6">
        {steps.map((step, index) => (
          <div key={index} className="relative flex gap-6 pb-8 last:pb-0">
            {/* Timeline line and dot */}
            <div className="relative flex flex-col items-center">
              {/* Dot with number */}
              <div className="relative z-10 flex size-10 items-center justify-center rounded-full border-1 border-foreground bg-background">
                <span className="font-serif font-medium">{step.number}</span>
              </div>
              
              {/* Vertical line */}
              {index !== steps.length - 1 && (
                <div className="absolute top-10 h-full w-px bg-border" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-2 pt-1">
              <h4 className="font-medium mb-2">{step.title}</h4>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
