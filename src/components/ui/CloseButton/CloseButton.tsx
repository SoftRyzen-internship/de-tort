"use client";

import IconClose from "~/icons/close.svg";

import { CloseButtonProps } from "./types";

export const CloseButton: React.FC<CloseButtonProps> = ({
  onClick,
  ariaLabel,
  className = "",
}) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={`group w-12 h-12 xl:w-14 xl:h-14 flex justify-center items-center bg-color-accent-primary rounded-lg ${className}`}
    >
      <IconClose className="w-6 h-6 group-hover:scale-110 group-focus-visible:scale-110 transition-all" />
    </button>
  );
};
