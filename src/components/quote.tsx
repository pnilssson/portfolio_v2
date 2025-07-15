"use client"

import { useEffect, useRef } from "react"
import ScrambleIn, { ScrambleInHandle } from "./ui/scramble-in"

export default function Qoute() {
  const titles = [
    "Any fool can make something complicated.",
    "It takes a genius to make it simple.",
    "- Woody Guthrie",
  ]

  const scrambleRefs = useRef<(ScrambleInHandle | null)[]>([])

  useEffect(() => {
    titles.forEach((_, index) => {
      const delay = index * 1000
      setTimeout(() => {
        scrambleRefs.current[index]?.start()
      }, delay)
    })
  }, [])

  return (
    <section className="flex flex-col gap-6">
      <div>
        <h3 className="text-xl font-medium font-serif">a qoute I like</h3>
      </div>
      <div className="flex flex-col text-gray-700 text-normal overflow-hidden ">
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
