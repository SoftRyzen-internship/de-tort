"use client";

import React from "react";
import { usePathname } from "next/navigation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { Form } from "@/components/ui/form";
import { Field } from "./Field";
import { FORM_CONFIG, generateOrderFormSchema, defaultValues } from "./order";
import { SubmitButton } from "./SubmitButton";

const orderFormSchema = generateOrderFormSchema("bento-cakes");
export const OrderForm: React.FC = () => {
  const pathname = usePathname();
  const shortPathname = pathname.substring(pathname.lastIndexOf("/") + 1);
  const form = useForm<z.infer<typeof orderFormSchema>>({
    resolver: zodResolver(orderFormSchema),
  });

  const { formState, watch, setValue, register, handleSubmit, control } = form;
  useFormPersist("orderFormNew", {
    watch,
    setValue,
  });

  function onSubmit(values: z.infer<typeof orderFormSchema>) {
    console.log("🚀 ~ values:", values);
    form.reset(defaultValues);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative grid xl:grid-flow-col xl:grid-cols-2 xl:grid-rows-4 gap-6"
      >
        {FORM_CONFIG.inputs.map((field) => {
          const isDisabled = field.disabledPaths.includes(shortPathname);
          const isOptional = field.optionalPaths.includes(shortPathname);
          const placeholder =
            shortPathname === "mini-cakes"
              ? field.placeholderMiniTorts
              : field.placeholder;
          return (
            <Field
              key={field.name}
              register={register}
              control={control}
              name={field.name}
              placeholder={placeholder}
              type={field.type}
              label={field.label}
              error={formState.errors}
              isDisabled={isDisabled}
              isOptional={isOptional}
            />
          );
        })}

        <SubmitButton
          isSubmitting={formState.isSubmitting}
          label={FORM_CONFIG.button.label}
          labelInProgress={FORM_CONFIG.button.labelInProgress}
        />
      </form>
    </Form>
  );
};
