import { Hero } from "@/sections/Hero";
import { Contacts } from "@/sections/Contacts";
import { About } from "@/sections/About";
import { Sweets } from "@/sections/Sweets";

export default async function Home() {
  return (
    <>
      <Hero />
      <Sweets />
      <About />
      <Contacts />
    </>
  );
}
