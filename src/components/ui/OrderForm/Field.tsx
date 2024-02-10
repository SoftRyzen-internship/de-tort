// "use client";

import React from "react";
import { Input } from "@/components/ui/input";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
  FormDescription,
} from "@/components/ui/form";

import CalendarControl from "./CalendarControl";
import { FieldType } from "./types";
import ToppingControl from "./ToppingControl";
import { cn } from "@/utils/helpers";

export interface IField {
  register: any;
  name: string;
  control: any;
  label: string;
  placeholder?: string;
  type?: FieldType | undefined;
  error?: any;
  isDisabled?: boolean;
  isOptional?: boolean;
}

export const Field: React.FC<IField> = ({
  register,
  name,
  control,
  label,
  type,
  placeholder,
  error,
  isDisabled,
  isOptional,
}) => {
  const errorClass = error && error[name] && "text-red-700";
  const commonStyles = ``;

  const inputStyles = `${errorClass} ${commonStyles} h-11 input-field input-reset`;

  const textareaStyles = cn(
    "input-field grow resize-none",
    "h-[136px] pt-3 pb-6",
    commonStyles,
  );
  const labelStyles = isDisabled
    ? "text-[#EAEAEA]"
    : "text-mine text-sm leading-4 mb-2 block";
  const requiredText = isOptional ? "" : "Обовʼязково";
  const messageText = error[name] ? error[name] : requiredText;

  return (
    <FormField
      control={control}
      disabled={isDisabled}
      defaultValue=""
      name={name}
      render={({ field }) => (
        <FormItem className="relative outline outline-1  last-of-type:row-span-2 text-silver text-base leading-5 font-fixel">
          <FormLabel className={labelStyles}>{label}</FormLabel>
          {type === "calendar" && <CalendarControl field={field} />}
          {type === "topping" && (
            <ToppingControl field={field} placeholder={placeholder} />
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
                "absolute top-0 right-0 text-right text-silver text-xs italic",
                {
                  "text-red-700": error && error[name],
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
