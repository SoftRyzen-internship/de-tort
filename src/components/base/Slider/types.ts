export type TSections = "advantages" | "top" | "feedback";

export interface SliderProps {
  slides?: string[];
  section: TSections;
}
