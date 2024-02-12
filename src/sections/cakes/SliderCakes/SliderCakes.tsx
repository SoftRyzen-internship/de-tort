import { SliderNav } from "@/components/base/SliderNav";
import { Slider } from "@/components/base/Slider";
import { SectionTitle } from "@/components/ui/SectionTitle";

import { SliderCakeCard } from "@/components/ui/SliderCakeCard";
import { ButtonLink } from "@/components/ui/ScrollBtn";

import Dollar from "~/icons/dollar-circle.svg";
import Slice from "~/icons/cake-slice.svg";
import Clock from "~/icons/clock.svg";
import Star from "~/icons/star.svg";

import { SliderCakeProps, TImage } from "./types";

import bento from "@/data/slider-cakes.json";

export const SliderCakes: React.FC<SliderCakeProps> = ({ cake }) => {
  const {
    title,
    portion_size,
    production_time,
    decor,
    price,
    description,
    images,
  } = cake[0];

  const slides = images?.map(({ url, desc }: TImage, idx: number) => (
    <SliderCakeCard key={idx} src={url} alt={desc} />
  ));

  return (
    <section className="section bg-color-bg-primary">
      <div className="container xl:flex xl:gap-[60px]">
        <div className="relative xl:w-[592px]">
          <Slider
            slides={slides}
            section="cakes"
            customClass="md:w-[704px] xl:w-[592px] mb-6 md:mb-10 xlOnly:mb-0"
            customSlideClass="md:w-[660px] xl:w-[555px]"
          />
          <SliderNav
            section="cakes"
            className={slides?.length === 1 ? "!hidden" : ""}
          />
        </div>
        <div>
          <SectionTitle text={title} className="mb-6 md:mb-8 xl:mb-6" />
          <div className="flex relative flex-col gap-2 md:gap-32 xl:gap-12 mb-6 md:mb-8 md:flex-row  font-fixel ">
            <div className="flex gap-2 relative after:-right-16 xl:after:-right-6 after:hidden after:absolute md:after:block after:bg-color-bg-cakeLine after:w-[1px] after:h-full">
              <Slice className="w-6" />
              <div>
                <p className="font-bold text-base leading-normal text-color-text-secondary">
                  {portion_size?.label}
                </p>

                <p className="text-base leading-normal text-color-text-secondary md:text-xl xl:text-lg">
                  {portion_size?.size}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Clock className="w-6" />
              <div>
                <p className="font-bold text-base leading-normal text-color-text-secondary">
                  {bento.termin}
                </p>
                <p className="text-base leading-normal text-color-text-secondary md:text-xl xl:text-lg">
                  {production_time}
                </p>
              </div>
            </div>
          </div>
          <div className="font-fixel xl:mb-6">
            <p className="mb-6 md:mb-8 text-base leading-normal text-color-text-secondary md:text-xl xl:text-lg">
              {description}
            </p>
            <div className="flex gap-2 mb-2 md:mb-3 xl:mb-6">
              <Star className="w-6 mb-auto" />
              <div>
                <p className="font-bold text-base leading-normal text-color-text-secondary">
                  {bento.decor}
                </p>
                <p className="text-base leading-normal text-color-text-secondary md:text-xl xl:text-lg">
                  {decor}
                </p>
              </div>
            </div>
            <div className="flex gap-2 mb-2 md:mb-3">
              <Dollar className="w-6 mb-auto" />
              <div>
                <p className="font-bold text-base leading-normal text-color-text-secondary">
                  {bento.price}
                </p>
                <p className="text-base leading-normal text-color-text-secondary md:text-xl xl:text-lg">
                  {price}
                </p>
              </div>
            </div>
          </div>
          <ButtonLink
            label={bento.button.label}
            targetName={bento.button.target}
            className=" notXl:hidden"
          />
        </div>
      </div>
    </section>
  );
};
