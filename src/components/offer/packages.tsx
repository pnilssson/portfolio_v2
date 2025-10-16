import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { useTranslations } from 'next-intl';

export default function Packages() {
    const t = useTranslations('offer.packages');
    
    const commonFeatures = [
        t('commonFeatures.modern'),
        t('commonFeatures.mobile'),
        t('commonFeatures.gdpr'),
        t('commonFeatures.hosting'),
        t('commonFeatures.ssl'),
        t('commonFeatures.contact'),
    ];
    
    return (
        <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
                <h3 className="text-xl font-medium font-serif">
                    {t('heading')}
                </h3>
                
                {/* Gemensamma funktioner */}
                <div>
                    <p className="mb-4">{t('intro')}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {commonFeatures.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-2">
                                <Check className="size-3" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

                <div className="grid gap-6">
                    {/* Premium Package */}
                    <Card className="flex flex-col shadow-none">
                        <CardHeader>
                            <CardTitle className="font-base font-medium text-xl flex items-center gap-2">
                                {t('premium.name')}
                            </CardTitle>
                            <span className="my-3 block text-2xl font-semibold">{t('premium.price')}</span>
                            <CardDescription className="text-sm">
                                {t('premium.description')}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3">
                                {[
                                    t('premium.features.everything'),
                                    t('premium.features.pages'),
                                    t('premium.features.aiSeo'),
                                    t('premium.features.analytics'),
                                    t('premium.features.multilang'),
                                    t('premium.features.chatbot'),
                                    t('premium.features.advancedForm'),
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <p className="text-sm text-muted-foreground pt-2">
                                {t('premium.suitedFor')}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Growth Package */}
                    <Card className="flex flex-col shadow-none">
                        <CardHeader>
                            <CardTitle className="font-base font-medium text-xl flex items-center gap-2">
                                {t('growth.name')}
                            </CardTitle>
                            <span className="my-3 block text-2xl font-semibold">{t('growth.price')}</span>
                            <CardDescription className="text-sm">
                                {t('growth.description')}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3">
                                {[
                                    t('growth.features.pages'),
                                    t('growth.features.seo'),
                                    t('growth.features.analytics'),
                                    t('growth.features.cms'),
                                    t('growth.features.blog'),
                                    t('growth.features.extendedForm'),
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <p className="text-sm text-muted-foreground pt-2">
                                {t('growth.suitedFor')}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Starter Package */}
                    <Card className="flex flex-col shadow-none">
                        <CardHeader>
                            <CardTitle className="font-base font-medium text-xl flex items-center gap-2">
                                {t('starter.name')}
                            </CardTitle>
                            <span className="my-3 block text-2xl font-semibold">{t('starter.price')}</span>
                            <CardDescription className="text-sm">
                                {t('starter.description')}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3">
                                {[
                                    t('starter.features.landing'),
                                    t('starter.features.seo'),
                                    t('starter.features.form'),
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <p className="text-sm text-muted-foreground pt-2">
                                {t('starter.suitedFor')}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
    )
}
