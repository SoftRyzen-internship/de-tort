import { Contacts } from "@/sections/home/Contacts";
import { HeroCakes } from "@/sections/cakes/HeroCakes";

import { fetchContacts } from "@/requests";

export default async function Cakes() {
  const contacts = await fetchContacts();

  return (
    <>
      <HeroCakes />
      <Contacts contacts={contacts} variant="cakes" />
    </>
  );
}
