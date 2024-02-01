// import { ContactLinks } from "@/components/ui/ContactLinks";
// import { Logo } from "@/components/ui/Logo";
// import Example from "@/components/Example";
// import { SectionTitleExamples } from "@/components/ui/SectionTitle/SectionTitleExamples";
// import { ContactLinks } from "@/components/ui/ContactLinks";
import { Accordion } from "@/components/base/Accordion";
import { AchievementCards } from "@/components/base/AchievementCards/AchievementCards";

import { Hero } from "@/sections/Hero";
import { Contacts } from "@/sections/Contacts";
import { About } from "@/sections/About";

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <Contacts />

      <div className="container">
        <Accordion />
      </div>
      <section className="container bg-color-bg-primary py-10">
        <AchievementCards />
      </section>

      {/* <ContactLinks variant="footer" /> */}
      {/* <SectionTitleExamples /> */}
      {/* <Logo /> */}
    </>
  );
}
