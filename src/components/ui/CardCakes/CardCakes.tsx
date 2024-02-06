import Image from "next/image";
import Link from "next/link";

import { LinkButton } from "../LinkButton";

import json from "@/data/cakes-assortment.json";

import { CardCakesProps } from "./types";

export const CardCakes: React.FC<CardCakesProps> = ({
  title,
  slug,
  bgSrc,
  tbSrc,
}) => {
  return (
    <li className="group block relative rounded-3xl cursor-pointer overflow-hidden h-[360px] md:w-[336px] xl:h-[480px] xl:w-[592px]">
      <h3 className="absolute top-8 left-1/2 -translate-x-1/2 w-full text-center font-unbounded text-color-accent-primary text-[24px] font-bold leading-normal uppercase xl:text-[28px] xl:top-10">
        {title}
      </h3>

      <Link href={slug}>
        <Image
          src={tbSrc}
          alt={title}
          width={336}
          height={360}
          className="object-cover w-full h-full xl:hidden"
        />
      </Link>

      <Image
        src={bgSrc}
        alt={title}
        width={592}
        height={480}
        className="notXl:hidden block object-cover w-full h-full"
      />

      <div className="hidden group-hover:flex notXl:invisible absolute bottom-10 left-[147.5px]">
        <LinkButton
          label={json.button}
          className="px-9 py-4 w-[297px] block"
          href={slug}
        />
      </div>
    </li>
  );
};
