import { ToppingCard } from "@/components/ui/ToppingCard";
import { Slider } from "@/components/base/Slider";
import { SliderNav } from "@/components/base/SliderNav";
import { SectionTitle } from "@/components/ui/SectionTitle";

import data from "@/data/common.json";

import { ToppingsProps } from "./types";

export const Toppings: React.FC<ToppingsProps> = ({ toppings }) => {
  const { sectionTitle } = data.toppings;

  // Filter dynamic data to prevent showing mistaken toppings (without double layers)
  const filteredToppings = toppings.filter(({ images }) =>
    images.find(({ layers }) => layers === "double"),
  );

  const slides = filteredToppings.map(({ name, images }, idx) => {
    const img = images.find(({ layers }) => layers === "double")!; // we are positive that "double" is available because of filtering above
    return (
      <ToppingCard
        key={idx}
        label={name}
        src={img.url}
        alt={img.desc}
        idx={idx}
      />
    );
  });

  return (
    <section className="section bg-color-bg-accent py-[60px] md:py-[80px] xl:py-[120px]">
      <div className="container">
        <div className="md:flex md:items-center mb-6 md:mb-10 xl:mb-[60px]">
          <SectionTitle text={sectionTitle} />
          <SliderNav
            className="smOnly:hidden md:flex md:ml-auto "
            section="toppings"
          />
        </div>
        <Slider
          customSlideClass="overflow-visible smOnly:!w-full"
          slides={slides}
          section="toppings"
        />
        <SliderNav className="flex md:hidden" section="toppings" />
      </div>
    </section>
  );
};
