import Image from "next/image";
import Link from "next/link";

import json from "@/data/cakes-assortment.json";

import { CardCakesProps } from "./types";

export const CardCakes: React.FC<CardCakesProps> = ({
  title,
  slug,
  bgSrc,
  tbSrc,
}) => {
  return (
    <li className="cakes-card">
      <Link
        href={slug}
        className="group relative inline-block overflow-hidden rounded-3xl w-full h-[360px] xl:h-[480px]"
      >
        <p className="absolute top-8 left-1/2 -translate-x-1/2 w-full text-center font-unbounded text-color-accent-primary text-[24px] font-bold leading-normal uppercase xl:text-[28px] xl:top-10">
          {title}
        </p>

        <Image
          src={tbSrc}
          alt={title}
          width={336}
          height={360}
          priority
          className="block object-cover object-center w-full h-full xl:hidden"
        />

        <Image
          src={bgSrc}
          alt={title}
          width={592}
          height={480}
          priority
          className="notXl:hidden block object-cover object-center w-full h-full"
        />

        <span className="notXL:hidden absolute bottom-10 left-[147.5px] opacity-0 xl:group-hover:opacity-100 xl:group-focus-visible:opacity-100 rounded-full px-9 py-[14px] text-center flex-center font-bold border-color-accent-primary uppercase text-xl leading-10 text-color-accent-primary bg-color-bg-white border-2 w-fit">
          {json.button}
        </span>
      </Link>
    </li>
  );
};
