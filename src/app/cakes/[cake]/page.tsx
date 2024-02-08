import { SliderCakes } from "@/sections/cakes/SliderCakes";

import json from "@/data/cakes-assortment.json";

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
  params: { cake: string };
}) {
  console.log("slug: ", cake);

  return (
    <>
      <section className="py-[240px] bg-color-bg-primary">
        <div className="container">
          <p>Current page: {cake}</p>
        </div>
      </section>
      <SliderCakes />
    </>
  );
}
