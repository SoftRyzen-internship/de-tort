import { cn } from "@/utils/helpers";

import IconLeft from "~/icons/arrow-left.svg";
import IconRight from "~/icons/arrow-right.svg";

import data from "@/data/common.json";

import { SliderNavigationProps } from "./types";

export const SliderNav: React.FC<SliderNavigationProps> = ({
  className = "",
  section,
}) => {
  const { sliderNav } = data;
  const icons = [
    <IconLeft key={0} className="h-[31px] w-[31px] " />,
    <IconRight key={1} className="h-[31px] w-[31px] " />,
  ];

  return (
    <ul
      className={cn(
        "flex-center smOnly:mx-auto w-fit h-fit gap-2 smOnly:mt-6 ",
        className,
      )}
    >
      {sliderNav?.map(({ id, ariaLabel }, idx) => (
        <li key={id}>
          <button
            className={cn(`button-${id}-${section} slider-button`)}
            type="button"
            aria-label={ariaLabel}
          >
            {icons[idx]}
          </button>
        </li>
      ))}
    </ul>
  );
};
