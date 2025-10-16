import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { useTranslations } from 'next-intl';

export default function Tools() {
    const t = useTranslations('offer.tools');
    
    return (
        <section className="flex flex-col gap-6" aria-labelledby="tools-heading">
            <div className="flex flex-col gap-6">
                <h2 id="tools-heading" className="text-xl font-medium font-serif">
                    {t('heading')}
                </h2>
                <p>{t('description')}</p>
            </div>
            
            <div className="group relative overflow-hidden">
                <div className="relative w-full">
                    <InfiniteSlider
                        speedOnHover={20}
                        speed={40}
                        gap={112}>
                        <div className="flex">
                            <img
                                className="mx-auto h-5 w-fit dark:invert"
                                src="/framer.svg"
                                alt="Framer"
                                height="20"
                                width="auto"
                            />
                        </div>
                        <div className="flex">
                            <img
                                className="mx-auto h-5 w-fit dark:invert"
                                src="/openai.svg"
                                alt="OpenAI"
                                height="20"
                                width="auto"
                            />
                        </div>
                        <div className="flex">
                            <img
                                className="mx-auto h-5 w-fit dark:invert"
                                src="/supabase.svg"
                                alt="Supabase"
                                height="20"
                                width="auto"
                            />
                        </div>
                        <div className="flex">
                            <img
                                className="mx-auto h-5 w-fit dark:invert"
                                src="/wix.svg"
                                alt="Wix"
                                height="20"
                                width="auto"
                            />
                        </div>
                        <div className="flex">
                            <img
                                className="mx-auto h-5 w-fit dark:invert"
                                src="/nextjs.svg"
                                alt="Next.js"
                                height="20"
                                width="auto"
                            />
                        </div>
                    </InfiniteSlider>
                </div>
            </div>
        </section>
    )
}
