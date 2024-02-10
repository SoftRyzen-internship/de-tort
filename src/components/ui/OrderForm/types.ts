import { ZodSchema } from "zod";

export type FieldType =
  | "textarea"
  | "text"
  | "tel"
  | "calendar"
  | "topping"
  | "number";

interface IFormField {
  name: string;
  placeholder: string;
  type: FieldType;
  label: string;
  optionalPaths: string[];
  disabledPaths: string[];
  schema: ZodSchema<any>;
}

export interface IFormConfig {
  inputs: IFormField[];
  button: {
    label: string;
    labelInProgress: string;
  };
}
