import { ZodSchema } from "zod";

import { CakeSlug, CakeToppingType, FieldType, SweetsSlug } from "@/types";

export interface CakesOrderFormProps {
  slug: CakeSlug | SweetsSlug;
  toppings: CakeToppingType[];
}

interface IFormField {
  name: string;
  placeholder: string;
  placeholderMiniTorts?: string;
  type: FieldType;
  label: string;
  optionalPaths: string[];
  disabledPaths: string[];
  schema: ZodSchema<any>;
}

export interface IFormConfig {
  inputs: IFormField[];
  checkbox: {
    label: string;
    description: string;
    name: string;
    message: string;
  };
  button: {
    label: string;
    labelInProgress: string;
  };
  title: string;
  messages: {
    success: string;
    error: string;
  };
}
