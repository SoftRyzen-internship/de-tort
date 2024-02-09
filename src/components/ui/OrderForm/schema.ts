import * as z from "zod";

// const notEmpty = (value: string | Date | undefined | null): boolean => {
//   if (typeof value === "string") {
//     return value.trim() !== "";
//   } else if (value instanceof Date) {
//     return true;
//   }
//   return false;
// };

// export const orderFormSchema = z.object({
//   testname: z.string(),
// });
export const orderFormSchema = z.object({
  dob: z.string().nonempty(),
  // dob: z
  //   .instanceof(Date, { message: "The Date field is required." })
  //   .refine((date) => {
  //     return date >= new Date(Date.now());
  //   }, "The date must be before today"),
  // dob: z.union([z.string(), z.date()]).refine(notEmpty, {
  //   message: "Виберіть дату отримання",
  // }),
  numberOfPeople: z.string().refine((value) => value.trim() !== "", {
    message: "Необхідно указати кількість людей",
  }),
  comments: z.string(),
  phone: z.string(),
});

// export const bentoOrderFormSchema = z.object({
//   ...standardFromSchema,
//   link: z.string().optional(),
// });

export const orderDefaultValues = {
  dob: "",
  numberOfPeople: "",
  // link: "",
  // testname: "",
  phone: "",
  comments: "",
};

// export const bentoOrderDefaultValues = {
//   ...orderDefaultValues,
//   link: undefined,
// };
