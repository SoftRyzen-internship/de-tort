import { SectionTitle } from "@/components/ui/SectionTitle";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="bg-color-bg-hero pt-[56px] pb-[60px] md:pt-[160px] xl:pt-[204px] md:pb-[182px] xl:pb-[212px] overflow-hidden relative">
      <div className="container">
        <div className="group translate-x-3 relative w-fit sm:w-full h-fit">
          <div className=" absolute z-10 w-full h-full transition-opacity opacity-0 group-hover:opacity-100">
            <Image
              src="/images/tort-sliced-@x2.webp"
              alt="sliced tort"
              fill
              className="object-cover"
              sizes="100%"
            />
          </div>
          <div className=" relative z-0 xsOnly:w-[81vw] sm:w-full sm:h-[389px] xsOnly:h-[81vw] ">
            <Image
              src="/images/tort-whole-@x2.webp"
              alt="whole tort"
              fill
              className="object-cover"
              sizes="100%"
            />
          </div>
        </div>
        <div className="absolute crumbs top-[88px] left-0  w-full xsOnly:h-[60vw] sm:h-[300px]"></div>
        <SectionTitle
          hero
          text="Онлайн-кондитерська"
          className="relative z-10 md:max-w-[539px] -mt-3 xl:max-w-[693px] mb-4 md:mb-6"
        />
        <p className="font-fixel text-base md:text-xl leading-normal mb-8 md:mb-[52px] md:max-w-[433px] xl:mb-[60px]">
          Спеціалізується на виробництві тортиків та інших смаколиків по
          індивідуальним замовленням! Спеціалізується на виробництві тортиків та
          інших смаколиків по індивідуальним замовленням! Спеціалізується на
          виробництві тортиків та інших смаколиків по індивідуальним
          замовленням!
        </p>
        <Link href="/" className="bg-red-100 p-4 w-fit block">
          Каталог тортів
        </Link>
      </div>
    </section>
  );
};
