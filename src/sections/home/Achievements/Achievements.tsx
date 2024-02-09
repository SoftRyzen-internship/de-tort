import { SectionTitle } from "@/components/ui/SectionTitle";
import { Slider } from "@/components/base/Slider";
import { SliderNav } from "@/components/base/SliderNav";
import { AchievementCard } from "@/components/ui/AchievementCard";

import data from "@/data/achievement.json";

import { AchievementsProps } from "./types";

export const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  const { titleSection, cards } = data;

  const slides = cards.map(({ id, title: titleDefault, description, type }) => {
    const title =
      achievements.find((item) => item.type === type)?.title || titleDefault;

    return (
      <AchievementCard
        description={description}
        title={title}
        id={id}
        key={id}
      />
    );
  });

  return (
    <section className="section bg-color-bg-primary pb-[60px] md:pb-[80px] xl:pb-[120px]">
      <div className="container ">
        <div className="md:flex md:items-center mb-6 md:mb-10 xl:mb-[60px]">
          <SectionTitle text={titleSection} />
          <SliderNav
            className="smOnly:hidden mdOnly:flex mdOnly:ml-auto xl:hidden"
            section="achievements"
          />
        </div>
        <Slider
          customClass="xl:!cursor-default"
          customSlideClass="pt-[18px] xl:pt-[22px] smOnly:!w-full xl:!cursor-auto"
          slides={slides}
          section="achievements"
        />
        <SliderNav className="flex md:hidden" section="achievements" />
      </div>
    </section>
  );
};
