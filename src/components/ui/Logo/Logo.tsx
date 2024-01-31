import { cn } from "@/utils/helpers";

import LogoIcon from "~/icons/logo.svg";

import content from "@/data/common.json";

import { TLogo } from "./types";

export const Logo: React.FC<TLogo> = ({ className = "" }) => {
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
