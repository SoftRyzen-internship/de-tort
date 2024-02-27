import Image from "next/image";

import css from "./HeroImage.module.css";

import data from "@/data/common.json";
import { getBase64, convertImage } from "@/utils/helpers";

export const HeroImage: React.FC = () => {
  const { hero } = data;
  const { imageFace, imageBack } = hero;

  return (
    <div className="relative md:absolute md:bottom-[-207px] mdOnly:right-0 xl:left-1/2 group pointer-events-auto translate-x-3 w-fit h-fit smOnly:mx-auto">
      <Image
        src={imageBack.path}
        alt={imageBack.alt}
        fill
        priority
        className="object-cover absolute z-10 w-full h-full transition-opacity opacity-0 md:group-hover:opacity-100"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${getBase64(
          convertImage(716, 691, "#ffcfd3"),
        )}`}
        sizes="(max-width: 767px) 293px, (min-width: 768px) 449px,  (min-width: 1280px) 716px"
      />
      <Image
        src={imageFace.path}
        alt={imageFace.alt}
        width={716}
        height={691}
        priority
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${getBase64(
          convertImage(716, 691, "#ffcfd3"),
        )}`}
        className="object-cover relative z-0 w-[293px] h-auto md:w-[449px] xl:w-[716px]"
        sizes="(max-width: 767px) 293px, (min-width: 768px) 449px,  (min-width: 1280px) 716px"
      />
      <div
        className={`${css.crumbs} pointer-events-none absolute bg-cover no-repeat z-10 top-[34px] md:top-[-7px] left-[-17px] xl:top-[-65px] md:left-[-144px] xl:left-[-243px] w-[306px] h-[200px] md:w-[576px] md:h-[417px] xl:w-[938px] xl:h-[696px]`}
      ></div>
    </div>
  );
};
