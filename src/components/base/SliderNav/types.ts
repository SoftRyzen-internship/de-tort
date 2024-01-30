export interface SliderNavButtonProps {
  onClick: () => void;
  direction?: "left" | "right";
}
export interface SliderNavigationProps {
  onNext: () => void;
  onPrev: () => void;
}
