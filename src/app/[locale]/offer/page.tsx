import Footer from "@/components/footer";
import Challenge from "@/components/offer/challenge";
import Packages from "@/components/offer/packages";
import AdditionalServices from "@/components/offer/additional-services";
import Process from "@/components/offer/process";

export default function Offer() {
  return (
    <main className="flex flex-col gap-12 mx-auto max-w-2xl px-6 pb-12 pt-12 md:pt-24">
      <Challenge />
      <Packages />
      <AdditionalServices />
      <Process />
      <Footer />
    </main>
  );
}
