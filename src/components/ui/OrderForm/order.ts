import { z } from "zod";
import { IFormConfig } from "./types";

export const FORM_CONFIG: IFormConfig = {
  inputs: [
    {
      name: "date",
      placeholder: "",
      type: "calendar",
      label: "Дата отримання:",
      optionalPaths: ["mini-cakes"],
      disabledPaths: [],
      schema: z.string().min(2, { message: "✕ Потрібна дата " }),
    },
    {
      name: "numberOfPeople",
      placeholder: "8",
      type: "number",
      label: "На яку кількість людей?",
      optionalPaths: [],
      disabledPaths: [],
      schema: z.string().refine((value) => value.trim() !== "", {
        message: "Необхідно указати кількість людей",
      }),
    },
    {
      name: "topping",
      placeholder: "Обрати начинку",
      type: "topping",
      label: "Начинка:",
      optionalPaths: ["mini-cakes"],
      disabledPaths: ["mini-cakes"],
      schema: z.string().min(2, { message: "✕ Потрібна начінка" }),
    },
    {
      name: "link",
      placeholder: "https://pinterest.com/cakedesign",
      type: "text",
      label: "Дизайн (посилання):",
      optionalPaths: ["mini-cakes", "bento-cakes", "middle-cakes", "big-cakes"],
      disabledPaths: ["mini-cakes"],
      schema: z.string(),
    },
    {
      name: "username",
      placeholder: "Наталія",
      type: "text",
      label: "Ваше імʼя та прізвище:",
      optionalPaths: [],
      disabledPaths: [],
      schema: z.string().min(2, { message: "✕ Потрібен Ім'я" }),
    },
    {
      name: "phone",
      placeholder: "+380",
      type: "tel",
      label: "Телефон:",
      optionalPaths: [],
      disabledPaths: [],
      schema: z.string().min(2, { message: "✕ Потрібен телефон" }),
    },
    {
      name: "comments",
      placeholder: "Тут ви можете описати свою ідею",
      placeholderMiniTorts:
        "Ви хочете замовити набір чи окремі смаки міні-тортів?",
      type: "textarea",
      label: "Коментар:",
      optionalPaths: ["mini-cakes", "bento-cakes", "middle-cakes", "big-cakes"],
      disabledPaths: [],
      schema: z.string(),
    },
  ],
  button: {
    label: "Замовити торт",
    labelInProgress: "Відсилка...",
  },
};

export const defaultValues: Record<string, string> = FORM_CONFIG.inputs.reduce(
  (accumulator, current) => ({ ...accumulator, [current.name]: "" }),
  {},
);

export const generateOrderFormSchema = (path: string) => {
  return z.object(
    FORM_CONFIG.inputs.reduce((accumulator, current) => {
      const isOptional = current.optionalPaths.includes(path);
      return {
        ...accumulator,
        [current.name]: isOptional ? current.schema.optional() : current.schema,
      };
    }, {}),
  );
};
