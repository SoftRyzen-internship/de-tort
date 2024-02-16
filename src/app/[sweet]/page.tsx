import { Metadata } from "next";

import { Sweets } from "@/sections/home/Sweets";
import { DessertInfo } from "@/sections/cakes/DessertInfo";

import { fetchSweet } from "@/requests";

import metaBase from "@/data/meta/base.json";
import metaSweets from "@/data/meta/sweets.json";

import { SweetsSlug } from "@/types";
import { FormCakes } from "@/sections/cakes/FormCakes";

export const dynamicParams = false;
export const dynamic = "error";
export const revalidate = false;

export async function generateStaticParams() {
  const staticParams = metaSweets
    .filter(({ slug }) => slug !== "cakes")
    .map(({ slug }) => {
      return { sweet: slug };
    });

  return staticParams;
}

export async function generateMetadata({
  params: { sweet },
}: {
  params: {
    sweet: SweetsSlug;
  };
}): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_MAIN_SITE_URL as string;

  const data = metaSweets.find(({ slug }) => slug === sweet);
  const { openGraph, description, keywords } = metaBase;

  return {
    title: data?.title,
    description: data?.description ? data.description : description,
    keywords: data?.keywords ? data.keywords : keywords,
    alternates: {
      canonical: baseUrl + sweet + "/",
    },
    openGraph: { ...openGraph, url: baseUrl + sweet + "/" },
  };
}

export default async function SweetPage({
  params: { sweet },
}: {
  params: { sweet: SweetsSlug };
}) {
  const data = await fetchSweet(sweet);

  return (
    <>
      {data.length && <DessertInfo dessert={data[0]} />}
      <FormCakes />
      <Sweets slug={sweet} />
    </>
  );
}
