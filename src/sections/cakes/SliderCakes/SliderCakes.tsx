import { FC } from "react";

import { SliderNav } from "@/components/base/SliderNav";
import { Slider } from "@/components/base/Slider";
import { SectionTitle } from "@/components/ui/SectionTitle";

import { ToppingCard } from "@/components/ui/ToppingCard";

import data from "@/data/topppings.json";
const { toppings } = data;

const slides = toppings?.map(({ label, src, alt, id }, idx) => (
  <ToppingCard key={id} label={label} src={src} alt={alt} idx={idx} />
));

export const SliderCakes: FC = () => {
  return (
    <section className="section bg-color-bg-accent py-[60px] md:py-[80px] xl:py-[120px]">
      <div className="container">
        <div className="relative px-6">
          <Slider slides={slides} section="cakes" />
          <SliderNav section="cakes" />
        </div>
        <SectionTitle text="Бенто-торт" />
      </div>
    </section>
  );
};
