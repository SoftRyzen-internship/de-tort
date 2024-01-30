import Link from "next/link";

import { cn } from "@/utils/helpers";

import { LinkButtonProps } from "./types";

const buttonBaseStyles =
  "hover:shadow-2xl focus:shadow-2xl md:hover:shadow-3xl md:focus:shadow-3xl transition rounded-full px-9 text-center flex-center font-bold border-color-accent-primary uppercase md:text-xl md:leading-10 text-color-accent-primary bg-color-bg-white hover:translate-x-[2px] hover:-translate-y-[2px] md:hover:translate-x-[3px] md:hover:-translate-y-[3px] focus:translate-x-[2px] focus:-translate-y-[2px] md:focus:translate-x-[3px] md:focus:-translate-y-[3px]";
const singleLabelButtonStyles =
  "py-4 border-2 md:w-fit text-base leading-loose";
const doubleLabelButtonStyles =
  "border gap-1 py-[14px] md:py-[25px] flex-col md:flex-row md:justify-between text-sm md:text-[16px] leading-normal";

export const LinkButton: React.FC<LinkButtonProps> = ({
  label,
  secondaryLabel,
  href,
  className,
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
        className,
      )}
    >
      <span>{label}</span>
      {isDoubleLabel && (
        <span className="font-normal normal-case">{secondaryLabel}</span>
      )}
    </Link>
  );
};
