import { z } from "zod";

import { cakesFormData } from "@/components/ui/CakesOrderForm/cakesFormData";

export const generateOrderFormSchema = (pathname: string) => {
  const schema = cakesFormData.inputs.reduce((accumulator, current) => {
    const isOptional = current.optionalPaths.includes(pathname);
    const isDisabled = current.disabledPaths.includes(pathname);
    if (isDisabled) {
      return { ...accumulator };
    }
    const schemaForOptional = isDisabled
      ? z.string()
      : current.schema.optional();
    return {
      ...accumulator,
      [current.name]: isOptional ? schemaForOptional : current.schema,
    };
  }, {});

  const consent = z
    .boolean()
    .refine((value) => value === true, {
      message: cakesFormData.checkbox.message,
    })
    .default(false);

  const schemaWithConsent = { ...schema, consent };

  return z.object(schemaWithConsent);
};

export const defaultValues: Record<string, string> =
  cakesFormData.inputs.reduce((accumulator, current) => {
    return { ...accumulator, [current.name]: "" };
  }, {});
