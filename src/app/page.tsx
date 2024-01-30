import { Logo } from "@/components/ui/Logo";
// import Example from "@/components/Example";

// import { SectionTitleExamples } from "@/components/ui/SectionTitle/SectionTitleExamples";

import { Hero } from "@/sections/Hero";

export default async function Home() {
  return (
    <>
      <Hero />
      <Logo />
      <h1>Home Page</h1>

      {/* <SectionTitleExamples /> */}
    </>
  );
}
