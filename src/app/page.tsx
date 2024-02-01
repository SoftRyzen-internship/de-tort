import { Hero } from "@/sections/Hero";
import { Contacts } from "@/sections/Contacts";
import { Accordion } from "@/components/base/Accordion";

export default async function Home() {
  return (
    <>
      <Hero />
      <Contacts />
      <div className="container">
        <Accordion />
      </div>
    </>
  );
}
