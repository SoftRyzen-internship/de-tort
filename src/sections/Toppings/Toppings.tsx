import Image from "next/image";

import { Slider } from "@/components/base/Slider";
import { SliderNav } from "@/components/base/SliderNav";
import { SectionTitle } from "@/components/ui/SectionTitle";

import defaultImage from "~/images/raspberrycaramel-@x2.jpg";

import data from "@/data/topppings.json";

import { cn } from "@/utils/helpers";

const src = defaultImage;
const className = "";
let idx = 0;

const bgClass = idx % 2 === 0 ? " bg-[#EFA7C4] " : " bg-[#8AC4DA] ";

export const Toppings: React.FC = () => {
  const { sectionTitle, toppings } = data;

  const slides = toppings?.map(({ label, alt, id }) => {
    return (
      <div
        key={id}
        className={cn(
          "smOnly:w-[320px] xl:w-[384px] md:w-[336px] rounded-[23px] ",
          className,
        )}
      >
        <div
          className={cn("p-11 md:p-12 xl:p-[62px] rounded-[23px] ", bgClass)}
        >
          <div className=" overflow-hidden shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-[232px] h-[232px] md:w-[240px] md:h-[240px] xl:w-[260px] xl:h-[260px] rounded-full ">
            <Image
              className="bg-transparent w-full mx-auto rounded-[32px] "
              alt={alt}
              src={src}
            />
          </div>
        </div>
        <p className="mt-6 md:font-semibold uppercase text-2xl text-color-text-secondary leading-[34px] font-bold text-start">
          {label}
        </p>
      </div>
    );
  });

  return (
    <>
      <section className="section bg-color-bg-accent pb-[60px] md:pb-[80px] xl:pb-[120px]">
        <div className="container ">
          <div className="md:flex pb-6 md:pb-10 xl:pb-[60px]">
            <SectionTitle text={sectionTitle} />
            <SliderNav
              className="smOnly:hidden md:flex md:ml-auto "
              section="toppings"
            />
          </div>
          <Slider
            customClass="xl:!cursor-default"
            customSlideClass=" overflow-visible smOnly:!flex smOnly:!justify-center pt-[18px] xl:pt-[22px] smOnly:!w-full xl:!cursor-auto"
            slides={slides}
            section="toppings"
          />
          <SliderNav className="flex md:hidden" section="toppings" />
        </div>
      </section>
    </>
  );
};
