import { CardCakes } from "@/components/ui/CardCakes";
import { SectionTitle } from "@/components/ui/SectionTitle";

import json from "@/data/cakes-assortment.json";

export const HeroCakes: React.FC = () => {
  const { links, heading } = json;
  return (
    <section className="pt-[148px] pb-[60px] md:pt-[168px] md:pb-20 xl:pb-[120px] xl:pt-[208px]">
      <div className="container">
        <SectionTitle
          text={heading}
          className="mb-10 w-[320px] text-center m-auto md:w-[420px] xl:mb-[60px] xl:w-[585px]"
          hero
        />
        <ul className="flex flex-wrap flex-col gap-8 md:flex-row">
          {links.map(({ label, slug, bgSrc }, i) => (
            <CardCakes key={i} title={label} bgSrc={bgSrc} slug={slug} />
          ))}
        </ul>
      </div>
    </section>
  );
};
