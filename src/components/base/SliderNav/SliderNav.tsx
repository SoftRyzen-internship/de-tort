import { cn } from "@/utils/helpers";

import IconLeft from "~/icons/arrow-left.svg";

import data from "@/data/common.json";

import { SliderNavigationProps } from "./types";

export const SliderNav: React.FC<SliderNavigationProps> = ({
  className = "",
  section,
}) => {
  const { sliderNav } = data;

  return (
    <ul
      className={cn(
        "flex-center smOnly:mx-auto w-fit h-fit gap-2 smOnly:mt-6 ",
        className,
      )}
    >
      {sliderNav?.map(({ id, ariaLabel }) => (
        <li key={id}>
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
