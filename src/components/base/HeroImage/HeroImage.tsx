import Image from "next/image";

import css from "./HeroImage.module.css";

export const HeroImage: React.FC = () => {
  return (
    <>
      <div className="smOnly:mt-[-33px] relative md:absolute md:bottom-[-207px] mdOnly:right-0 xl:left-1/2">
        <div className="group translate-x-3 relative w-fit h-fit">
          <div className=" absolute z-10  w-full h-full transition-opacity opacity-0 group-hover:opacity-100">
            <Image
              src="/images/tort-sliced-@x2.webp"
              alt="sliced tort"
              fill
              className="object-cover"
              sizes="(max-width: 767px) 100vw, (min-width: 768px) 50vw"
            />
          </div>
          <div className="relative z-0 w-[293px] h-[291px] md:w-[449px] md:h-[446px] xl:w-[716px] xl:h-[691px]">
            <Image
              src="/images/tort-whole-@x2.webp"
              alt="whole tort"
              fill
              className="object-cover"
              sizes="(max-width: 767px) 100vw, (min-width: 768px) 50vw"
            />
          </div>
        </div>
        <div
          className={`${css.crumbs} pointer-events-none absolute bg-cover z-10 top-[34px] md:top-2 left-[-16px] xl:top-[16px] md:left-[-130px] xl:left-[-192px] w-[306px] h-[200px] md:w-[576px] md:h-[417px] xl:w-[938px] xl:h-[696px]`}
        ></div>
      </div>
    </>
  );
};
