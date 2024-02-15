import { FieldValues } from "react-hook-form";

import { CakeSlug, CakeToppingType, SweetsSlug } from "@/types";

export interface ToppingControlProps {
  field: FieldValues;
  toppings: CakeToppingType[];
  slug: CakeSlug | SweetsSlug;
  isError: boolean;
  disabled?: boolean;
  placeholder?: string;
}
