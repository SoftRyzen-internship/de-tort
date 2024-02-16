import { AboutCard } from "@/components/ui/AboutCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

import IconHeart from "~/icons/heart.svg";
import IconStar from "~/icons/star.svg";
import IconGift from "~/icons/gift.svg";
import IconDrop from "~/icons/drop.svg";
import IconLightning from "~/icons/lightning.svg";

import about from "@/data/about.json";

import { IconsAbout } from "@/components/ui/AboutCard/types";

export const About: React.FC = () => {
  const { values, features, title, description } = about;

  const IconsAbout: IconsAbout = {
    1: <IconHeart />,
    2: <IconStar />,
    3: <IconGift />,
    4: <IconDrop />,
    5: <IconLightning />,
  };

  const subHeaderStyle =
    "font-unbounded mb-3 xl:mb-4 font-semibold text-[20px] xl:text-[24px] leading-normal";

  return (
    <section className="section bg-color-bg-primary">
      <div className="container text-base md:text-xl text-color-text-secondary whitespace-pre-line leading-normal md:flex md:gap-[34px] xl:gap-[240px]">
        <div className="smOnly:mb-10">
          <SectionTitle text={title} className="mb-4" />

          <p className="font-fixel mb-6 md:mb-8 xl:mb-12">{description}</p>

          <h3 className={subHeaderStyle}>{values[0].title}</h3>

          <p className="font-fixel mb-6 md:mb-8 xl:mb-10 xl:max-w-[416px]">
            {values[0].text}
          </p>

          <h3 className={subHeaderStyle}>{values[1].title}</h3>

          <p className="font-fixel">{values[1].text}</p>
        </div>
        <ul className="flex flex-col gap-4">
          {features.map((el, index) => {
            const isEven = index % 2 === 0;
            return (
              <AboutCard
                key={index}
                icon={IconsAbout[el.id.toString()]}
                text={el.text}
                isEven={isEven}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};
