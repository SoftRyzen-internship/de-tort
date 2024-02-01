// import { ContactLinks } from "@/components/ui/ContactLinks";
// import { Logo } from "@/components/ui/Logo";
import { Slider } from "@/components/base/Slider";

// import { SectionTitleExamples } from "@/components/ui/SectionTitle/SectionTitleExamples";
// import { ContactLinks } from "@/components/ui/ContactLinks";
import { Accordion } from "@/components/base/Accordion";
import { AchievementCards } from "@/components/base/AchievementCards/AchievementCards";

import { Hero } from "@/sections/Hero";
import { Contacts } from "@/sections/Contacts";

// import Example from "@/components/Example";

export default async function Home() {
  return (
    <>
      <section className="pt-[88px] md:pt-[160px] xl:pt-[204px] bg-color-bg-hero text-center">
        <h1>Home Page - hero section</h1>
      </section>
      {/* секція тут просто як обгортка, аби поглянути на слайдер */}
      <section className=" min-w-0 relative w-max-[767px] md:w-max-[1279px] lg:w-auto">
        <Slider section="feedback" />
      </section>
      <Hero />
      <Contacts />

      <div className="container">
        <Accordion />
      </div>
      <section className="container bg-color-bg-primary py-10">
        <AchievementCards />
      </section>

      {/* <ContactLinks variant="footer" /> */}
      {/* <Example /> */}
      {/* <SectionTitleExamples /> */}
      {/* <Logo /> */}
    </>
  );
}
