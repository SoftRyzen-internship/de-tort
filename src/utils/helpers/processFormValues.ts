import { formatDate, getLabelFromName } from "@/utils/helpers";

export function processFormValues(values: any): { [key: string]: string } {
  return Object.entries(values).reduce(
    (accumulator: any, [fieldName, value]) => {
      const label = getLabelFromName(fieldName);
      if (fieldName === "date") {
        accumulator[label] = formatDate(value?.toString() || "");
      } else if (
        fieldName !== "consent" &&
        typeof value == "string" &&
        value.length
      ) {
        // згода не відсилається в message
        accumulator[label] = value;
      }
      return accumulator;
    },
    {},
  );
}
