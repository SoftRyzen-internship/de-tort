import { commonFormData } from "@/components/ui/CommonForm/commonFormData";

export const getLabelFromName = (name: string) => {
  const input = commonFormData.inputs.find((input) => input.name === name);
  const checkbox = commonFormData.checkbox;

  if (input) {
    return input.label;
  } else if (name === checkbox.name) {
    return checkbox.label;
  }

  return "";
};
