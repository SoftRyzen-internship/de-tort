import { SectionTitle } from "@/components/ui/SectionTitle";
import Image from "next/image";

import { LinkButton } from "@/components/ui/LinkButton";

import css from "@/sections/Hero/Hero.module.css";

export const Hero = () => {
  return (
    <section className="bg-color-bg-hero pt-[56px] pb-[60px] md:pt-[160px] xl:pt-[204px] md:pb-[182px] xl:pb-[212px] overflow-hidden">
      <div className="container relative ">
        <div className="relative md:absolute md:bottom-[-202px] mdOnly:right-0 xl:left-1/2">
          <div className="group hover:cursor-pointer translate-x-3 relative w-fit h-fit">
            <div className=" absolute z-10 w-full h-full transition-opacity opacity-0 group-hover:opacity-100">
              <Image
                src="/images/tort-sliced-@x2.webp"
                alt="sliced tort"
                fill
                className="object-cover"
                sizes="100%"
              />
            </div>
            <div className="relative z-0 w-[293px] h-[291px] md:w-[449px] md:h-[446px] xl:w-[716px] xl:h-[691px]">
              <Image
                src="/images/tort-whole-@x2.webp"
                alt="whole tort"
                fill
                className="object-cover"
                sizes="100%"
              />
            </div>
          </div>
          <div
            className={`${css.crumbs} pointer-events-none absolute bg-cover z-0 top-[34px] md:top-2 left-0 xl:top-[16px] md:left-[-130px] xl:left-[-192px] w-[306px] h-[200px] md:w-[576px] md:h-[417px] xl:w-[938px] xl:h-[696px]`}
          ></div>
        </div>
        <SectionTitle
          hero
          text="Онлайн-кондитерська"
          className="relative z-10 md:max-w-[539px] -mt-3 xl:max-w-[693px] mb-4 md:mb-6"
        />
        <p className="font-fixel text-base md:text-xl leading-normal mb-8 md:mb-[52px] md:max-w-[433px] xl:mb-[60px]">
          Спеціалізується на виробництві тортиків та інших смаколиків по
          індивідуальним замовленням!
        </p>
        <LinkButton label="Каталог тортів" href="/" className="relative z-10" />
      </div>
    </section>
  );
};
