"use client";

import { useState } from "react";

import { InfoButtonProps } from "./types";

export const InfoButton: React.FC<InfoButtonProps> = ({
  label,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(true);
    console.log(`IN PROGRESS: open modal with info ("${label}").`);
  };

  return (
    <>
      <button
        type="button"
        className={`font-fixel text-color-text-secondary text-[16px] leading-[1.4] hover:text-color-accent-primary focus-visible:text-color-accent-primary transition-all ${className}`}
        onClick={onClick}
      >
        {label}
      </button>

      {isOpen && <>{/* Modal window with info. */}</>}
    </>
  );
};
