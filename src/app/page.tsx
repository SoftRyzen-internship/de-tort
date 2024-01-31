import { ContactLinks } from "@/components/ui/ContactLinks";
import { Logo } from "@/components/ui/Logo";

import { Hero } from "@/sections/Hero";

export default async function Home() {
  return (
    <>
      <Hero />
      <Logo />
      <ContactLinks variant="footer" />
      <section className="pt-[88px] md:pt-[160px] xl:pt-[204px] bg-color-bg-hero text-center">
        <h1>Home Page - hero section</h1>
      </section>

      {/* <ContactLinks variant="footer" /> */}
      {/* <Example /> */}
      {/* <SectionTitleExamples /> */}
    </>
  );
}
