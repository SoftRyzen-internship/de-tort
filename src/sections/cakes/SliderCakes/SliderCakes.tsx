import { FC } from "react";

import { SliderNav } from "@/components/base/SliderNav";
import { Slider } from "@/components/base/Slider";
import { SectionTitle } from "@/components/ui/SectionTitle";

import { ToppingCard } from "@/components/ui/ToppingCard";

import Dollar from "~/icons/dollar-circle.svg";
import Slice from "~/icons/cake-slice.svg";
import Clock from "~/icons/clock.svg";
import Star from "~/icons/star.svg";

import data from "@/data/topppings.json";
const { toppings } = data;

const slides = toppings?.map(({ label, src, alt, id }, idx) => (
  <ToppingCard key={id} label={label} src={src} alt={alt} idx={idx} />
));

export const SliderCakes: FC = () => {
  return (
    <section className="section bg-color-bg-accent py-[60px] md:py-[80px] xl:py-[120px]">
      <div className="container xl:flex xl:gap-[60px]">
        <div className="relative xl:w-[592px]">
          <Slider slides={slides} section="cakes" />
          <SliderNav section="cakes" />
        </div>
        <div>
          <SectionTitle text="Бенто-торт" />
          <div className=" font-fixel md:flex">
            <div className="flex">
              <Slice className="w-6" />
              <div className="">
                <p className="font-bold text-base leading-normal text-color-text-secondary">
                  Розрахунок:
                </p>

                <p> на 2-х людей</p>
              </div>
            </div>
            <div className="flex">
              <Clock className="w-6" />
              <div className="">
                <p className="font-bold">Термін виготовлення:</p>
                <p>1 робочий день </p>
              </div>
            </div>
          </div>
          <p>
            Маленький торт 400-500 грамів, на будь-яку подію або просто так,
            індивідуальний дизайн та соковита начинка, а ще в комплекті свічка і
            ложечка!
          </p>
          <div>
            <Star className="w-6" />
            <p>Декор:</p>
            <p>напис, малюнок</p>
          </div>
          <div>
            <Dollar className="w-6" />
            <p>Ціна:</p>
            <p>600 грн - з малюнком, 700 грн - з написом</p>
          </div>
        </div>
      </div>
    </section>
  );
};
