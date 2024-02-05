// import { ReactNode } from "react";

export type TSections = "achievements" | "top" | "feedback";

export interface SliderProps {
  section: TSections;
  // slides?: ReactNode[];
  slides: any[];
  customClass?: string;
  customSlideClass?: string;
}
