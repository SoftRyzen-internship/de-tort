import { ContactLinks } from "@/components/ui/ContactLinks";
import { Accordion } from "@/components/base/Accordion";

import { Hero } from "@/sections/Hero";

import Example from "@/components/Example";

export default async function Home() {
  return (
    <>
      <Hero />
      <div className="container">
        <Accordion />
      </div>

      <ContactLinks variant="footer" />
      <section className="pt-[88px] md:pt-[160px] xl:pt-[204px] bg-color-bg-hero text-center">
        <h1>Home Page - hero section</h1>
      </section>

      {/* <ContactLinks variant="footer" /> */}
      <Example />
      {/* <SectionTitleExamples /> */}
      {/* <Logo /> */}
    </>
  );
}
