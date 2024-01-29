import { FC } from "react";

import { TLogo } from "@/components/ui/Logo/types";

import { cn } from "@/utils/helpers/cn";

// import LogoIcon from "public/assets/icons/icon-logo.svg";

import content from "@/data/logo.json";

export const Logo: FC<TLogo> = ({ className = "" }) => {
  const { companyName } = content;

  return (
    <a href="/" className={cn(" ", className)} aria-label={companyName}>
      {/* <LogoIcon className="w-[58px] h-16" /> */}
      {companyName}
    </a>
  );
};
