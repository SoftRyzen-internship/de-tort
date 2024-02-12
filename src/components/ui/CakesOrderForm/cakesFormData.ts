import { z } from "zod";

import { IFormConfig } from "@/types";

export const cakesFormData: IFormConfig = {
  inputs: [
    {
      name: "date",
      placeholder: "",
      type: "calendar",
      label: "Дата отримання:",
      optionalPaths: [],
      disabledPaths: [],
      schema: z.string().min(2, { message: "✕ Виберіть дату..." }),
    },
    {
      name: "numberOfPeople",
      placeholder: "8",
      type: "number",
      label: "На яку кількість людей?",
      optionalPaths: [],
      disabledPaths: [],
      schema: z.string().refine((value) => /^\d{1,4}$/.test(value), {
        message: "✕ Заповніть кількість (не більше 4 цифр)",
      }),
    },
    {
      name: "topping",
      placeholder: "Обрати начинку",
      type: "topping",
      label: "Начинка:",
      optionalPaths: ["mini-cakes"],
      disabledPaths: ["mini-cakes"],
      schema: z.string().min(2, { message: "✕ Потрібна начінка..." }),
    },
    {
      name: "link",
      placeholder: "https://pinterest.com/cakedesign",
      type: "text",
      label: "Дизайн (посилання):",
      optionalPaths: ["mini-cakes", "bento-cakes", "middle-cakes", "big-cakes"],
      disabledPaths: ["mini-cakes"],
      schema: z
        .string()
        .refine((value) => value.length <= 255, {
          message: "✕ Максимальна кількість символів для 'Дизайн' - 255",
        })
        .refine((value) => value.length === 0 || /^[^\s]+$/.test(value), {
          message: "✕ Поле 'Дизайн' не повинно містити пробіли",
        })
        .refine(
          (value) =>
            value.length === 0 || /^[\p{L}\d\p{P}\p{S}]+$/u.test(value),
          {
            message: "✕ Недопустимі символи...",
          },
        ),
    },
    {
      name: "username",
      placeholder: "Наталія",
      type: "text",
      label: "Ваше імʼя та прізвище:",
      optionalPaths: [],
      disabledPaths: [],
      schema: z.string().min(2, { message: "✕ Потрібне ім'я..." }),
    },
    {
      name: "phone",
      placeholder: "+380",
      type: "tel",
      label: "Телефон:",
      optionalPaths: [],
      disabledPaths: [],
      schema: z
        .string()
        .refine((value) => /^\+\d{12}$/.test(value), {
          message: "✕ Потрібен телефон у форматі +380...",
        })
        .refine((value) => value.length > 1, {
          message: "✕ Потрібен телефон...",
        }),
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

export const defaultValues: Record<string, string> =
  cakesFormData.inputs.reduce((accumulator, current) => {
    return { ...accumulator, [current.name]: "" };
  }, {});

export const generateOrderFormSchema = (pathname: string) => {
  return z.object(
    cakesFormData.inputs.reduce((accumulator, current) => {
      const isOptional = current.optionalPaths.includes(pathname);
      const isDisabled = current.disabledPaths.includes(pathname);
      if (isDisabled) {
        return { ...accumulator };
      }
      const schemaForOptional = isDisabled
        ? z.string()
        : current.schema.optional();
      return {
        ...accumulator,
        [current.name]: isOptional ? schemaForOptional : current.schema,
      };
    }, {}),
  );
};
