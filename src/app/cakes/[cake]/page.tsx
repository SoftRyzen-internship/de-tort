import { Sweets } from "@/sections/home/Sweets";

import { fetchCake } from "@/requests/fetchCake";

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

export default async function CakePage({
  params: { cake },
}: {
  params: { cake: CakeSlug };
}) {
  const [data] = await fetchCake(cake);
  // console.log("PAGE DATA: ", data);

  return (
    <>
      <section className="py-[120px] bg-color-bg-primary border-b-2">
        <div className="container">
          <p className="text-center">Current page: {data.title || cake}</p>
        </div>
      </section>

      <Sweets />
    </>
  );
}
