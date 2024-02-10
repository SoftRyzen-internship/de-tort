export type FieldType = "textarea" | "text" | "tel" | "calendar" | "number";

interface IFormField {
  name: string;
  placeholder: string;
  type: FieldType;
  label: string;
}

export interface IFormConfig {
  inputs: IFormField[];
  button: {
    label: string;
    labelInProgress: string;
  };
}
