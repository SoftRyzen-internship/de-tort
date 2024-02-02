import { Slider } from "@/components/base/Slider";
import { SliderNav } from "@/components/base/SliderNav";
import { Hero } from "@/sections/Hero";
import { Contacts } from "@/sections/Contacts";
import { About } from "@/sections/About";
import { Sweets } from "@/sections/Sweets";

export default async function Home() {
  return (
    <>
      <section className="pt-[88px] md:pt-[160px] xl:pt-[204px] bg-color-bg-hero text-center">
        <h1>Home Page - hero section</h1>
      </section>

      <Slider section="top" />
      <SliderNav section="top" />

      <Slider section="feedback" />
      <SliderNav section="feedback" />

      <Slider section="achievements" />
      <SliderNav section="achievements" />
      <Hero />
      <Sweets />
      <About />
      <Contacts />
    </>
  );
}
