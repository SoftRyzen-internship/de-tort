import { SectionTitle } from "@/components/ui/SectionTitle";

import { ToppingModalProps } from "./types";

export const ToppingsModal: React.FC<ToppingModalProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col h-full">
      <SectionTitle text="Оберіть начинку" className="mb-8 smOnly:w-[186px]" />
      <ul className="overflow-y-auto flex justify-center flex-col gap-[17px] md:gap-3 md:flex-row md:flex-wrap">
        <li
          className=" w-[310px] h-[404px] bg-color-bg-hero card-cakes"
          onClick={onClose}
        >
          b
        </li>
        <li
          className=" w-[310px] h-[404px] bg-color-bg-hero card-cakes"
          onClick={onClose}
        >
          b
        </li>
        <li
          className=" w-[310px] h-[404px] bg-color-bg-hero card-cakes"
          onClick={onClose}
        >
          b
        </li>
        <li
          className=" w-[310px] h-[404px] bg-color-bg-hero card-cakes"
          onClick={onClose}
        >
          b
        </li>
      </ul>
    </div>
  );
};
