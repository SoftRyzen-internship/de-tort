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
  type = "text",
  placeholder,
  error,
  isDisabled,
  isOptional,
}) => {
  const errorClass = error && error[name] && "text-[#681212]";
  const commonStyles = ``;

  const inputStyles = `${errorClass} ${commonStyles} input-reset`;

  const textareaStyles = `
   w-full grow resize-none ${commonStyles}
`;
  const labelStyles = isDisabled ? "text-[#EAEAEA]" : "text-[#383838]";

  const requiredStext = isOptional ? "" : "Обовʼязково";
  const messageText = error[name] ? error[name] : requiredStext;

  return (
    <FormField
      control={control}
      disabled={isDisabled}
      name={name}
      render={({ field }) => (
        <FormItem className="relative">
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
          {(type === "tel" ||
            (type === "text" && name !== "dob") ||
            type === "number") && (
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
              className={`absolute bottom-[-20px] right-0 text-right ${errorClass}`}
            >
              {messageText}
            </FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};
