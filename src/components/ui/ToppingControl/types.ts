import { FieldValues } from "react-hook-form";

import { CakeToppingType } from "@/types";

export interface ToppingControlProps {
  field: FieldValues;
  toppings: CakeToppingType[];
  slug: string;
  isError: boolean;
  disabled?: boolean;
  placeholder?: string;
}
