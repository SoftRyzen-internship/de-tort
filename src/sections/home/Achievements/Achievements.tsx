import { SectionTitle } from "@/components/ui/SectionTitle";
import { Slider } from "@/components/base/Slider";
import { SliderNav } from "@/components/base/SliderNav";
import { AchievementCard } from "@/components/ui/AchievementCard";

import { fetchAchievements } from "@/requests";

import data from "@/data/achievement.json";

export const Achievements: React.FC = async () => {
  const achievements = await fetchAchievements();
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
    <section className="section pb-[60px] md:pb-[80px] xl:pb-[120px]">
      <div className="container ">
        <div className="md:flex md:items-center mb-[22px] md:mb-[38px] xl:mb-[58px]">
          <SectionTitle text={titleSection} />
          <SliderNav
            className="smOnly:hidden mdOnly:flex mdOnly:ml-auto xl:hidden"
            section="achievements"
          />
        </div>

        <Slider
          customClass="xl:!cursor-default"
          customSlideClass="pt-[20px] smOnly:!w-full xl:!cursor-auto"
          slides={slides}
          section="achievements"
        />
        <SliderNav className="flex md:hidden" section="achievements" />
      </div>
    </section>
  );
};
