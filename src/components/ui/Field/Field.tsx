import { PatternFormat, NumericFormat } from "react-number-format";

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
  slug,
}) => {
  const errorText = error && error[name];

  const inputStyles = cn("h-11 input-field", {
    "text-error border-error": errorText,
    "text-alto border-alto bg-color-bg-dead": isDisabled,
  });

  const textareaStyles = cn(
    "input-field block resize-none",
    "h-[136px] pt-3 pb-6",
    { "border-error": errorText },
  );

  const labelStyles = cn("label mb-2", {
    "text-alto": isDisabled,
    "text-mine": !isDisabled,
    "after:content-['Обовʼязково'] after:text-silver flex-between after:text-xs after:italic after:font-normal":
      !isOptional,
  });

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
              slug={slug}
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
          {type === "text" && (
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
          {type === "tel" && (
            <FormControl>
              <PatternFormat
                type="tel"
                placeholder={placeholder}
                format="+############"
                onChange={field.onChange}
                onBlur={field.onBlur}
                name={field.name}
                value={field.value}
                className={`${inputStyles}`}
                customInput={Input}
              />
            </FormControl>
          )}
          {type === "number" && (
            <FormControl>
              <NumericFormat
                placeholder={placeholder}
                allowNegative={false}
                allowLeadingZeros={false}
                decimalScale={0}
                onChange={field.onChange}
                onBlur={field.onBlur}
                className={`${inputStyles} input-reset`}
                name={field.name}
                value={field.value}
                customInput={Input}
              />
            </FormControl>
          )}
          <FormDescription className="sr-only">{label}</FormDescription>

          <FormMessage
            className={cn(
              "text-error absolute bottom-0 right-0 translate-y-full text-xs italic font-normal",
            )}
          >
            {errorText}
          </FormMessage>
        </FormItem>
      )}
    />
  );
};
