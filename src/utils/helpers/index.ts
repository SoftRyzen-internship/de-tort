import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export * from "./convertDate";
export * from "./formatPhone";
export * from "./formatDate";
export * from "./schema";
export * from "./getLabelFromName";
export * from "./getLastPath";
