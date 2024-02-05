import { Hero } from "@/sections/Hero";
import { Contacts } from "@/sections/Contacts";
import { About } from "@/sections/About";
import { Sweets } from "@/sections/Sweets";
import { CakesAssortment } from "@/sections/CakesAssortment";
import { QA } from "@/sections/QA";
import { Reviews } from "@/sections/Reviews";

export default async function Home() {
  return (
    <>
      <Hero />
      <CakesAssortment />
      <Sweets />
      <About />
      <QA />
      <Reviews />
      <Contacts />
    </>
  );
}
