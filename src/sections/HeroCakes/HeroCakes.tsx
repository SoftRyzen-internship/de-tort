import { CardCakes } from "@/components/ui/CardCakes";
import json from "@/data/cakes-assortment.json";

export const HeroCakes: React.FC = () => {
  const { links } = json;
  return (
    <ul className="flex flex-wrap">
      {links.map(({ label, slug, bgSrc }, i) => (
        <CardCakes key={i} title={label} bgSrc={bgSrc} slug={slug} />
      ))}
    </ul>
  );
};
