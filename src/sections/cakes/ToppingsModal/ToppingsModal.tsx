import { SectionTitle } from "@/components/ui/SectionTitle";

import { ToppingModalProps } from "./types";

export const ToppingsModal: React.FC<ToppingModalProps> = ({ onClose }) => {
  return (
    <div
      // className="flex flex-col h-full"
      className="flex flex-col h-full gap-8"
      // className="h-full"
    >
      <SectionTitle
        text="Оберіть начинку"
        // className="mb-8 smOnly:w-[186px]"
        className="smOnly:w-[186px]"
      />

      <div className="grow overflow-y-auto">
        <ul
          // className="overflow-y-auto flex justify-center flex-col gap-[17px] md:gap-3 md:flex-row md:flex-wrap"
          className="flex justify-center flex-col gap-[17px] md:gap-3 md:flex-row md:flex-wrap"
        >
          <li
            className="shrink-0 w-[310px] h-[404px] bg-color-bg-hero card-cakes"
            onClick={onClose}
          >
            a
          </li>
          <li
            className="shrink-0 w-[310px] h-[404px] bg-color-bg-hero card-cakes"
            onClick={onClose}
          >
            b
          </li>
          <li
            className="shrink-0 w-[310px] h-[404px] bg-color-bg-hero card-cakes"
            onClick={onClose}
          >
            c
          </li>
          <li
            className="shrink-0 w-[310px] h-[404px] bg-color-bg-hero card-cakes"
            onClick={onClose}
          >
            d
          </li>
        </ul>
      </div>
    </div>
  );
};
