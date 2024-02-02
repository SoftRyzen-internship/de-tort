import { ContactLinks } from "@/components/ui/ContactLinks";

import { Hero } from "@/sections/Hero";

export default async function Home() {
  return (
    <>
      <Hero />

      <ContactLinks variant="footer" />
    </>
  );
}
