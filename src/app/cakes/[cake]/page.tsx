import { Sweets } from "@/sections/home/Sweets";

import { fetchCake } from "@/requests";

import json from "@/data/cakes-assortment.json";

import { CakeSlug } from "@/types";
import { FormCakes } from "@/sections/cakes/FormCakes";

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
  const data = await fetchCake(cake);

  return (
    <div className="bg-color-bg-primary">
      <section className="py-[120px] border-b-2">
        <div className="container">
          <p className="text-center">Current page: {cake}</p>
        </div>
      </section>
      <FormCakes slug={data[0].slug} toppings={data[0].toppings} />
      <Sweets />
    </div>
  );
}
