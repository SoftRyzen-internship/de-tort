import { cn } from "@/utils/helpers";

import { AboutCardProps } from "./types";

import Image from "next/image";

export const AboutCard: React.FC<AboutCardProps> = ({
  imageAlt,
  imageUrl,
  text,
  isEven,
}) => {
  return (
    <li
      className={cn(
        "font-unbounded flex-start rounded-3xl px-4 xl:px-10 md:pl-6 md:pr-[18px] py-5 xl:py-8 gap-3 md:gap-4 md:w-[334px] xl:w-[488px]",
        isEven ? "bg-color-bg-extraAccent" : "bg-color-bg-accent",
      )}
    >
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={32}
        height={32}
        className="size-8 shrink-0"
      />
      <p className="text-color-text-primary font-semibold text-base xl:text-[20px] leading-normal">
        {text}
      </p>
    </li>
  );
};
