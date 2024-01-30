import { Logo } from "@/components/ui/Logo";
import Example from "@/components/Example";

// import { SectionTitleExamples } from "@/components/ui/SectionTitle/SectionTitleExamples";

export default async function Home() {
  return (
    <>
      <Logo />
      <h1>Home Page</h1>
      <Example />
      {/* <SectionTitleExamples /> */}
    </>
  );
}
