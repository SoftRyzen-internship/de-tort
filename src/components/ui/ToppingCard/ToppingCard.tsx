import Image from "next/image";

import defaultImage from "~/images/raspberrycaramel-@x2.jpg";

import { ToppingCardProps } from "./types";

export const ToppingCard: React.FC<ToppingCardProps> = ({
  label = "груша-карамель-пекан",
  src = defaultImage,
}) => {
  return (
    <div className="bg-transparent smOnly:max-w-[320px] lg:w-[384px] md:w-[336px] lg:w-[384px] flex flex-col items-center justify-center rounded-[23px]">
      {/* 0_35px_60px_-15px_rgba(0,0,0,0.3) */}
      <div className=" overflow-hidden shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-[232px] h-[232px] md:w-[240px] md:h-[240px] lg:w-[260px] lg:h-[260px] rounded-full ">
        <Image
          className=" bg-[#EFA7C4] w-full rounded-[32px] "
          alt={label}
          src={src}
        />
      </div>
      <p className="md:font-semibold  text-2xl text-color-text-secondary leading-[34px] font-bold text-start">
        {label}
      </p>
    </div>
  );
};
