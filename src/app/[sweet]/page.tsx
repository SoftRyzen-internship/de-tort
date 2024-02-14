import { Sweets } from "@/sections/home/Sweets";

import json from "@/data/sweets-assortment.json";

import { SweetsSlug } from "@/types";

export const dynamicParams = false;
export const dynamic = "error";
export const revalidate = false;

export async function generateStaticParams() {
  const staticParams = json.map(({ slug }) => {
    return { sweet: slug };
  });

  return staticParams;
}

export default async function SweetPage({
  params: { sweet },
}: {
  params: { sweet: SweetsSlug };
}) {
  return (
    <>
      <section className="py-[240px] bg-color-bg-primary">
        <div className="container">
          <p>Current page: {sweet}</p>
        </div>
      </section>

      <Sweets />
    </>
  );
}
