import { ZodSchema } from "zod";

export type CakeSlug =
  | "mini-cakes"
  | "bento-cakes"
  | "middle-cakes"
  | "big-cakes";

export type ImageDataType = {
  image_description: string;
  photo: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
};

export type ImageType = {
  url: string;
  desc: string;
};

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
  placeholderMiniTorts?: string;
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
