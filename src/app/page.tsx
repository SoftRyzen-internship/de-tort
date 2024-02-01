import { ContactLinks } from "@/components/ui/ContactLinks";
import { Accordion } from "@/components/base/Accordion";

import { Hero } from "@/sections/Hero";

export default async function Home() {
  return (
    <>
      <Hero />
      <div className="container bg-color-bg-primary">
        <Accordion />
      </div>

      <ContactLinks variant="footer" />
    </>
  );
}
