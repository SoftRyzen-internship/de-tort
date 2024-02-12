import { SectionTitle } from "@/components/ui/SectionTitle";
import { ToppingModalCard } from "@/components/ui/ToppingModalCard";

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
      <SectionTitle text={titleSection} className="smOnly:w-[186px] md:pl-1" />

      <div className="grow overflow-y-auto">
        <div className="flex justify-center flex-col gap-[17px] md:gap-3 xl:gap-6 md:flex-row md:justify-start md:flex-wrap pb-2 pl-2 ">
          {toppings.map(({ title, description, price, id, weight, plate }) => (
            <ToppingModalCard
              onClick={() => handleSelectTopping(title)}
              title={title}
              description={description}
              key={id}
              price={price}
              weight={weight}
              plate={plate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
