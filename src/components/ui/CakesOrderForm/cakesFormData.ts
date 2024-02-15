import { z } from "zod";

import { IFormConfig } from "./types";

const errorText = "Невірно введене значення";

export const cakesFormData: IFormConfig = {
  inputs: [
    {
      name: "date",
      placeholder: "",
      type: "calendar",
      label: "Дата отримання:",
      optionalPaths: [],
      disabledPaths: [],
      schema: z.string().min(2, { message: errorText }),
    },
    {
      name: "numberOfPeople",
      placeholder: "8",
      type: "number",
      label: "На яку кількість людей?",
      optionalPaths: [],
      disabledPaths: [],
      schema: z
        .string()
        .refine((value) => /^\d{1,4}$/.test(value) && +value !== 0, {
          message: errorText,
        }),
    },
    {
      name: "topping",
      placeholder: "Обрати начинку",
      type: "topping",
      label: "Начинка:",
      optionalPaths: [
        "mini-cakes",
        "cupcakes",
        "cheesecakes",
        "sweet-sets",
        "cookies",
        "macaron",
        "cake-pops",
      ],
      disabledPaths: [
        "mini-cakes",
        "cupcakes",
        "cheesecakes",
        "sweet-sets",
        "cookies",
        "macaron",
        "cake-pops",
      ],
      schema: z.string().min(2, { message: errorText }),
    },
    {
      name: "link",
      placeholder: "https://pinterest.com/cakedesign",
      type: "text",
      label: "Дизайн (посилання):",
      optionalPaths: [
        "mini-cakes",
        "bento-cakes",
        "middle-cakes",
        "big-cakes",
        "mini-cakes",
        "cupcakes",
        "cheesecakes",
        "sweet-sets",
        "cookies",
        "macaron",
        "cake-pops",
      ],
      disabledPaths: [
        "mini-cakes",
        "mini-cakes",
        "cupcakes",
        "cheesecakes",
        "sweet-sets",
        "cookies",
        "macaron",
        "cake-pops",
      ],
      schema: z
        .string()
        .refine((value) => value.length <= 255, {
          message: errorText,
        })
        .refine((value) => value.length === 0 || /^[^\s]+$/.test(value), {
          message: errorText,
        })
        .refine(
          (value) =>
            value.length === 0 || /^[\p{L}\d\p{P}\p{S}]+$/u.test(value),
          {
            message: errorText,
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
      schema: z
        .string()
        .regex(/^[a-zA-Zа-яА-ЯЇїІіЄєҐґ' -]+$/, errorText)
        .max(90)
        .refine((data) => !data.includes("--"), errorText)
        .refine((data) => !data.includes(" - "), errorText)
        .refine((data) => !(data.trim().length === 0), errorText),
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
        .refine((value) => /^\+\d{11,12}$/.test(value), {
          message: errorText,
        })
        .refine((value) => value.length > 1, {
          message: errorText,
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
      schema: z
        .string()
        .regex(/^[a-zA-Zа-яА-ЯЇїІіЄєҐґ'0-9\s\p{P}\p{S}\r\n]*$/u, {
          message: errorText,
        })
        .max(1000, { message: errorText }),
    },
  ],
  checkbox: {
    name: "consent",
    label: "Даю згоду на обробку персональних данних",
    description: "Підтвердіть згоду на обробку персональних данних",
    message: "Для відсилки форми потрібна Ваша згода",
  },
  button: {
    label: "Замовити торт",
    labelInProgress: "Відсилка...",
  },
  title: "Онлайн замовлення",
  messages: {
    success: "Замовлення відправлено!",
    error: "Помилка відправлення форми",
  },
};
