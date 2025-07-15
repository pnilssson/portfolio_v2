import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Work from "@/components/workt";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 mx-auto max-w-2xl px-6 pb-12">
      <Hero />
      <Work />
      <Footer />
    </main>
  );
}
