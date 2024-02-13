import { Metadata } from "next";

import { SliderCakes } from "@/sections/cakes/SliderCakes";
import { Sweets } from "@/sections/home/Sweets";

import { fetchCake } from "@/requests";

import json from "@/data/cakes-assortment.json";
import metaBase from "@/data/meta/base.json";
import metaCakes from "@/data/meta/cakes.json";

import { CakeSlug } from "@/types";
import { FormCakes } from "@/sections/cakes/FormCakes";
// import { FormCakes } from "@/sections/cakes/FormCakes";

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
  const baseUrl = process.env.NEXT_PUBLIC_MAIN_SITE_URL as string;

  const data = metaCakes.find(({ slug }) => slug === cake);
  const { openGraph, description, keywords } = metaBase;

  return {
    title: data?.title,
    description: data?.description ? data.description : description,
    keywords: data?.keywords ? data.keywords : keywords,
    alternates: {
      canonical: baseUrl + "cakes/" + cake + "/",
    },
    openGraph: { ...openGraph, url: baseUrl + "cakes/" + cake + "/" },
  };
}

export default async function CakePage({
  params: { cake },
}: {
  params: { cake: CakeSlug };
}) {
  const data = await fetchCake(cake);
  const slug = data[0]?.slug;
  const toppings = data[0].toppings;
  // console.log("🚀 ~ data:", data);

  return (
    <div className="bg-color-bg-primary">
      <section className="py-[120px] border-b-2">
        <div className="container">
          <p className="text-center">Current page: {cake}</p>
        </div>
      </section>
      <SliderCakes cake={data} />
      <FormCakes slug={slug} toppings={toppings} />
      <Sweets />
    </div>
  );
}
