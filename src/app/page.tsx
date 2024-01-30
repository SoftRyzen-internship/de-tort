// import { SectionTitleExamples } from "@/components/ui/SectionTitle/SectionTitleExamples";

import { Accordion } from "@/components/base/Accordion";

export default async function Home() {
  return (
    <>
      <h1>Home Page</h1>

      {/* <SectionTitleExamples /> */}
      <div className="container">
        <Accordion />
      </div>
    </>
  );
}
