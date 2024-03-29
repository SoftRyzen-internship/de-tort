import React from "react";

import Image from "next/image";

import { DOUBLE, SINGLE, findLayer } from "@/utils/helpers/findLayer";

import { ToppingModalCardProps } from "./types";
import { getBase64, convertImage } from "@/utils/helpers";

export const ToppingModalCard: React.FC<ToppingModalCardProps> = ({
  onClick,
  name,
  description,
  price_double,
  plate,
  slug,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === " " || event.key === "Enter") {
      onClick();
    }
  };

  const doubleLayer =
    slug === "big-cakes" || slug === "middle-cakes"
      ? findLayer(plate, DOUBLE)
      : findLayer(plate, SINGLE);

  return doubleLayer ? (
    <div
      onClick={onClick}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="flex flex-col modal-card shrink-0 w-[288px] h-auto md:w-auto px-3 md:px-4 pb-[15px] md:pb-[30px] xl:pb-[24px] text-[16px] font-unbounded border rounded-3xl leading-normal group border-topping-card-even hover:border-color-accent-primary focus-visible:border-color-accent-primary bg-color-bg-white hover:shadow-3xl focus:shadow-3xl transition-all cursor-pointer"
    >
      <div className="relative plate-modal h-[173px] xl:h-[162px] overflow-hidden">
        <Image
          src={doubleLayer.url}
          className="plate-img bg-transparent w-[240px] h-[240px]"
          alt={doubleLayer.desc}
          width={240}
          height={240}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${getBase64(
            convertImage(240, 240),
          )}`}
          sizes="(max-width: 767px) 100vw, (min-width: 768px) 240px"
          quality={100}
        />
      </div>

      <div className={`h-auto ${slug === "big-cakes" ? "mb-4 xl:mb-3" : ""}`}>
        <p className="font-semibold uppercase text-color-text-primary group-hover:text-color-accent-primary group-focus:text-color-accent-primary transition-all">
          {name}
        </p>

        <p className="font-fixel font-normal mt-2 xl:mt-3 text-color-text-secondary h-auto">
          {description}
        </p>
      </div>

      {slug === "big-cakes" && (
        <p className="font-semibold mt-auto uppercase text-color-text-primary group-hover:text-color-accent-primary group-focus:text-color-accent-primary transition-all">
          ₴ {price_double}
        </p>
      )}
    </div>
  ) : null;
};
