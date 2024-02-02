import { Hero } from "@/sections/Hero";
import { Contacts } from "@/sections/Contacts";
import { About } from "@/sections/About";
import { Sweets } from "@/sections/Sweets";
import { CakesAssortment } from "@/sections/CakesAssortment";

export default async function Home() {
  return (
    <>
      <Hero />
      <CakesAssortment />
      <Sweets />
      <About />
      <Contacts />
    </>
  );
}
