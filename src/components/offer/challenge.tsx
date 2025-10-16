import { useTranslations } from 'next-intl';

export default function Challenge() {
  const t = useTranslations('offer.challenge');
  
  return (
    <section className="flex flex-col gap-6" aria-labelledby="challenge-heading">
      <div>
        <h1 id="challenge-heading" className="text-xl font-medium font-serif">
          {t('heading')}
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <p>{t('paragraph1')}</p>
        <p>{t('paragraph2')}</p>
        <p>{t('paragraph3')}</p>
      </div>
    </section>
  );
}

