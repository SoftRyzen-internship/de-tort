"use client";

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
// import ToppingControl from "./ToppingControl";

export interface IField {
  register: any;
  name: string;
  control: any;
  label: string;
  placeholder?: string;
  type?: FieldType | undefined;
  error?: any;
  isDisabled?: boolean;
}

export const Field: React.FC<IField> = ({
  register,
  name,
  control,
  label,
  type = "text",
  placeholder,
  error,
  isDisabled = false,
}) => {
  const errorClass = error && error[name] && "text-[#681212]";
  const commonStyles = ``;

  const inputStyles = `${errorClass} ${commonStyles} input-reset`;

  const textareaStyles = `
   w-full grow resize-none ${commonStyles}
`;
  const labelStyles = isDisabled ? "text-[#EAEAEA]" : "text-[#383838]";

  return (
    <FormField
      control={control}
      disabled={isDisabled}
      name={name}
      defaultValue=""
      render={({ field }) => (
        <FormItem className="relative">
          <FormLabel className={labelStyles}>{label}</FormLabel>
          {name === "dob" && <CalendarControl field={field} />}
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
            (type === "text" && name !== "dobs") ||
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
          <FormMessage
            className={`absolute bottom-[-20px] right-0 text-right text-[12px] font-extralight tracking-[0.20em] ${errorClass}`}
          />
        </FormItem>
      )}
    />
  );
};
