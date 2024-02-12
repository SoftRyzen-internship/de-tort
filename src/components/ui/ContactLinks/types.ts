import { ContactsType } from "@/types";

export type TContacts = {
  variant: "header" | "footer" | "phone"; // add 'phone' like a variant for contacts section
  data: ContactsType;
  className?: string;
};
