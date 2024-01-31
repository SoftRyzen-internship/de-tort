import { cn } from "@/utils/helpers";

import LogoIcon from "~/icons/logo.svg";

import content from "@/data/common.json";

import { TLogo } from "./types";

export const Logo: React.FC<TLogo> = ({ className = "" }) => {
  const { companyName } = content;

  return (
    <a
      href="/"
      className={cn(
        "inline-block transition-transform focus:scale-110 hover:scale-110",
        className,
      )}
      aria-label={companyName}
    >
      <LogoIcon className="w-[58px] h-16" />
    </a>
  );
};
