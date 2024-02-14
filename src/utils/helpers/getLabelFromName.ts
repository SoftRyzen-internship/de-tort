import { cakesFormData } from "@/components/ui/CakesOrderForm/cakesFormData";

export const getLabelFromName = (name: string) => {
  const input = cakesFormData.inputs.find((input) => input.name === name);
  const checkbox = cakesFormData.checkbox;

  if (input) {
    return input.label;
  } else if (name === checkbox.name) {
    return checkbox.label;
  }

  return "";
};
