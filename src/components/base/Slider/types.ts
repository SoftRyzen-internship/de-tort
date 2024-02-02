export type TSections = "achievements" | "top" | "feedback";

export interface SliderProps {
  section: TSections;
  slides?: string[];
  customClass?: string;
  customSlideClass?: string;
}
