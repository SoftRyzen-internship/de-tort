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
    <li>
      <Link
        href={targetHref}
        className="group block h-[320px] smallOnly:h-full overflow-hidden rounded-3xl md:h-[364px] xl:h-[412px]  w-full text-[28px] leading-normal relative"
      >
        <Image
          src={bgSrc}
          alt={bgAlt}
          width={384}
          height={412}
          className=" overflow-hidden object-cover w-full h-full group-hover:scale-110 group-focus:scale-110 transition-transform"
        />
        <h3
          style={nameStyle}
          className="text-center w-full font-unbounded uppercase font-bold text-[28px] absolute top-10 left-1/2 -translate-x-1/2"
        >
          {name}
        </h3>
      </Link>
    </li>
  );
};
