import Image from "next/image";
import Link from "next/link";

import { SweetsCardProps } from "./types";

export const SweetsCard: React.FC<SweetsCardProps> = ({
  name,
  nameColor,
  bgSrc,
  bgAlt,
  targetHref,
}) => {
  const nameStyle = {
    color: nameColor,
  };

  return (
    <Link
      href={targetHref}
      className="block h-[320px] md:w-[336px] md:h-[364px] xl:w-[384px] xl:h-[412px] rounded-3xl overflow-hidden w-full text-[28px] leading-normal relative"
    >
      <Image
        src={bgSrc}
        alt={bgAlt}
        width={384}
        height={412}
        className="object-cover w-full h-full hover:scale-110 focus:scale-110 transition-transform"
      />
      <h3
        style={nameStyle}
        className="font-unbounded uppercase font-bold text-[28px] absolute top-10 left-1/2 -translate-x-1/2"
      >
        {name}
      </h3>
    </Link>
  );
};
