import { CardCakes } from "@/components/ui/CardCakes";
import json from "@/data/cakes-assortment.json";

export const HeroCakes: React.FC = () => {
  const { links } = json;
  return (
    <ul>
      {links.map(({ label }, i) => (
        <CardCakes key={i} title={label} />
      ))}
    </ul>
  );
};
