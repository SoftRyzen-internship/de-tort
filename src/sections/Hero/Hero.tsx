import { SectionTitle } from "@/components/ui/SectionTitle";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="bg-color-bg-hero pt-[56px] pb-[60px] md:pt-[160px] xl:pt-[204px] md:pb-[182px] xl:pb-[212px] overflow-hidden md:relative">
      <div className="smOnly:pl-5 smOnly:-mb-1 md:absolute md:bottom-[-25px] xl:right-auto xl:left-1/2 xl:top-[107px] xl:bottom-auto md:right-[-11px]">
        <div className="relative mx-auto size-[81vw] md:w-[449px] md:h-[446px] xl:w-[716px] xl:h-[692px]">
          <Image
            src="/images/tort-whole-@x2.webp"
            alt="whole tort"
            fill
            className="object-cover"
            sizes="100%"
          />
        </div>
      </div>

      <div className="container relative z-10">
        <SectionTitle
          hero
          text="Онлайн-кондитерська"
          className="md:max-w-[539px] xl:max-w-[693px] mb-4 md:mb-6"
        />
        <p className="font-fixel text-base md:text-xl leading-normal mb-8 md:mb-[52px] md:max-w-[433px] xl:mb-[60px]">
          Спеціалізується на виробництві тортиків та інших смаколиків по
          індивідуальним замовленням!
        </p>
        <Link href="/" className="bg-red-100 p-4 w-fit block">
          Каталог тортів
        </Link>
      </div>
    </section>
  );
};
