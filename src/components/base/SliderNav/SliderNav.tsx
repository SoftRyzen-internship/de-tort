import { cn } from "@/utils/helpers";

import IconLeft from "~/icons/arrow-left.svg";
import IconRight from "~/icons/arrow-right.svg";

import data from "@/data/common.json";

import { SliderNavigationProps } from "./types";

export const SliderNav: React.FC<SliderNavigationProps> = ({
  className,
  section = "toppings",
}) => {
  const { SliderButtonsAriaLabel } = data;

  return (
    <ul
      className={cn(
        "flex-center smOnly:mx-auto w-fit h-fit gap-2 smOnly:mt-6 ",
        className,
      )}
    >
      <li key="prev">
        <button
          disabled
          className={cn(`button-prev-${section} slider-button`)}
          type="button"
          aria-label={SliderButtonsAriaLabel.left}
        >
          <IconLeft className="h-[31px] w-[31px] " />
        </button>
      </li>
      <li key="next">
        <button
          className={cn(`button-next-${section} slider-button`)}
          type="button"
          aria-label={SliderButtonsAriaLabel.right}
        >
          <IconRight className="h-[31px] w-[31px] " />
        </button>
      </li>
    </ul>
  );
};
