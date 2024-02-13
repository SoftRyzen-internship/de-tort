"use client";

import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import { Form } from "@/components/ui/Shadcn/form";
import { Field } from "@/components/ui/Field";
import { CheckboxWrapper } from "@/components/ui/CheckBoxWrapper";

import { CakesOrderFormProps } from "./types";

import {
  cakesFormData,
  generateOrderFormSchema,
  defaultValues,
} from "./cakesFormData";

export const CakesOrderForm: React.FC<CakesOrderFormProps> = ({
  slug,
  toppings,
}) => {
  const orderFormSchema = generateOrderFormSchema(slug);
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative grid xl:grid-flow-col xl:grid-cols-2 xl:grid-rows-4 gap-6 mb-8 md:w-[472px] xl:w-[968px] md:mx-auto">
          {cakesFormData.inputs.map((field) => {
            const isDisabled = field.disabledPaths.includes(slug);
            const isOptional = field.optionalPaths.includes(slug);
            const placeholder =
              slug === "mini-cakes" && field.name === "comments"
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
                toppings={toppings}
              />
            );
          })}
        </div>
        <CheckboxWrapper
          name="consent"
          control={control}
          register={register}
          label="Даю згоду на обробку персональних данних"
          description="Підтвердіть згоду на обробку персональних данних"
        />
        <button
          type="submit"
          className="submit-button"
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting
            ? cakesFormData.button.labelInProgress
            : cakesFormData.button.label}
        </button>
      </form>
    </Form>
  );
};