import Image from "next/image";

import { LinkButton } from "../LinkButton";

import json from "@/data/cakes-assortment.json";

export type CardCakesProps = {
  title: string;
  slug: string;
  bgSrc: string;
};

export const CardCakes: React.FC<CardCakesProps> = ({ title, slug, bgSrc }) => {
  return (
    <li className="group block relative rounded-3xl overflow-hidden w-full h-auto ">
      <Image
        src={bgSrc}
        alt={title}
        width={592}
        height={480}
        className="object-cover w-full h-full"
      />
      <h3 className="absolute top-8 left-1/2 -translate-x-1/2 w-full text-center font-unbounded text-color-accent-primary text-[24px] font-bold leading-normal uppercase">
        {title}
      </h3>
      <LinkButton label={json.button} className="w-[297px]" href={slug} />
    </li>
  );
};
