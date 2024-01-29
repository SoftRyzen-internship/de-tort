import React from "react";
import { ClassValue } from "clsx";
import Link, { LinkProps } from "next/link";
import { cn } from "@/utils/helpers";

export type LinkButtonProps = LinkProps & {
  label: string;
  secondaryLabel?: string;
  styles?: ClassValue;
};

const buttonBaseStyles = "inline-block rounded px-4 py-2 text-white";
const singleLabelButtonStyles = "bg-blue-500 hover:bg-blue-600";
const doubleLabelButtonStyles = "bg-green-500 hover:bg-green-600";

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
