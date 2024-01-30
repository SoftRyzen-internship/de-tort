import { ContactLinks } from "@/components/ui/ContactLinks";
import { Logo } from "@/components/ui/Logo";
import Example from "@/components/Example";

import { Slider } from "@/components/base/Slider";

// import { SectionTitleExamples } from "@/components/ui/SectionTitle/SectionTitleExamples";

export default async function Home() {
  return (
    <>
      <Logo />
      <h1>Home Page</h1>
      <ContactLinks variant="footer" />

      <Slider section="services" />

      <Example />
      {/* <SectionTitleExamples /> */}
    </>
  );
}
