import { Contacts } from "@/sections/home/Contacts";
import { HeroCakes } from "@/sections/cakes/HeroCakes";

export default async function Cakes() {
  return (
    <>
      <HeroCakes />
      <Contacts variant="cakes" />
    </>
  );
}
