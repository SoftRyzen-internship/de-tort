type AchievementTitleType = "years" | "clients" | "cakes";

type AchievementItem = {
  title: string;
  type: AchievementTitleType;
};

export type AchievementsType = AchievementItem[];

export type AchievementsDataType = {
  achievement: {
    data: {
      attributes: {
        achievement: AchievementsType;
      };
    };
  };
};
