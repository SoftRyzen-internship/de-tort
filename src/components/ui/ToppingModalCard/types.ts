import { CakeSlug, SweetsSlug } from "@/types";

export interface ToppingModalCardProps {
  onClick: () => void;
  name: string;
  description: string;
  price_double: string;
  plate: ToppingPlate[];
  slug: CakeSlug | SweetsSlug;
}
export type ToppingPlate = {
  url: string;
  desc: string;
  layers: "single" | "double";
};
