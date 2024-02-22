import { Metadata } from "next";

import { Contacts } from "@/sections/home/Contacts";
import { HeroCakes } from "@/sections/cakes/HeroCakes";

import { metadataGenerator } from "@/utils/helpers";

export async function generateMetadata(): Promise<Metadata> {
  return metadataGenerator({ page: "cakes" });
}

export default async function Cakes() {
  return (
    <>
      <HeroCakes />
      <Contacts variant="cakes" />
    </>
  );
}
