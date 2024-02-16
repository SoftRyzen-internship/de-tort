import { cn } from "@/utils/helpers";

import IconLeft from "~/icons/arrow-left.svg";

import data from "@/data/common.json";

import { SliderNavigationProps } from "./types";

export const SliderNav: React.FC<SliderNavigationProps> = ({
  className = "",
  section,
}) => {
  const { sliderNav } = data;

  const cakesStyles =
    " absolute z-[2] pointer-events-none w-full !justify-between desserts-slider-nav !m-0 ";

  return (
    <ul
      className={cn(
        "flex-center smOnly:mx-auto w-fit h-fit gap-2 smOnly:mt-6 pointer-events-none ",
        section === "desserts" && cakesStyles,
        className,
      )}
    >
      {sliderNav?.map(({ id, ariaLabel }) => (
        <li
          className={cn({
            "mx-2 md:mx-9 xl:mx-4": section === "desserts",
          })}
          key={id}
        >
          <button
            className={cn(`button-${id}-${section} slider-button`)}
            type="button"
            aria-label={ariaLabel}
          >
            <IconLeft
              key={0}
              className={cn("h-[31px] w-[31px] ", {
                "rotate-180": id === "next",
              })}
            />
          </button>
        </li>
      ))}
    </ul>
  );
};
