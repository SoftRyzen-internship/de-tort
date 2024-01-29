import React from "react";
import { ClassValue } from "clsx";
import Link, { LinkProps } from "next/link";
import { cn } from "@/utils/helpers";

export type LinkButtonProps = LinkProps & {
  label: string;
  secondaryLabel?: string;
  styles?: ClassValue;
};

const buttonBaseStyles =
  "block rounded-full px-9 py-4 flex-center font-bold text-base border-color-accent-primary uppercase border-2 leading-8 md:text-xl md:leading-10 text-color-accent-primary bg-color-bg-white";
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
