import { AchievementCard } from "@/components/ui/AchievementCard/AchievementCard";

import json from "@/data/achievement.json";

export const AchievementCards: React.FC = () => {
  const { cards } = json;
  return (
    <ul className="flex-center xl:gap-8 ">
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