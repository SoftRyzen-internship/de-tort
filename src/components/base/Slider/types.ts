export type TSections = "advantages" | "top" | "feedback";

export interface SliderProps {
  section: TSections;
  slides?: string[];
  customClass?: string;
  customSlideClass?: string;
}
