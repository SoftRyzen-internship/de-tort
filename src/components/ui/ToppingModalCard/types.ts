export interface ToppingModalCardProps {
  onClick: () => void;
  name: string;
  description: string;
  price_double: string;
  plate: ToppingPlate[];
}
export type ToppingPlate = {
  url: string;
  desc: string;
  layers: "single" | "double";
};
