import data from "@/data/utils.json";

export const convertDate = (date: string) => {
  const { months } = data;

  // Incoming date example: 2024-01-07
  const arr = date.split("-");

  const year = arr[0];
  const month = months[Number(arr[1]) - 1];
  const day = Number(arr[2]);

  return `${day} ${month} ${year}`;
};
