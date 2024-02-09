import { request } from "graphql-request";

import { getAchievements } from "@/requests/queries/getAchievements";
import { AchievementsDataType, AchievementsType } from "@/types/achievements";

export const fetchAchievements = async (): Promise<AchievementsType> => {
  try {
    const res: AchievementsDataType = await request(
      process.env.API_BASE_URL as string,
      getAchievements,
    );

    return res?.achievement.data?.attributes.achievement || [];
  } catch (error) {
    console.log("fetch achievements error: ", error);
    return [];
  }
};
