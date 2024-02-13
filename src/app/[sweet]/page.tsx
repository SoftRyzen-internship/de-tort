// import { CakeInfo } from "@/sections/cakes/CakeInfo";
import { Sweets } from "@/sections/home/Sweets";

// import { fetchCake } from "@/requests";

// import metaBase from "@/data/meta/base.json";
// import metaCakes from "@/data/meta/cakes.json";

import json from "@/data/sweets-assortment.json";
// import sweets from "@/data/sweets.json";

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
  //   const data = await fetchCake(sweet);

  return (
    <>
      <section className="py-[240px] bg-color-bg-primary">
        <div className="container">
          <p>Current page: {sweet}</p>
        </div>
      </section>

      {/* {data.length && <CakeInfo cake={data[0]} />} */}
      <Sweets />
    </>
  );
}
