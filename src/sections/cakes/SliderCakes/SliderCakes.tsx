import { FC } from "react";

import { SliderNav } from "@/components/base/SliderNav";
import { Slider } from "@/components/base/Slider";
import { SectionTitle } from "@/components/ui/SectionTitle";

import { SliderCakeCard } from "@/components/ui/SliderCakeCard";
import { ButtonLink } from "@/components/ui/ScrollBtn";

import Dollar from "~/icons/dollar-circle.svg";
import Slice from "~/icons/cake-slice.svg";
import Clock from "~/icons/clock.svg";
import Star from "~/icons/star.svg";

import bento from "@/data/slider-cakes.json";

const arr = [
  "/images/minitort-@2x.jpg",
  // "/images/bentotort-@2x.jpg",
  // "/images/middletort-@2x.jpg",
  // "/images/bigtort-@2x.jpg",
];

const {
  heading,
  button,
  caption,
  captionValue,
  termin,
  terminValue,
  decor,
  decorValue,
  price,
  priceValue,
  description,
} = bento;

const slides = arr?.map((string, idx) => (
  <SliderCakeCard key={idx} src={string} alt={"alt"} />
));

export const SliderCakes: FC = () => {
  return (
    <section className="section bg-color-bg-primary">
      <div className="container xl:flex xl:gap-[60px]">
        <div className="relative xl:w-[592px]">
          <Slider
            slides={slides}
            section="cakes"
            customClass="md:w-[704px] xl:w-[592px] mb-6 md:mb-10"
          />
          <SliderNav
            section="cakes"
            className={slides.length === 1 ? "!hidden" : ""}
          />
        </div>
        <div className="">
          <SectionTitle text={heading} className="mb-6 md:mb-8 xl:mb-6" />
          <div className="flex relative flex-col gap-2 md:gap-32 xl:gap-12 mb-6 md:mb-8 md:flex-row  font-fixel ">
            <div className="flex gap-2 relative after:-right-16 md:after:-right-6 after:absolute after:block after:bg-color-bg-cakeLine after:w-[1px] after:h-full">
              <Slice className="w-6" />
              <div className="">
                <p className="font-bold text-base leading-normal text-color-text-secondary">
                  {caption}
                </p>

                <p className="text-base leading-normal text-color-text-secondary md:text-xl xl:text-lg">
                  {captionValue}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Clock className="w-6" />
              <div className="">
                <p className="font-bold text-base leading-normal text-color-text-secondary">
                  {termin}
                </p>
                <p className="text-base leading-normal text-color-text-secondary md:text-xl xl:text-lg">
                  {terminValue}
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
                  {decor}
                </p>
                <p className="text-base leading-normal text-color-text-secondary md:text-xl xl:text-lg">
                  {decorValue}
                </p>
              </div>
            </div>
            <div className="flex gap-2 mb-2 md:mb-3">
              <Dollar className="w-6 mb-auto" />
              <div>
                <p className="font-bold text-base leading-normal text-color-text-secondary">
                  {price}
                </p>
                <p className="text-base leading-normal text-color-text-secondary md:text-xl xl:text-lg">
                  {priceValue}
                </p>
              </div>
            </div>
          </div>
          <ButtonLink
            label={button.label}
            targetName={button.target}
            className=" notXl:hidden"
          />
        </div>
      </div>
    </section>
  );
};
