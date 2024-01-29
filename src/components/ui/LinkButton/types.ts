import { ClassValue } from "clsx";
import { LinkProps } from "next/link";

export type LinkButtonProps = LinkProps & {
  label: string;
  secondaryLabel?: string;
  styles?: ClassValue;
};
