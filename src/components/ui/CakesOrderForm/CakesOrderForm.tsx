"use client";

import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import { Form } from "@/components/ui/Shadcn/form";
import { Field } from "@/components/ui/Field";
import { CheckboxWrapper } from "@/components/ui/CheckBoxWrapper";

import { CakesOrderFormProps } from "./types";

import { cakesFormData } from "./cakesFormData";
import { defaultValues, generateOrderFormSchema } from "@/utils/helpers/schema";
import { processFormValues } from "@/utils/helpers/processFormValues";
import { cn } from "@/utils/helpers";
import { send } from "@/actions/telegram";

export const CakesOrderForm: React.FC<CakesOrderFormProps> = ({
  slug,
  toppings,
}) => {
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  const { inputs, checkbox, button, messages } = cakesFormData;
  const orderFormSchema = generateOrderFormSchema(slug);
  const form = useForm<z.infer<typeof orderFormSchema>>({
    resolver: zodResolver(orderFormSchema),
  });

  const { formState, watch, setValue, register, handleSubmit, control } = form;
  useFormPersist(`order-${slug}`, {
    watch,
    setValue,
    exclude: [checkbox.name],
  });

  async function onSubmit(values: z.infer<typeof orderFormSchema>) {
    const processedValues = processFormValues(values);
    const result = await send(processedValues);
    setResultMessage(result ? messages.success : messages.error);
    form.reset(defaultValues);
    setTimeout(() => {
      setResultMessage(null);
    }, 5000);
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative grid xl:grid-flow-col xl:grid-cols-2 xl:grid-rows-4 gap-6 mb-8 md:mx-auto">
          {inputs.map((field) => {
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
          name={checkbox.name}
          control={control}
          register={register}
          label={checkbox.label}
          description={checkbox.description}
        />
        <button
          type="submit"
          className="submit-button"
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? button.labelInProgress : button.label}
        </button>
        {resultMessage && (
          <h3
            className={cn("message", {
              "text-success": resultMessage.includes(messages.success),
              "text-error": !resultMessage.includes(messages.success),
            })}
          >
            {resultMessage}
          </h3>
        )}
      </form>
    </Form>
  );
};
