// import { ReactNode } from "react";

export type TSections = "advantages" | "feedback" | "gallery" | "services";

export interface SliderProps {
  slides?: string[];
  section: TSections;
}
