import Image from "next/image";

import { cn, convertImage, getBase64 } from "@/utils/helpers";

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
        className="bg-transparent rounded-3xl object-cover"
        alt={alt}
        src={src}
        loading="eager"
        sizes="(max-width: 479px) 100vw, (max-width: 768px) 440px ,(max-width: 1279px) 704px, (min-width: 1280px) 592px"
        priority
        quality={100}
        fill
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${getBase64(
          convertImage(592, 555),
        )}`}
      />
    </div>
  );
};
