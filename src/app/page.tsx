import { Slider } from "@/components/base/Slider";
import { SliderNav } from "@/components/base/SliderNav";
import { Hero } from "@/sections/Hero";
import { Contacts } from "@/sections/Contacts";
import { Accordion } from "@/components/base/Accordion";

export default async function Home() {
  return (
    <>
      <section className="pt-[88px] md:pt-[160px] xl:pt-[204px] bg-color-bg-hero text-center">
        <h1>Home Page - hero section</h1>
      </section>

      <Slider section="feedback" />
      <SliderNav section="feedback" />
      <Hero />
      <Contacts />
      <div className="container">
        <Accordion />
      </div>
    </>
  );
}
