import Challenge from "@/components/offer/challenge";
import Packages from "@/components/offer/packages";
import Addons from "@/components/offer/addons";
import Process from "@/components/offer/process";
import Testimonials from "@/components/offer/testimonials";
import Tools from "@/components/offer/tools";

export default function Offer() {
  return (
    <main className="flex flex-col gap-12 mx-auto max-w-2xl px-6">
      <Challenge />
      {/* <Testimonials /> */}
      <Packages />
      <Addons />
      <Tools />
      <Process />
    </main>
  );
}
