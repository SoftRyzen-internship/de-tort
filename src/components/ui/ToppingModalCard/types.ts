export interface ToppingModalCardProps {
  onClick: () => void;
  title: string;
  description: string;
  price: number;
  weight: number;
  plate: ToppingPlate;
}
export type ToppingPlate = {
  src: string;
  alt: string;
};
