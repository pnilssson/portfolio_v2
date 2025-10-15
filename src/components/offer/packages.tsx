import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function Packages() {
    return (
        <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
                <h3 className="text-xl font-medium font-serif">
                    mina paket
                </h3>
                
                {/* Gemensamma funktioner */}
                <Card className="shadow-none">
                    <CardHeader>
                        <CardTitle className="font-normal text-xl font-serif">Inkluderat i samtliga paket</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                            {[
                                'Modern och användarvänlig design',
                                'Mobilanpassad för alla enheter',
                                'GDPR-policy och cookie-banner',
                                'Hosting och drift inkluderad',
                                'SSL-certifikat (säker https)',
                                'Kontaktformulär'
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-2">
                                    <Check className="size-3" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>

                <div className="grid gap-6">
                    {/* Premiumwebb - 19 999 kr */}
                    <Card className="flex flex-col shadow-none">
                        <CardHeader>
                            <CardTitle className="font-normal text-xl font-serif flex items-center gap-2">
                                Premiumwebb
                            </CardTitle>
                            <span className="my-3 block text-2xl font-semibold">19 999 kr</span>
                            <CardDescription className="text-sm">
                                För företag som vill ha en komplett och skalbar lösning.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    'Allt i Tillväxtwebb',
                                    'Upp till 8 sidor',
                                    'AI SEO-optimering (smart analys av nyckelord och innehåll)',
                                    'Valfri integration för avancerad statistik och analys samt rapportering',
                                    'Anpassad flerspråkighet (1 ytterligare språk inkluderat)',
                                    'Chatbot inkluderat',
                                    'Avancerat kontaktformulär'
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <p className="text-xs text-muted-foreground pt-2">
                                Passar: Företag som vill ha en flexibel webbplats som kan växa med verksamheten.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Tillväxtwebb - 13 999 kr */}
                    <Card className="flex flex-col shadow-none">
                        <CardHeader>
                            <CardTitle className="font-normal text-xl font-serif flex items-center gap-2">
                                Tillväxtwebb
                            </CardTitle>
                            <span className="my-3 block text-2xl font-semibold">13 999 kr</span>
                            <CardDescription className="text-sm">
                                För företag som vill synas bättre och ge kunderna mer information.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    'Upp till 4 sidor',
                                    'Utökad SEO-optimering',
                                    'Grundläggande statistik och analysrapportering',
                                    'Innehållshanteringssystem (CMS) för enkel uppdatering',
                                    'Nyhetsflöde / bloggfunktion',
                                    'Utökat kontaktformulär'
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <p className="text-xs text-muted-foreground pt-2">
                                Passar: Etablerade företag som vill växa digitalt och förbättra sin synlighet.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Startwebb - 7 999 kr */}
                    <Card className="flex flex-col shadow-none">
                        <CardHeader>
                            <CardTitle className="font-normal text-xl font-serif flex items-center gap-2">
                                Startwebb
                            </CardTitle>
                            <span className="my-3 block text-2xl font-semibold">7 999 kr</span>
                            <CardDescription className="text-sm">
                                För företag som vill ha en enkel men professionell närvaro online.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    'En modern, mobilanpassad och användarvänlig landningssida',
                                    'Grundläggande SEO-optimering',
                                    'Grundläggande kontaktformulär'
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <p className="text-xs text-muted-foreground pt-2">
                                Passar: Mindre företag eller enskilda verksamheter som vill komma igång snabbt.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
    )
}
