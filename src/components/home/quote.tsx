"use client"

import { useEffect, useRef } from "react"
import { useTranslations } from "next-intl"
import ScrambleIn, { ScrambleInHandle } from "@/components/ui/scramble-in"

export default function Qoute() {
  const t = useTranslations("quote")
  
  const titles = [
    t("lines.line1"),
    t("lines.line2"),
    t("lines.author"),
  ]

  const scrambleRefs = useRef<(ScrambleInHandle | null)[]>([])

  useEffect(() => {
    titles.forEach((_, index) => {
      const delay = index * 1000
      setTimeout(() => {
        scrambleRefs.current[index]?.start()
      }, delay)
    })
  }, [titles])

  return (
    <section className="flex flex-col gap-6" aria-labelledby="quote-heading">
      <div>
        <h2 id="quote-heading" className="text-xl font-medium font-serif">{t("heading")}</h2>
      </div>
      <div className="flex flex-col text-normal overflow-hidden ">
        {titles.map((model, index) => (
          <ScrambleIn
            key={index}
            ref={(el) => {
              scrambleRefs.current[index] = el
            }}
            text={model}
            scrambleSpeed={25}
            scrambledLetterCount={5}
            autoStart={false}
          />
        ))}
      </div>
    </section>
  )
}
