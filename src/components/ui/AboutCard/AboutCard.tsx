import { cn } from "@/utils/helpers";

import { AboutCardProps } from "./types";

export const AboutCard: React.FC<AboutCardProps> = ({ icon, text, isEven }) => {
  return (
    <li
      className={cn(
        "font-unbounded flex-start rounded-3xl px-4 xl:px-10 md:pl-6 md:pr-[18px] py-5 xl:py-8 gap-3 md:gap-4 md:w-[334px] xl:w-[488px]",
        isEven ? "bg-color-bg-extraAccent" : "bg-color-bg-accent",
      )}
    >
      <span className="w-8 h-8 flex justify-center">{icon}</span>

      <p className="text-color-text-primary font-semibold text-base xl:text-[20px] leading-normal">
        {text}
      </p>
    </li>
  );
};
