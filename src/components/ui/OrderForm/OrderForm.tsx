"use client";

import React from "react";
// import { usePathname } from "next/navigation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { Form } from "@/components/ui/form";
import {
  orderFormSchema,
  // bentoOrderFormSchema,
  // bentoOrderDefaultValues,
  // orderDefaultValues,
} from "./schema";
import { Field } from "./Field";
import { FORM_CONFIG } from "./order";
import { SubmitButton } from "./SubmitButton";

// const slugToDisable = "/dfg";

export const OrderForm: React.FC = () => {
  const form = useForm<z.infer<typeof orderFormSchema>>({
    resolver: zodResolver(orderFormSchema),
    // defaultValues: orderDefaultValues,
  });

  const { formState, watch, setValue, register, handleSubmit, control } = form;
  useFormPersist("orderFormNew", {
    watch,
    setValue,
  });

  function onSubmit(values: z.infer<typeof orderFormSchema>) {
    console.log("🚀 ~ values:", values);
    form.reset();
  }

  return (
    <div className="container ">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="relative ">
          {FORM_CONFIG.inputs.map((field) => {
            const isDisabled = false;
            // const isDisabled =
            //   pathname === slugToDisable && field.name === "link"
            //     ? true
            //     : false;
            const placeholder =
              "Ви хочете замовити набір чи окремі смаки міні-тортів?";
            // const placeholder =
            //   pathname === slugToDisable && field.name === "comments"
            //     ? "Ви хочете замовити набір чи окремі смаки міні-тортів?"
            //     : field.placeholder;
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
    </div>
  );
};
