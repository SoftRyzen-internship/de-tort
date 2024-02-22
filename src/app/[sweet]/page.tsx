import { Metadata } from "next";

import { Sweets } from "@/sections/home/Sweets";
import { DessertInfo } from "@/sections/cakes/DessertInfo";
import { FormCakes } from "@/sections/cakes/FormCakes";

import { fetchSweet } from "@/requests";

import { metadataGenerator } from "@/utils/helpers";

import metaSweets from "@/data/meta/sweets.json";

import { SweetsSlug } from "@/types";

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
  return metadataGenerator({ page: "sweet", sweet });
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
