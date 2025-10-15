import Footer from "@/components/footer";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Qoute from "@/components/home/quote";
import Work from "@/components/home/workt";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 mx-auto max-w-2xl px-6 pb-12 pt-12 md:pt-24">
      <Hero />
      <Work />
      <Projects />
      <Qoute />
      <Footer />
    </main>
  );
}
