"use client";

import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import { Form } from "@/components/ui/Shadcn/form";
import { Field } from "@/components/ui/Field";
import { CheckboxWrapper } from "@/components/ui/CheckBoxWrapper";
import { cakesFormData } from "@/components/ui/CakesOrderForm/cakesFormData";

import { send } from "@/actions/telegram";

import { defaultValues, generateOrderFormSchema } from "@/utils/helpers/schema";
import { processFormValues } from "@/utils/helpers/processFormValues";
import { cn, getLastPath } from "@/utils/helpers";

import { CakesOrderFormProps } from "./types";

export const CakesOrderForm: React.FC<CakesOrderFormProps> = ({
  toppings = [],
}) => {
  const slug = getLastPath(usePathname());
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  const { inputs, checkbox, button, messages } = cakesFormData;
  const orderFormSchema = generateOrderFormSchema(slug);
  const activeInputs = inputs.filter((input) => {
    const isHidden = input.hiddenPaths.includes(slug);
    return !isHidden;
  });
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

  const columnsStyle =
    activeInputs.length > 4 ? "xl:grid-cols-2" : "xl:grid-cols-1";

  return (
    <div className="relative bg-white py-10 px-[14px] md:px-[114px] xl:px-[122px] md:py-[60px] rounded-3xl border-2 border-topping-card-even">
      <h2 className="text-title mb-8 text-[20px] md:text-[28px] leading-normal text-center">
        {cakesFormData.title}
      </h2>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className={cn(
              "relative grid xl:grid-flow-col xl:grid-rows-4 gap-6 mb-8 md:mx-auto",
              columnsStyle,
            )}
          >
            {activeInputs
              .filter((input) => {
                const isHidden = input.hiddenPaths.includes(slug);
                return !isHidden;
              })
              .map((field) => {
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
                    slug={slug}
                  />
                );
              })}
          </div>
          {!checkbox.hiddenPaths.includes(slug) && (
            <CheckboxWrapper
              name={checkbox.name}
              control={control}
              register={register}
              label={checkbox.label}
              description={checkbox.description}
            />
          )}
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
    </div>
  );
};
