import { useTranslations } from 'next-intl';

export default function Challenge() {
  const t = useTranslations('offer.challenge');
  
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h3 className="text-xl font-medium font-serif">
          {t('heading')}
        </h3>
      </div>
      <div className="flex flex-col gap-4">
        <p>{t('paragraph1')}</p>
        <p>{t('paragraph2')}</p>
        <p>{t('paragraph3')}</p>
      </div>
    </section>
  );
}

