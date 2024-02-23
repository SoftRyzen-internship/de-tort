import Image from "next/image";
import Link from "next/link";

import { SweetsCardProps } from "./types";
import { getBase64, convertImage } from "@/utils/helpers";

export const SweetsCard: React.FC<SweetsCardProps> = ({
  name,
  bgSrc,
  bgAlt,
  targetHref,
  titleClass,
}) => {
  return (
    <li>
      <Link
        href={targetHref}
        className="group block h-auto overflow-hidden rounded-3xl md:h-[364px] xl:h-[412px] w-full text-[28px] leading-normal relative"
      >
        <Image
          src={bgSrc}
          alt={bgAlt}
          width={384}
          height={412}
          className="overflow-hidden object-cover w-full h-full group-hover:scale-110 group-focus:scale-110 transition-transform"
          quality={100}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${getBase64(
            convertImage(384, 412),
          )}`}
          sizes="(max-width: 767px) 100vw, (min-width: 768px) 336px,  (min-width: 1280px) 384px"
        />
        <p
          className={`text-center w-full font-unbounded uppercase font-bold text-[28px] absolute top-10 left-1/2 -translate-x-1/2 ${titleClass}`}
        >
          {name}
        </p>
      </Link>
    </li>
  );
};
