export const convertDate = (date: string) => {
  const dateObj = new Date(date);

  const res = dateObj.toLocaleString("uk-UA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return res.slice(0, res.length - 3);
};
