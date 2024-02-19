import { Metadata } from "next";

import { Contacts } from "@/sections/home/Contacts";
import { HeroCakes } from "@/sections/cakes/HeroCakes";

import metaBase from "@/data/meta/base.json";
import metaSweets from "@/data/meta/sweets.json";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_MAIN_SITE_URL as string;

  const data = metaSweets.find(({ slug }) => slug === "cakes");
  const { openGraph, description, keywords } = metaBase;

  return {
    title: data?.title,
    description: data?.description ? data.description : description,
    keywords: data?.keywords ? data.keywords : keywords,
    alternates: {
      canonical: baseUrl + "cakes/",
    },
    openGraph: { ...openGraph, url: baseUrl + "cakes/" },
  };
}

export default async function Cakes() {
  return (
    <>
      <HeroCakes />
      <Contacts variant="cakes" />
    </>
  );
}
