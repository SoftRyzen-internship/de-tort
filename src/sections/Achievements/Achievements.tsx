import React from "react";

import { SectionTitle } from "@/components/ui/SectionTitle";

import { Slider } from "@/components/base/Slider";
import { SliderNav } from "@/components/base/SliderNav";
import { AchievementCard } from "@/components/ui/AchievementCard";

import data from "@/data/achievement.json";

export const Achievements = () => {
  const { titleSection, cards } = data;

  const slides = cards.map(({ id, title, description }) => (
    <AchievementCard description={description} title={title} id={id} key={id} />
  ));

  return (
    <section className="section pb-[60px] md:pb-[80px] xl:pb-[120px]">
      <div className="container ">
        <div className="md:flex pb-6 md:pb-10 xl:pb-[60px]">
          <SectionTitle text={titleSection} />
          <SliderNav
            className="smOnly:hidden mdOnly:flex mdOnly:ml-auto xl:hidden"
            section="achievements"
          />
        </div>
        <Slider
          customClass=" xl:!cursor-default"
          customSlideClass="achievement-slide pt-[18px] xl:pt-[22px] smOnly:!w-full xl:!cursor-auto"
          slides={slides}
          section="achievements"
        />
        <SliderNav className="flex md:hidden" section="achievements" />
      </div>
    </section>
  );
};
