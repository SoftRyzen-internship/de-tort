import { ReactNode } from "react";

export type TSections = "achievements" | "top" | "feedback";

export interface SliderProps {
  section: TSections;
  slides?: ReactNode[];
  customClass?: string;
  customSlideClass?: string;
}
