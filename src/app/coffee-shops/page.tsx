import { Metadata } from "next";

import { Contacts } from "@/sections/home/Contacts";

import { fetchB2bPageData, fetchContacts } from "@/requests";

import metaBase from "@/data/meta/base.json";
import metaShops from "@/data/meta/coffee-shops.json";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_MAIN_SITE_URL as string;

  const { openGraph, description, keywords } = metaBase;

  return {
    title: metaShops.title,
    description: metaShops.description || description,
    keywords: metaShops.keywords || keywords,
    alternates: {
      canonical: baseUrl + "coffee-shops" + "/",
    },
    openGraph: { ...openGraph, url: baseUrl + "coffee-shops" + "/" },
  };
}

export default async function CoffeeShopsPage() {
  const contacts = await fetchContacts();

  const { heading } = await fetchB2bPageData();

  return (
    <>
      <section className="py-[200px] border-b-2 bg-color-bg-primary">
        <div className="container text-center">{heading}</div>
      </section>

      <Contacts contacts={contacts} variant="coffee-shops" />
    </>
  );
}
