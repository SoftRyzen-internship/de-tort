import Image from "next/image";

import { Slider } from "@/components/base/Slider";
import { SliderNav } from "@/components/base/SliderNav";
import { SectionTitle } from "@/components/ui/SectionTitle";

import defaultImage from "~/images/raspberrycaramel-@x2.jpg";

import data from "@/data/topppings.json";

const src = defaultImage;

export const Toppings: React.FC = () => {
  const { sectionTitle, toppings } = data;

  const slides = toppings?.map(({ label, id }) => (
    <div
      key={id}
      className="bg-transparent smOnly:max-w-[320px] lg:w-[384px] md:w-[336px] lg:w-[384px] flex flex-col items-center justify-center"
    >
      <Image
        className=" bg-color-bg-accent w-full rounded-[32px]"
        alt={label}
        src={src}
      />
      <p className="md:font-semibold  text-2xl text-color-text-secondary leading-[34px] font-bold text-start">
        {label}
      </p>
    </div>
  ));

  return (
    <>
      <section className="section bg-color-bg-accent pb-[60px] md:pb-[80px] xl:pb-[120px]">
        <div className="container ">
          <div className="md:flex pb-6 md:pb-10 xl:pb-[60px]">
            <SectionTitle text={sectionTitle} />
            <SliderNav
              className="smOnly:hidden mdOnly:flex mdOnly:ml-auto "
              section="toppings"
            />
          </div>
          <Slider
            customClass="xl:!cursor-default"
            customSlideClass="pt-[18px] xl:pt-[22px] smOnly:!w-full xl:!cursor-auto"
            slides={slides}
            section="toppings"
          />
          <SliderNav className="flex md:hidden" section="toppings" />
        </div>
      </section>
    </>
  );
};
