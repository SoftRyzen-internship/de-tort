import { Metadata } from "next";

import { Contacts } from "@/sections/home/Contacts";
import { HeroCakes } from "@/sections/cakes/HeroCakes";

import { fetchContacts } from "@/requests";

import { metadataGenerator } from "@/utils/helpers";

import metaBase from "@/data/meta/base.json";
import metaSweets from "@/data/meta/sweets.json";

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
