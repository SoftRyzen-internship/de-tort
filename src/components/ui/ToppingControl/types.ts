import { FieldValues } from "react-hook-form";

import { CakeSlug, CakeToppingType } from "@/types";

export interface ToppingControlProps {
  field: FieldValues;
  toppings: CakeToppingType[];
  slug: CakeSlug;
  isError: boolean;
  disabled?: boolean;
  placeholder?: string;
}
