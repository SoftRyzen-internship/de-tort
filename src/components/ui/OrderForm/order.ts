import { IFormConfig } from "./types";

export const FORM_CONFIG: IFormConfig = {
  inputs: [
    {
      name: "date",
      placeholder: "",
      type: "calendar",
      label: "Дата отримання:",
    },
    {
      name: "username",
      placeholder: "Наталія",
      type: "text",
      label: "Ваше імʼя та прізвище:",
    },
    // {
    //   name: "numberOfPeople",
    //   placeholder: "8",
    //   type: "number",
    //   label: "На яку кількість людей?",
    // },
    // {
    //   name: "phone",
    //   placeholder: "+380",
    //   type: "tel",
    //   label: "Phone",
    // },
    // {
    //   name: "comments",
    //   placeholder: "Тут ви можете описати свою ідею",
    //   type: "textarea",
    //   label: "Коментар:",
    // },
  ],
  button: {
    label: "Замовити торт",
    labelInProgress: "Відсилка...",
  },
};
