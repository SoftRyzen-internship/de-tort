import { LinkProps } from "next/link";
import { ClassValue } from "clsx";

export type LinkButtonProps = LinkProps & {
  label: string;
  secondaryLabel?: string;
  className?: ClassValue;
};
