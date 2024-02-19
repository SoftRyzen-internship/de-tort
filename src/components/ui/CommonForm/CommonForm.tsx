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
import { commonFormData } from "@/components/ui/CommonForm/commonFormData";

import { sendMessage } from "@/actions/sendMessage";

import { defaultValues, generateOrderFormSchema } from "@/utils/helpers/schema";
import { processFormValues } from "@/utils/helpers/processFormValues";
import { cn, getLastPath, getValue } from "@/utils/helpers";

import { CommonFormProps } from "./types";

export const CommonForm: React.FC<CommonFormProps> = ({ toppings = [] }) => {
  const slug = getLastPath(usePathname());
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  const { inputs, checkbox, button, messages, slugTitle } = commonFormData;
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
    const valuesWithCategory = { [slugTitle]: slug, ...processedValues };
    const result = await sendMessage(valuesWithCategory);
    setResultMessage(result ? messages.success : messages.error);
    form.reset(defaultValues);
    setTimeout(() => {
      setResultMessage(null);
    }, 5000);
  }

  const title = getValue(commonFormData.titles, slug);
  const buttonText = getValue(commonFormData.button.labels, slug);

  return (
    <div className="relative bg-white py-10 px-[14px] md:px-[114px] xl:px-[122px] md:py-[60px] rounded-3xl border-2 border-topping-card-even">
      <h3 className="text-title mb-8 text-[20px] md:text-[28px] leading-normal text-center">
        {title}
      </h3>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative grid xl:grid-flow-col xl:grid-rows-4 gap-6 mb-8 md:mx-auto xl:grid-cols-auto xl:justify-items-center">
            {inputs
              .filter((input) => !input.hiddenPaths.includes(slug))
              .map((field) => {
                const isDisabled = field.disabledPaths.includes(slug);

                const isOptional = field.optionalPaths.includes(slug);

                const placeholder = getValue(field.placeholders, slug);

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
            {formState.isSubmitting ? button.labelInProgress : buttonText}
          </button>
          {resultMessage && (
            <p
              className={cn("message", {
                "text-success": resultMessage.includes(messages.success),
                "text-error": !resultMessage.includes(messages.success),
              })}
            >
              {resultMessage}
            </p>
          )}
        </form>
      </Form>
    </div>
  );
};
