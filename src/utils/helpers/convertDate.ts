export const convertDate = (date: string) => {
  // Incoming date example: 2024-01-07

  const dateObj = new Date(date);

  const res = dateObj.toLocaleString("uk-UA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return res.slice(0, res.length - 3);
  // Outcoming date example: 1 січня 2023
};
