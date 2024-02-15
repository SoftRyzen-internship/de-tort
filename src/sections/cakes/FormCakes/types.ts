import { CakeSlug, CakeToppingType, SweetsSlug } from "@/types";

export interface FormCakesProps {
  slug: CakeSlug | SweetsSlug;
  toppings?: CakeToppingType[];
}
