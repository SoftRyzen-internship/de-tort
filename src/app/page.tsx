import { Hero } from "@/sections/Hero";
import { Contacts } from "@/sections/Contacts";
import { About } from "@/sections/About";

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <Contacts />
    </>
  );
}
