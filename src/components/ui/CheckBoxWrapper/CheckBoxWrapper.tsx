import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/Shadcn/form";
import { Checkbox } from "@/components/ui/Shadcn/checkbox";

import { ICheckbox } from "./types";

export const CheckboxWrapper: React.FC<ICheckbox> = ({
  control,
  name,
  register,
  label,
  description,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      defaultValue={false}
      render={({ field }) => (
        <>
          <FormItem className="flex-center gap-2 mb-8">
            <FormControl className="flex-center p-[9.3px] ">
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className="border border-color-border-map-b rounded"
                {...register(name)}
              />
            </FormControl>
            <FormLabel className="text-[12px] font-extralight leading-[22px] transition hover:cursor-pointer">
              {label}
            </FormLabel>
            <FormDescription className="sr-only">{description}</FormDescription>
          </FormItem>
          <FormMessage
            className={`absolute bottom-[5px] text-[12px] font-extralight tracking-[0.20em] text-[#FF5757] max-md:max-w-[200px] md:bottom-[-25px]`}
          />
        </>
      )}
    />
  );
};
