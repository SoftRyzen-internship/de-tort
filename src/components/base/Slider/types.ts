import { ReactNode } from "react";

export type TSections = "achievements" | "toppings" | "feedback" | "desserts";

export interface SliderProps {
  section: TSections;
  slides: ReactNode[];
  customClass?: string;
  customSlideClass?: string;
}
