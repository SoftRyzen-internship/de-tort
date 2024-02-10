import { ToppingModalCardProps } from "./types";

export const ToppingModalCard: React.FC<ToppingModalCardProps> = ({
  onClick,
  title,
  description,
  price,
  weight,
}) => {
  return (
    <div
      onClick={onClick}
      className="modal-card shrink-0 w-[288px] h-[411px] md:w-auto md:h-[404px] xl:h-[386px] px-3 md:px-4 pb-[15px] md:pb-[30px] xl:pb-[24px] pt-[173px] xl:pt-[162px] text-[16px] font-unbounded border rounded-3xl leading-normal group border-topping-card-even hover:border-color-accent-primary focus-visible:border-color-accent-primary bg-color-bg-white hover:shadow-3xl focus:shadow-3xl transition-all cursor-pointer"
    >
      <div className="md:h-[162px] xl:h-[166px]">
        <p className="font-semibold uppercase text-color-text-primary group-hover:text-color-accent-primary focus:text-color-accent-primary">
          {title}
        </p>
        <p className="font-fixel font-normal mt-2 xl:mt-3 text-color-text-secondary h-[132px]">
          {description}
        </p>
      </div>

      <p className="font-semibold mt-4 xl:mt-3 uppercase text-color-text-primary group-hover:text-color-accent-primary focus:text-color-accent-primary">
        ₴ <span>{price}</span> / <span>{weight}</span> грам
      </p>
    </div>
  );
};
