import { CakeToppingType, FieldType } from "@/types";

export interface FieldProps {
  register: any;
  name: string;
  control: any;
  label: string;
  toppings: CakeToppingType[];
  slug: string;
  placeholder?: string;
  type?: FieldType | undefined;
  error?: any;
  isDisabled?: boolean;
  isOptional?: boolean;
}
