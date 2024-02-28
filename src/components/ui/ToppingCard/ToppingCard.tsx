import Image from "next/image";

import { cn, convertImage, getBase64 } from "@/utils/helpers";

import { ToppingCardProps } from "./types";

export const ToppingCard: React.FC<ToppingCardProps> = ({
  label,
  src,
  idx,
  alt,
  className = "",
}) => {
  const bgClass =
    idx % 2 === 0 ? "bg-topping-card-even" : "bg-topping-card-odd";

  return (
    <div
      className={cn(
        "smOnly:max-w-[440px] xl:w-[384px] md:w-[336px]",
        className,
      )}
    >
      <div
        className={cn(
          "mb-6 py-11 md:py-12 xl:py-[62px] rounded-[24px] ",
          bgClass,
        )}
      >
        <div className="mx-auto overflow-hidden shadow-topping-plate md:shadow-topping-plate-md xl:shadow-topping-plate-xl w-[232px] h-[232px] md:w-[240px] md:h-[240px] xl:w-[260px] xl:h-[260px] rounded-full ">
          <Image
            className="bg-transparent w-full mx-auto rounded-[32px]"
            alt={alt}
            src={src}
            width={320}
            height={320}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${getBase64(
              convertImage(320, 320, "#f5d9e2"),
            )}`}
            sizes="(max-width: 767px) 232px, (max-width: 1279px) 240px,  (min-width: 1280px) 260px"
            quality={100}
          />
        </div>
      </div>
      <p className="font-semibold uppercase line-clamp-2 text-2xl text-color-text-secondary leading-normal text-start">
        {label}
      </p>
    </div>
  );
};
