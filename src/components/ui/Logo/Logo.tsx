import Image from "next/image";

import { TLogo } from "./types";

import { cn } from "@/utils/helpers";

import content from "@/data/common.json";

export const Logo: React.FC<TLogo> = ({ className = "" }) => {
  const { companyName, logo } = content;

  return (
    <a
      href="/"
      className={cn(
        "inline-block transition-transform focus:scale-110 hover:scale-110",
        className,
      )}
      aria-label={companyName}
    >
      <Image
        src={logo.path}
        alt={logo.alt}
        width={58}
        height={64}
        className="mb-4"
      />
    </a>
  );
};
