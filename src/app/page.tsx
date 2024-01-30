import { ContactLinks } from "@/components/ui/ContactLinks";
import { Logo } from "@/components/ui/Logo";

import { Hero } from "@/sections/Hero";

export default async function Home() {
  return (
    <>
      <Hero />
      <Logo />
      <ContactLinks variant="footer" />
    </>
  );
}
