import Typewriter from "./ui/typewriter";

export default function Hero() {
  return (
    <section className="flex flex-col gap-6 pt-12 md:pt-24">
      <div>
        <h3 className="text-xl font-medium font-serif">who am I?</h3>
      </div>
      <div className="whitespace-pre-wrap">
        <span>{"I am "}</span>
        <Typewriter
          text={[
            "Pär Nilsson",
            "a nerd",
            "a training enthusiast",
            "a friend",
          ]}
          speed={90}
          className="font-medium"
          waitTime={2000}
          deleteSpeed={70}
          cursorChar={"|"}
        />
      </div>
      <p>A fullstack developer passionate about helping businesses strengthen their digital presence by building things people actually need.</p>
    </section>
  );
}
