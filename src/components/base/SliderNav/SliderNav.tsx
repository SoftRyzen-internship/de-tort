import { cn } from "@/utils/helpers/cn";

import IconLeft from "~/icons/arrow-left.svg";
import IconRight from "~/icons/arrow-right.svg";

import data from "@/data/common.json";

import { SliderNavigationProps } from "./types";

export const SliderNav: React.FC<SliderNavigationProps> = ({
  onNext,
  onPrev,
}) => {
  const { SliderButtonsAriaLabel } = data;

  return (
    <ul className="flex-center w-fit h-fit max-lg:gap-0 lg:gap-4">
      <li key="prev">
        <button
          className={cn(
            " w-[60px] h-[60px] border-2 md:w-fit text-base leading-loose hover:shadow-2xl focus-visible:shadow-2xl md:hover:shadow-3xl md:focus-visible:shadow-3xl transition rounded-full text-center flex-center font-bold border-color-accent-primary uppercase md:text-xl md:leading-10 text-color-accent-primary bg-color-bg-white hover:translate-x-[2px] hover:-translate-y-[2px] md:hover:translate-x-[3px] md:hover:-translate-y-[3px] focus-visible:translate-x-[2px] focus-visible:-translate-y-[2px] md:focus-visible:translate-x-[3px] md:focus-visible:-translate-y-[3px]",
          )}
          type="button"
          aria-label={SliderButtonsAriaLabel.left}
          onClick={onPrev}
        >
          <IconLeft className="h-[31px] w-[31px] " />
        </button>
      </li>
      <li key="next">
        <button
          className={cn(
            " w-[60px] h-[60px] border-2 md:w-fit text-base leading-loose hover:shadow-2xl focus-visible:shadow-2xl md:hover:shadow-3xl md:focus-visible:shadow-3xl transition rounded-full text-center flex-center font-bold border-color-accent-primary uppercase md:text-xl md:leading-10 text-color-accent-primary bg-color-bg-white hover:translate-x-[2px] hover:-translate-y-[2px] md:hover:translate-x-[3px] md:hover:-translate-y-[3px] focus-visible:translate-x-[2px] focus-visible:-translate-y-[2px] md:focus-visible:translate-x-[3px] md:focus-visible:-translate-y-[3px]",
          )}
          type="button"
          aria-label={SliderButtonsAriaLabel.right}
          onClick={onNext}
        >
          <IconRight className="h-[31px] w-[31px] " />
        </button>
      </li>
    </ul>
  );
};
