import { Metadata } from "next";

import { PublicOffer } from "@/sections/offer/PublicOffer";

import metaBase from "@/data/meta/base.json";
import metaOffer from "@/data/meta/offer.json";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_MAIN_SITE_URL as string;

  const { openGraph, description, keywords } = metaBase;

  return {
    title: metaOffer.title,
    description: metaOffer.description || description,
    keywords: metaOffer.keywords || keywords,
    alternates: {
      canonical: baseUrl + "offer" + "/",
    },
    openGraph: { ...openGraph, url: baseUrl + "offer" + "/" },
  };
}

export default async function publicOfferPage() {
  return (
    <>
      <PublicOffer heading={"Договір Публічної Оферти"} />
    </>
  );
}
