import { Metadata } from "next";

import { DessertInfo } from "@/sections/cakes/DessertInfo";
import { Sweets } from "@/sections/home/Sweets";
import { FormCakes } from "@/sections/cakes/FormCakes";

import { fetchCake } from "@/requests";

import { metadataGenerator } from "@/utils/helpers";

import json from "@/data/cakes-assortment.json";

import { CakeSlug } from "@/types";

export const dynamicParams = false;
export const dynamic = "error";
export const revalidate = false;

export async function generateStaticParams() {
  const staticParams = json.links.map(({ slug }) => {
    return { cake: slug };
  });

  return staticParams;
}

export async function generateMetadata({
  params: { cake },
}: {
  params: {
    cake: CakeSlug;
  };
}): Promise<Metadata> {
  return metadataGenerator({ page: "cake", cake });
}

export default async function CakePage({
  params: { cake },
}: {
  params: { cake: CakeSlug };
}) {
  const data = await fetchCake(cake);

  const toppings = (data.length && data[0]?.toppings) || [];

  return (
    <>
      {data.length && <DessertInfo dessert={data[0]} />}
      <FormCakes toppings={toppings} />
      <Sweets />
    </>
  );
}
