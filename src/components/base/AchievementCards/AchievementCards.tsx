import { AchievementCard } from "@/components/ui/AchievementCard";

import json from "@/data/achievement.json";

export const AchievementCards: React.FC = () => {
  const { cards } = json;

  return (
    //змінити стилі при появі слайдера
    <ul className="flex-center flex-wrap gap-8 xl:gap-8 ">
      {cards.map(({ id, title, description }) => (
        <AchievementCard
          key={id}
          id={id}
          title={title}
          description={description}
        />
      ))}
    </ul>
  );
};
