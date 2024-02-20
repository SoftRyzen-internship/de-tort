import { z } from "zod";

import { commonFormData } from "@/components/ui/CommonForm/commonFormData";

export const generateOrderFormSchema = (pathname: string) => {
  const schema = commonFormData.inputs.reduce((accumulator, current) => {
    const isOptional = current.optionalPaths.includes(pathname);
    const isDisabled = current.disabledPaths.includes(pathname);
    const isHiddden = current.hiddenPaths.includes(pathname);
    if (isDisabled || isHiddden) {
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

  if (commonFormData.checkbox.hiddenPaths.includes(pathname)) {
    return z.object(schema);
  }

  const consent = z
    .boolean()
    .refine((value) => value === true, {
      message: commonFormData.checkbox.message,
    })
    .default(false);

  const schemaWithConsent = { ...schema, consent };

  return z.object(schemaWithConsent);
};

export const defaultValues: Record<string, string> =
  commonFormData.inputs.reduce((accumulator, current) => {
    return { ...accumulator, [current.name]: "" };
  }, {});
