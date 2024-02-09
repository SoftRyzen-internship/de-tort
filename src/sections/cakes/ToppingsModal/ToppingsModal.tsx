import { SectionTitle } from "@/components/ui/SectionTitle";

import data from "@/data/topping-modal.json";

import { ToppingModalProps } from "./types";

export const ToppingsModal: React.FC<ToppingModalProps> = ({
  onClose,
  onSelectTopping,
}) => {
  const { titleSection, toppings } = data;

  const handleSelectTopping = (title: string) => {
    onSelectTopping(title);
    onClose();
  };

  return (
    <div className="flex flex-col h-full gap-8">
      <SectionTitle text={titleSection} className="smOnly:w-[186px]" />

      <div className="grow overflow-y-auto">
        <ul className="flex justify-center flex-col gap-[17px] md:gap-3 md:flex-row md:flex-wrap">
          {toppings.map((topping) => (
            <li
              className="shrink-0 w-[310px] h-[404px] bg-color-bg-hero card-cakes"
              onClick={() => handleSelectTopping(topping.title)}
              key={topping.id}
            >
              <p>{topping.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
