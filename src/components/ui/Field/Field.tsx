import React from "react";

import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
  FormDescription,
} from "@/components/ui/Shadcn/form";
import { Input } from "@/components/ui/Shadcn/input";
import { CalendarControl } from "@/components/ui/CalendarControl";
import { ToppingControl } from "@/components/ui/ToppingControl";

import { cn } from "@/utils/helpers";

import { FieldProps } from "./types";

export const Field: React.FC<FieldProps> = ({
  register,
  name,
  control,
  label,
  type,
  placeholder,
  error,
  isDisabled,
  isOptional,
  toppings,
}) => {
  const errorClass = error && error[name] && "text-error border-error";
  const inputStyles = `${errorClass} h-11 input-field input-reset`;

  const textareaStyles = cn(
    "input-field block resize-none",
    "h-[136px] pt-3 pb-6",
    { "border-error": error && error[name] },
  );
  const labelStyles = cn("text-sm leading-4 mb-2 block text-mine", {
    "text-mine": !isDisabled && !error,
    "opacity-25": isDisabled,
    "text-error": error && error[name],
  });

  const requiredText = isOptional ? "" : "Обовʼязково";
  const messageText = error && error[name] ? error[name] : requiredText;

  return (
    <FormField
      control={control}
      disabled={isDisabled}
      defaultValue=""
      name={name}
      render={({ field }) => (
        <FormItem className="relative xl:last-of-type:row-span-2 text-mine text-base leading-5 font-fixel">
          <FormLabel className={labelStyles}>{label}</FormLabel>
          {type === "calendar" && (
            <CalendarControl field={field} isError={error && error[name]} />
          )}
          {type === "topping" && (
            <ToppingControl
              field={field}
              placeholder={placeholder}
              disabled={isDisabled}
              toppings={toppings}
              isError={error && error[name]}
            />
          )}
          {type === "textarea" && (
            <FormControl>
              <textarea
                placeholder={placeholder}
                {...field}
                {...register(name)}
                className={textareaStyles}
              />
            </FormControl>
          )}
          {(type === "tel" || type === "text" || type === "number") && (
            <FormControl>
              <Input
                {...field}
                {...register(name)}
                placeholder={placeholder}
                type={type}
                className={`${inputStyles}`}
              />
            </FormControl>
          )}
          <FormDescription className="sr-only">{label}</FormDescription>
          {messageText && (
            <FormMessage
              className={cn(
                "absolute top-0 right-0 text-right text-silver text-xs italic font-normal",
                {
                  "text-error": error && error[name],
                },
              )}
            >
              {messageText}
            </FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};
