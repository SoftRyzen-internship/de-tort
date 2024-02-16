import { ZodSchema } from "zod";

import { CakeToppingType, FieldType } from "@/types";

export interface CakesOrderFormProps {
  toppings?: CakeToppingType[];
}

interface IFormField {
  name: string;
  placeholder: string;
  placeholderMiniTorts?: string;
  type: FieldType;
  label: string;
  optionalPaths: string[];
  disabledPaths: string[];
  hiddenPaths: string[];
  schema: ZodSchema<any>;
}

export interface IFormConfig {
  inputs: IFormField[];
  checkbox: {
    label: string;
    description: string;
    name: string;
    message: string;
    hiddenPaths: string[];
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
