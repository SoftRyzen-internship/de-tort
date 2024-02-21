import { AchievementCardProps } from "./types";

export const AchievementCard: React.FC<AchievementCardProps> = ({
  id,
  title,
  description,
}) => {
  return (
    <div className="bg-color-bg-accent p-2 rounded-3xl py-8 px-4 relative md:w-[336px] md:px-6 xl:px-8 xl:w-[384px]">
      <div className="h-[40px] font-fixel absolute top-0 -translate-y-1/2 right-6 border-color-accent-primary border-2 bg-color-bg-white px-2 rounded flex-center">
        <span className="text-color-accent-primary font-medium text-[24px] h-[24px] leading-[1.33]">
          #{id}
        </span>
      </div>

      <h3 className="font-unbounded font-semibold text-[24px] leading-normal mb-4 text-color-text-primary xl:text-[28px] xl:font-bold">
        {title}
      </h3>
      <p className="font-fixel text-[20px] font-normal leading-normal text-color-text-secondary xl:w-[310px]">
        {description}
      </p>
    </div>
  );
};
