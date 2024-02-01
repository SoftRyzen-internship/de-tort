// import { ContactLinks } from "@/components/ui/ContactLinks";
// import { Logo } from "@/components/ui/Logo";
// import Example from "@/components/Example";
// import { SectionTitleExamples } from "@/components/ui/SectionTitle/SectionTitleExamples";
// import { ContactLinks } from "@/components/ui/ContactLinks";
import { Accordion } from "@/components/base/Accordion";

import { Hero } from "@/sections/Hero";
import { Contacts } from "@/sections/Contacts";

import Example from "@/components/Example";

export default async function Home() {
  return (
    <>
      <Hero />
      <Contacts />

      {/* <div className="container">
        <Accordion />
      </div> */}

      {/* <ContactLinks variant="footer" /> */}
      {/* <Example /> */}
      {/* <SectionTitleExamples /> */}
      {/* <Logo /> */}
    </>
  );
}
