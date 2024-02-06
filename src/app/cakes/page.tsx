import { Contacts } from "@/sections/Contacts";
import { HeroCakes } from "@/sections/HeroCakes";

export default async function Page() {
  return (
    <>
      <HeroCakes />
      <Contacts variant="cakes" />
    </>
  );
}
