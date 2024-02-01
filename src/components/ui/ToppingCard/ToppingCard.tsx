import Image from "next/image";

import defaultImage from "~/images/raspberrycaramel-@x2.jpg";

import { ToppingCardProps } from "./types";

export const ToppingCard: React.FC<ToppingCardProps> = ({
  label = "груша-карамель-пекан",
  src = defaultImage,
}) => {
  return (
    <div className="bg-transparent smOnly:max-w-[320px] lg:w-[384px] md:w-[336px] lg:w-[384px] flex flex-col items-center justify-center">
      <Image
        className=" bg-[#EFA7C4] w-full rounded-[32px]"
        alt={label}
        src={src}
      />
      <p className="md:font-semibold  text-2xl text-color-text-secondary leading-[34px] font-bold text-start">
        {label}
      </p>
    </div>
  );
};
