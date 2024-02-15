import { Metadata } from "next";

import { Sweets } from "@/sections/home/Sweets";
import { DessertInfo } from "@/sections/cakes/DessertInfo";

import { fetchSweet } from "@/requests";

import metaBase from "@/data/meta/base.json";
import metaSweets from "@/data/meta/sweets.json";

import { SweetsSlug } from "@/types";

export const dynamicParams = false;
export const dynamic = "error";
export const revalidate = false;

export async function generateStaticParams() {
  const staticParams = metaSweets.map(({ slug }) => {
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
  console.log("DATA: ", data);

  return (
    <>
      <section className="py-[240px] bg-color-bg-primary">
        <div className="container">
          <p>Current page: {sweet}</p>
        </div>
      </section>
      {data.length && <DessertInfo dessert={data[0]} />}
      <Sweets slug={sweet} />
    </>
  );
}
