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
          <FormItem className="flex-center gap-2 mb-8 relative">
            <FormControl className="flex-center p-[9.3px] ">
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className="border border-color-border-map-b rounded"
                {...register(name)}
              />
            </FormControl>

            <FormLabel className="label transition hover:cursor-pointer">
              {label}
            </FormLabel>

            <FormDescription className="sr-only">{description}</FormDescription>

            <FormMessage
              className={`absolute text-xs italic font-normal font-fixel -bottom-4 text-error `}
            />
          </FormItem>
        </>
      )}
    />
  );
};
