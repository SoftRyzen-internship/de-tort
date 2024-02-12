export const formatPhone = (tel: string): string => {
  return tel.replace(/[^+\d]+/g, "");
};
