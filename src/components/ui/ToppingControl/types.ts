import { FieldValues } from "react-hook-form";

import { CakeToppingType } from "@/types";

export interface ToppingControlProps {
  field: FieldValues;
  placeholder?: string;
  disabled?: boolean;
  toppings: CakeToppingType[];
  isError: boolean;
}
