import { SliderNav } from "@/components/base/SliderNav";
import { Slider } from "@/components/base/Slider";
import { SectionTitle } from "@/components/ui/SectionTitle";

import { SliderCakeCard } from "@/components/ui/SliderCakeCard";
import { ScrollBtn } from "@/components/ui/ScrollBtn";

import Dollar from "~/icons/dollar.svg";
import Slice from "~/icons/cake-cherry.svg";
import Clock from "~/icons/clock.svg";
import Star from "~/icons/star.svg";
import Orange from "~/icons/orange-slice.svg";

import { DessertInfoProps, TImage } from "./types";

import bento from "@/data/slider-cakes.json";

export const DessertInfo: React.FC<DessertInfoProps> = ({ dessert }) => {
  const {
    title,
    portion_size,
    production_time,
    decor,
    price,
    description,
    tastes,
    images,
    slug,
  } = dessert;

  const slides = images?.map(({ url, desc }: TImage, idx: number) => (
    <SliderCakeCard key={idx} src={url} alt={desc} />
  ));

  return (
    <section className="pt-[148px] md:pt-[156px] xl:pt-[208px]">
      <div className="container xl:flex xl:gap-[60px]">
        <div className="relative mb-6 md:mb-10 md:w-[704px] md:h-[660px] xl:w-[592px] xl:h-[555px] xl:mb-0">
          <Slider slides={slides} section="desserts" />

          <SliderNav
            section="desserts"
            className={slides?.length === 1 ? "!hidden" : ""}
          />
        </div>

        <div className="xl:max-w-[564px]">
          <SectionTitle
            hero={true}
            text={title}
            className="mb-6 md:mb-8 xl:mb-6 md:!text-[40px] xl:!text-[48px] xl:!tracking-normal"
          />

          <div className="flex relative flex-col gap-2 md:gap-32 xl:gap-12 mb-6 md:mb-8 md:flex-row  font-fixel ">
            {portion_size && (
              <div className="flex gap-2 relative after:-right-16 xl:after:-right-6 after:hidden after:absolute md:after:block after:bg-color-bg-cakeLine after:w-[1px] after:h-full">
                <Slice className="w-6 flex-shrink-0" />

                <div>
                  <p className="font-bold text-base leading-normal text-color-text-secondary">
                    {portion_size.label}
                  </p>

                  <p className="text-base leading-normal text-color-text-secondary md:text-xl xl:text-lg">
                    {portion_size.size}
                  </p>
                </div>
              </div>
            )}

            <div className="flex gap-2">
              <Clock className="w-6 flex-shrink-0" />

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

          <p className="font-fixel mb-6 md:mb-8 text-base leading-normal text-color-text-secondary md:text-xl xl:text-lg">
            {description}
          </p>
          <div className="font-fixel flex flex-col gap-2 md:gap-3 xl:gap-6 xl:mb-6">
            {decor && (
              <div className="flex gap-2 ">
                <Star className="w-6 flex-shrink-0 mb-auto" />

                <div>
                  <p className="font-bold text-base leading-normal text-color-text-secondary">
                    {bento.decor}
                  </p>

                  <p className="text-base leading-normal text-color-text-secondary md:text-xl xl:text-lg">
                    {decor}
                  </p>
                </div>
              </div>
            )}

            {tastes && (
              <div className="flex gap-2 ">
                <Orange className="w-6 flex-shrink-0 mb-auto" />

                <div>
                  <p className="font-bold text-base leading-normal text-color-text-secondary">
                    {bento.tastes}
                  </p>

                  <pre className="font-fixel whitespace-pre-wrap text-base leading-normal text-color-text-secondary md:text-xl xl:text-lg">
                    {tastes}
                  </pre>
                </div>
              </div>
            )}

            {price && (
              <div className="flex gap-2">
                <Dollar className="w-6 flex-shrink-0 mb-auto" />

                <div>
                  <p className="font-bold text-base leading-normal text-color-text-secondary">
                    {bento.price}
                  </p>

                  <pre className="font-fixel whitespace-pre-wrap text-base leading-normal text-color-text-secondary md:text-xl xl:text-lg">
                    {price}
                  </pre>
                </div>
              </div>
            )}
          </div>

          <ScrollBtn
            label={
              slug === "mini-cakes" ||
              slug === "bento-cakes" ||
              slug === "middle-cakes" ||
              slug === "big-cakes"
                ? "Замовити торт"
                : "Замовити"
            }
            targetName={bento.button.target}
            className=" notXl:hidden"
          />
        </div>
      </div>
    </section>
  );
};
