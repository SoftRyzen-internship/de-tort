import { AchievementCardProps } from "./types";

export const AchievementCard: React.FC<AchievementCardProps> = ({
  id,
  title,
  description,
}) => {
  return (
    <li className="bg-color-bg-accent p-2 rounded-3xl py-8 px-4 relative md:w-[336px] md:px-6 xl:px-8">
      <p className="font-fixel absolute top-[-18px] right-6 border-color-accent-primary border-2 text-color-accent-primary bg-color-bg-white px-2 py-0.5 rounded font-medium text-[24px] leading-[1.33]">
        #{id}
      </p>
      <h3 className="font-unbounded font-semibold text-[24px] leading-normal mb-4 text-color-text-primary xl:text-[24px] xl:font-bold">
        {title}
      </h3>
      <p className="font-fixel text-[20px] font-normal leading-normal text-color-text-black">
        {description}
      </p>
    </li>
  );
};
