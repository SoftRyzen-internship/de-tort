// import { ContactLinks } from "@/components/ui/ContactLinks";
// import { Logo } from "@/components/ui/Logo";
import Example from "@/components/Example";
import { Slider } from "@/components/base/Slider";

// import { SectionTitleExamples } from "@/components/ui/SectionTitle/SectionTitleExamples";

export default async function Home() {
  return (
    <>
      <section className="pt-[88px] md:pt-[160px] xl:pt-[204px] bg-color-bg-hero text-center">
        <h1>Home Page - hero section</h1>
      </section>
      <section className=" min-w-0 relative w-max-[767px] md:w-max-[1279px] lg:w-auto">
        <Slider section="feedback" />
      </section>

      <Example />
      {/* <ContactLinks variant="footer" /> */}
      {/* <Example /> */}
      {/* <SectionTitleExamples /> */}
    </>
  );
}
