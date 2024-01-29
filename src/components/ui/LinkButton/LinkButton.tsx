import React from "react";

import Link from "next/link";
import { cn } from "@/utils/helpers";
import { LinkButtonProps } from "./types";

const buttonBaseStyles =
  "block rounded-full py-4 px-9 flex items-center justify-center leading-8 text-base uppercase text-color-accent-primary bg-color-bg-white";
const singleLabelButtonStyles = "";
const doubleLabelButtonStyles = "";

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
      {label}
      {isDoubleLabel && <span className="ml-2">{secondaryLabel}</span>}
    </Link>
  );
};

export default LinkButton;
