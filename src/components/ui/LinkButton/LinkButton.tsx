import React from "react";
import Link from "next/link";

import { cn } from "@/utils/helpers";

import { LinkButtonProps } from "./types";

const buttonBaseStyles =
  "hover:shadow-2xl focus:shadow-2xl md:hover:shadow-3xl md:focus:shadow-3xl transition rounded-full px-9 text-center flex items-center justify-center font-bold border-color-accent-primary uppercase md:text-xl md:leading-10 text-color-accent-primary bg-color-bg-white ";
const singleLabelButtonStyles =
  "py-4 border-2 md:w-fit text-base leading-loose";
const doubleLabelButtonStyles =
  "border gap-1 py-[14px] md:py-[25px] flex-col md:flex-row md:justify-between text-sm md:text-[16px] leading-normal";

const LinkButton: React.FC<LinkButtonProps> = ({
  label,
  secondaryLabel,
  href,
  styles,
  ...rest
}) => {
  const isDoubleLabel = Boolean(secondaryLabel);

  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        buttonBaseStyles,
        isDoubleLabel ? doubleLabelButtonStyles : singleLabelButtonStyles,
        styles,
      )}
    >
      <span>{label}</span>
      {isDoubleLabel && (
        <span className="font-normal normal-case">{secondaryLabel}</span>
      )}
    </Link>
  );
};

export default LinkButton;
