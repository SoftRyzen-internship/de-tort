import * as z from "zod";

export const orderFormSchema = z.object({
  date: z.string().min(2, { message: "✕ Потрібен День " }),
  username: z.string().min(2, { message: "✕ Потрібен Ім'я" }),

  // date: z.union([z.string(), z.date()]).refine(notEmpty, {
  //   message: "Виберіть дату отримання",
  // }),
  // numberOfPeople: z.string().refine((value) => value.trim() !== "", {
  //   message: "Необхідно указати кількість людей",
  // }),
  // comments: z.string(),
  // phone: z.string(),
});

// export const bentoOrderFormSchema = z.object({
//   ...standardFromSchema,
//   link: z.string().optional(),
// });

export const defaultValues = {
  date: "",
  username: "",
  // numberOfPeople: "",
  // phone: "",
  // comments: "",
};

// export const bentoOrderDefaultValues = {
//   ...orderDefaultValues,
//   link: undefined,
// };
