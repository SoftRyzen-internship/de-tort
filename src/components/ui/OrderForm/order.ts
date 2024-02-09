import { IFormConfig } from "./types";

export const FORM_CONFIG: IFormConfig = {
  inputs: [
    {
      name: "dob",
      placeholder: "",
      type: "text",
      label: "Дата отримання:",
    },
    {
      name: "numberOfPeople",
      placeholder: "8",
      type: "number",
      label: "На яку кількість людей?",
    },
    // {
    //   name: "link",
    //   placeholder: "https://pinterest.com/cakedesign",
    //   type: "text",
    //   label: "Дизайн (посилання):",
    // },
    // {
    //   name: "testname",
    //   placeholder: "Наталія",
    //   type: "text",
    //   label: "Ваше імʼя та прізвище:",
    // },
    {
      name: "phone",
      placeholder: "+380",
      type: "tel",
      label: "Phone",
    },
    {
      name: "comments",
      placeholder: "Тут ви можете описати свою ідею",
      type: "textarea",
      label: "Коментар:",
    },
  ],
  button: {
    label: "Замовити торт",
    labelInProgress: "Відсилка...",
  },
};
