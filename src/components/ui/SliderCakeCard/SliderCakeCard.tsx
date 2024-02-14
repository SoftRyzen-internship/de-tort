import Image from "next/image";

import { cn } from "@/utils/helpers";

import { SliderCakeCardProps } from "./types";

export const SliderCakeCard: React.FC<SliderCakeCardProps> = ({
  src,
  alt,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "relative xsOnly:aspect-[17/16] sm:w-[440px] sm:h-[415px] md:w-[704px] xl:w-[592px] md:h-[660px] xl:h-[555px] ",
        className,
      )}
    >
      <Image
        className="bg-transparent rounded-3xl"
        alt={alt}
        src={src}
        loading="eager"
        fill
      />
    </div>
  );
};
