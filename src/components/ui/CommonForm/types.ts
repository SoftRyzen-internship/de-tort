import { ZodSchema } from "zod";

import { CakeToppingType, FieldType, TKeyValue } from "@/types";

export interface CommonFormProps {
  toppings?: CakeToppingType[];
}

interface IFormField {
  name: string;
  placeholders: TKeyValue;
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
    labels: TKeyValue;
    labelInProgress: string;
  };
  titles: TKeyValue;
  messages: {
    success: string;
    error: string;
  };
}
