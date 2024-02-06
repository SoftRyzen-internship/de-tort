import Image from "next/image";

import { cn } from "@/utils/helpers";

import defaultImage from "~/images/raspberrycaramel-@x2.jpg";

import { ToppingCardProps } from "./types";

export const ToppingCard: React.FC<ToppingCardProps> = ({
  label = "груша-карамель-пекан",
  src = defaultImage,
  idx = 0,
  className = "",
  alt = "Шматочок торту на тарілці з відповідеою начинкою",
}) => {
  const bgClass = idx % 2 === 0 ? " bg-[#EFA7C4] " : " bg-[#8AC4DA] ";

  return (
    <div
      className={cn(
        "smOnly:w-[320px] xl:w-[384px] md:w-[336px] rounded-[23px] ",
        className,
      )}
    >
      <div className={cn("p-11 md:p-12 xl:p-[62px] rounded-[23px] ", bgClass)}>
        <div className=" overflow-hidden shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-[232px] h-[232px] md:w-[240px] md:h-[240px] xl:w-[260px] xl:h-[260px] rounded-full ">
          <Image
            className="bg-transparent w-full mx-auto rounded-[32px] "
            alt={alt}
            src={src}
          />
        </div>
      </div>
      <p className="mt-6 md:font-semibold uppercase text-2xl text-color-text-secondary leading-[34px] font-bold text-start">
        {label}
      </p>
    </div>
  );
};
