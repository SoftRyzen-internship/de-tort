import { AchievementCards } from "@/components/base/AchievementCards/AchievementCards";
import { ContactLinks } from "@/components/ui/ContactLinks";

import { Hero } from "@/sections/Hero";

// import Example from "@/components/Example";
// import { SectionTitleExamples } from "@/components/ui/SectionTitle/SectionTitleExamples";

export default async function Home() {
  return (
    <>
      <Hero />

      <ContactLinks variant="footer" />
      <section className="pt-[88px] md:pt-[160px] xl:pt-[204px] bg-color-bg-hero text-center">
        <h1>Home Page - hero section</h1>
      </section>
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
