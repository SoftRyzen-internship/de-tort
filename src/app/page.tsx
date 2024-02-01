import { Hero } from "@/sections/Hero";
import { Contacts } from "@/sections/Contacts";
import { Accordion } from "@/components/base/Accordion";
import { ToppingCard } from "@/components/ui/ToppingCard";

export default async function Home() {
  return (
    <>
      <Hero />
      <Contacts />
      <div className="container">
        <Accordion />
      </div>
      <ToppingCard />
    </>
  );
}
