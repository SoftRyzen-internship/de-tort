import { z } from "zod";

import { IFormConfig } from "./types";

const errorText = "Невірно введене значення";

export const commonFormData: IFormConfig = {
  inputs: [
    {
      name: "date",
      placeholders: {
        default: "",
      },
      type: "calendar",
      label: "Дата отримання:",
      optionalPaths: [],
      disabledPaths: [],
      hiddenPaths: ["coffee-shops"],
      schema: z.string().min(2, { message: errorText }),
    },
    {
      name: "numberOfPeople",
      placeholders: {
        default: "8",
      },
      type: "number",
      label: "На яку кількість людей?",
      optionalPaths: [],
      disabledPaths: [],
      hiddenPaths: ["coffee-shops"],
      schema: z
        .string()
        .refine((value) => /^\d{1,4}$/.test(value) && +value !== 0, {
          message: errorText,
        }),
    },
    {
      name: "topping",
      placeholders: {
        default: "Обрати начинку",
      },
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
      hiddenPaths: ["coffee-shops"],
      schema: z.string().min(2, { message: errorText }),
    },
    {
      name: "link",
      placeholders: {
        default: "https://pinterest.com/cakedesign",
      },
      type: "text",
      label: "Дизайн (посилання):",
      optionalPaths: [
        "mini-cakes",
        "bento-cakes",
        "middle-cakes",
        "big-cakes",
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
      hiddenPaths: ["coffee-shops"],
      schema: z
        .string()
        .refine((value) => value.length <= 255, {
          message: "Довжина тексту не може перевищувати 255 символів",
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
      placeholders: {
        default: "Наталія",
      },
      type: "text",
      label: "Ваше імʼя та прізвище:",
      optionalPaths: [],
      disabledPaths: [],
      hiddenPaths: [],
      schema: z
        .string()
        .regex(/^[a-zA-Zа-яА-ЯЇїІіЄєҐґ' -]+$/, errorText)
        .max(90, {
          message: "Довжина тексту не може перевищувати 90 символів",
        })
        .refine((data) => !data.includes("--"), errorText)
        .refine((data) => !data.includes(" - "), errorText)
        .refine((data) => !(data.trim().length === 0), errorText),
    },
    {
      name: "phone",
      placeholders: {
        default: "+380",
      },
      type: "tel",
      label: "Телефон:",
      optionalPaths: [],
      disabledPaths: [],
      hiddenPaths: [],
      schema: z
        .string()
        .refine((value) => /^\+\d{11,12}\s*$/.test(value), {
          message: errorText,
        })
        .refine((value) => value.length > 1, {
          message: errorText,
        }),
    },
    {
      name: "comments",
      placeholders: {
        default: "Тут ви можете описати свою ідею",
        "mini-cakes": "Ви хочете замовити набір чи окремі смаки міні-тортів?",
        "coffee-shops": "Вкажіть додаткову інформацію про вашу кавʼярню",
      },
      type: "textarea",
      label: "Коментар:",
      optionalPaths: [
        "mini-cakes",
        "bento-cakes",
        "middle-cakes",
        "big-cakes",
        "coffee-shops",
      ],
      disabledPaths: [],
      hiddenPaths: [],
      schema: z
        .string()
        .regex(/^[a-zA-Zа-яА-ЯЇїІіЄєҐґ'0-9\s\p{P}\p{S}\r\n]*$/u, {
          message: errorText,
        })
        .max(1000, {
          message: "Довжина тексту не може перевищувати 1000 символів",
        }),
    },
  ],
  checkbox: {
    name: "consent",
    label: "Даю згоду на обробку персональних данних",
    description: "Підтвердіть згоду на обробку персональних данних",
    message: "Для відсилки форми потрібна Ваша згода",
    hiddenPaths: ["coffee-shops"],
  },
  button: {
    labels: {
      default: "Замовити торт",
      "coffee-shops": "Надіслати",
      cookies: "Замовити",
    },
    labelInProgress: "Відсилка...",
  },
  titles: {
    default: "Онлайн замовлення",
    "coffee-shops": "Розкажіть більше про себе",
  },
  messages: {
    success: "Форму відправлено!",
    error: "Помилка відправлення форми",
  },
};
