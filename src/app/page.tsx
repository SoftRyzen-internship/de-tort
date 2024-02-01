import { Hero } from "@/sections/Hero";
import { Contacts } from "@/sections/Contacts";
import { Sweets } from "@/sections/Sweets";

export default async function Home() {
  return (
    <>
      <Hero />
      <Sweets />
      <Contacts />
    </>
  );
}
