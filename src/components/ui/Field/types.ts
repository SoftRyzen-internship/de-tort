import { CakeSlug, CakeToppingType, FieldType, SweetsSlug } from "@/types";

export interface FieldProps {
  register: any;
  name: string;
  control: any;
  label: string;
  toppings: CakeToppingType[];
  placeholder?: string;
  type?: FieldType | undefined;
  error?: any;
  isDisabled?: boolean;
  isOptional?: boolean;
  slug: CakeSlug | SweetsSlug;
}
