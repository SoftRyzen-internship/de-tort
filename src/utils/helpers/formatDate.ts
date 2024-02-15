import { format } from "date-fns";
import { uk } from "date-fns/locale";

export const formatDate = (dateString: string): string => {
  const parsedDate = new Date(dateString);
  const formattedDate = format(parsedDate, "dd MMMM yyyy 'року'", {
    locale: uk,
  });
  return formattedDate;
};
