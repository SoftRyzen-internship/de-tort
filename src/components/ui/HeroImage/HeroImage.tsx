import Image from "next/image";

import css from "./HeroImage.module.css";

import data from "@/data/common.json";

export const HeroImage: React.FC = () => {
  const { hero } = data;
  const { imageFace, imageBack } = hero;

  return (
    <div className="relative md:absolute md:bottom-[-207px] mdOnly:right-0 xl:left-1/2 group translate-x-3 w-fit h-fit smOnly:mx-auto">
      <Image
        src={imageBack.path}
        alt={imageBack.alt}
        fill
        priority
        className="object-cover absolute z-10 w-full h-full transition-opacity opacity-0 group-hover:opacity-100"
        sizes="(max-width: 767px) 100vw, (min-width: 768px) 50vw"
      />
      <Image
        src={imageFace.path}
        alt={imageFace.alt}
        width={716}
        height={691}
        priority
        className="object-cover relative z-0 w-[293px] h-[291px] md:w-[449px] md:h-[446px] xl:w-[716px] xl:h-[691px]"
        sizes="(max-width: 767px) 100vw, (min-width: 768px) 50vw"
      />
      <div
        className={`${css.crumbs} pointer-events-none absolute bg-cover no-repeat z-10 top-[34px] md:top-2 left-[-30px] xl:top-[16px] md:left-[-144px] xl:left-[-243px] w-[306px] h-[200px] md:w-[576px] md:h-[417px] xl:w-[938px] xl:h-[696px]`}
      ></div>
    </div>
  );
};
