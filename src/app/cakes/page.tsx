import { Contacts } from "@/sections/Contacts";
import { HeroCakes } from "@/sections/HeroCakes";

export default async function Cakes() {
  return (
    <>
      <HeroCakes />
      <Contacts variant="cakes" />
    </>
  );
}
