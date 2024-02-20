import { Metadata } from "next";

import { B2bHero } from "@/sections/coffee-shops/B2bHero";
import { Contacts } from "@/sections/home/Contacts";

import { fetchB2bPageData } from "@/requests";

import { metadataGenerator } from "@/utils/helpers";

export async function generateMetadata(): Promise<Metadata> {
  return metadataGenerator({ page: "b2b" });
}

export default async function CoffeeShopsPage() {
  const { heading } = await fetchB2bPageData();

  return (
    <>
      <B2bHero heading={heading} />
      <Contacts variant="coffee-shops" />
    </>
  );
}
