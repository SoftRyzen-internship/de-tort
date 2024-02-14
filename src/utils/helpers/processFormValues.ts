import { formatDate, getLabelFromName } from "@/utils/helpers";

export function processFormValues(values: any): { [key: string]: string } {
  return Object.entries(values).reduce(
    (accumulator: any, [fieldName, value]) => {
      const label = getLabelFromName(fieldName);
      if (fieldName === "date") {
        accumulator[label] = formatDate(value?.toString() || "");
      } else if (fieldName === "consent") {
        accumulator[label] = value ? "так" : "ні";
      } else {
        accumulator[label] = value;
      }
      return accumulator;
    },
    {},
  );
}
