import { cn } from "@/utils/helpers";

import IconLeft from "~/icons/arrow-left.svg";
import IconRight from "~/icons/arrow-right.svg";

import data from "@/data/common.json";

import { SliderNavigationProps } from "./types";

export const SliderNav: React.FC<SliderNavigationProps> = ({
  className,
  section = "top",
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
          className={cn(
            `button-prev-${section} w-[60px] h-[60px] border-2 text-base leading-loose hover:shadow-2xl focus-visible:shadow-2xl md:hover:shadow-3xl md:focus-visible:shadow-3xl transition rounded-full flex-center border-color-accent-primary bg-color-bg-white hover:translate-x-[2px] hover:-translate-y-[2px] md:hover:translate-x-[3px] md:hover:-translate-y-[3px] focus-visible:translate-x-[2px] focus-visible:-translate-y-[2px] md:focus-visible:translate-x-[3px] md:focus-visible:-translate-y-[3px]`,
          )}
          type="button"
          aria-label={SliderButtonsAriaLabel.left}
        >
          <IconLeft className="h-[31px] w-[31px] " />
        </button>
      </li>
      <li key="next">
        <button
          className={cn(
            `button-next-${section} w-[60px] h-[60px] border-2 text-base leading-loose hover:shadow-2xl focus-visible:shadow-2xl md:hover:shadow-3xl md:focus-visible:shadow-3xl transition rounded-full flex-center border-color-accent-primary bg-color-bg-white hover:translate-x-[2px] hover:-translate-y-[2px] md:hover:translate-x-[3px] md:hover:-translate-y-[3px] focus-visible:translate-x-[2px] focus-visible:-translate-y-[2px] md:focus-visible:translate-x-[3px] md:focus-visible:-translate-y-[3px]`,
          )}
          type="button"
          aria-label={SliderButtonsAriaLabel.right}
        >
          <IconRight className="h-[31px] w-[31px] " />
        </button>
      </li>
    </ul>
  );
};
