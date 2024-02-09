import { FC } from "react";

import Image from "next/image";

import { cn } from "@/utils/helpers";

import { SliderCakeCardProps } from "./types";

export const SliderCakeCard: FC<SliderCakeCardProps> = ({
  src,
  alt,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "smOnly:max-w-[440px] md:w-[704px]  xl:w-[592px] ",
        className,
      )}
    >
      <Image
        className="bg-transparent w-full rounded-[24px] "
        alt={alt}
        src={src}
        width={320}
        height={300}
      />
    </div>
  );
};
