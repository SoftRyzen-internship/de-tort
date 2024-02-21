import { cn } from "@/utils/helpers";

import { LogoIcon } from "@/components/ui/LogoIcon";

import content from "@/data/common.json";

import { TLogo } from "./types";

export const Logo: React.FC<TLogo> = ({ className = "" }) => {
  const { companyName } = content;

  return (
    <a
      href="/"
      className={cn(
        "inline-block transition-transform focus:scale-110 hover:scale-110 relative z-10",
        className,
      )}
      aria-label={companyName}
    >
      <LogoIcon />
    </a>
  );
};
