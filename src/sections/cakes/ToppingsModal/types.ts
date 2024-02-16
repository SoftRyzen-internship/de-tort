import { CakeSlug, CakeToppingType, SweetsSlug } from "@/types";

export interface ToppingModalProps {
  onClose: () => void;
  onSelectTopping: (title: string) => void;
  toppings: CakeToppingType[];
  slug: CakeSlug | SweetsSlug | string;
}
