import { FC } from "react";

import { TLogo } from "@/components/ui/Logo/types";

import { cn } from "@/utils/helpers";

import LogoIcon from "../../../../public/icons/logo.svg";

import content from "@/data/logo.json";

export const Logo: FC<TLogo> = ({ className = "" }) => {
  const { companyName } = content;

  return (
    <a
      href="/"
      className={cn("group inline-block", className)}
      aria-label={companyName}
    >
      <LogoIcon className="w-[58px] h-16 flex-shrink-0" />
    </a>
  );
};
