import { Hero } from "@/sections/Hero";
import { Contacts } from "@/sections/Contacts";
import { About } from "@/sections/About";
import { Sweets } from "@/sections/Sweets";
import { CakesAssortment } from "@/sections/CakesAssortment";
import { QA } from "@/sections/QA";
import { Achievements } from "@/sections/Achievements";
import { Reviews } from "@/sections/Reviews";
import { ToppingCard } from "@/components/ui/ToppingCard";

export default async function Home() {
  return (
    <>
      <ToppingCard />
      <Hero />
      <CakesAssortment />
      <Sweets />
      <About />
      <Achievements />
      <QA />
      <Reviews />
      <Contacts />
    </>
  );
}
