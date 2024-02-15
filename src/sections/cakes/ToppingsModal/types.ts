import { CakeSlug, CakeToppingType } from "@/types";

export interface ToppingModalProps {
  onClose: () => void;
  onSelectTopping: (title: string) => void;
  toppings: CakeToppingType[];
  slug: CakeSlug;
}
