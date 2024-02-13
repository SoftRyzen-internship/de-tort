import { cn } from "@/utils/helpers";

import { SectionTitleProps } from "./types";

export const SectionTitle: React.FC<SectionTitleProps> = ({
  text,
  hero = false,
  className = "",
}) => {
  return hero ? (
    <h1
      className={cn(
        `section-heading md:text-[44px] md:tracking-[1.76px] xl:text-[60px] xl:tracking-[2.4px] ${className}`,
      )}
    >
      {text}
    </h1>
  ) : (
    <h2
      className={cn(
        `section-heading md:text-[40px] md:tracking-[1.6px] xl:text-[60px] xl:tracking-[2.4px] ${className}`,
      )}
    >
      {text}
    </h2>
  );
};
