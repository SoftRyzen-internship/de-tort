import Image from "next/image";

import { cn } from "@/utils/helpers";

import content from "@/data/common.json";

import { TLogo } from "./types";

export const Logo: React.FC<TLogo> = ({ className = "" }) => {
  const { companyName, logo } = content;

  return (
    <a
      href="/"
      className={cn(
        "inline-block transition-transform focus:scale-110 hover:scale-110 relative z-10",
        className,
      )}
      aria-label={companyName}
    >
      <Image src={logo.path} alt={logo.alt} width={58} height={64} />
    </a>
  );
};
