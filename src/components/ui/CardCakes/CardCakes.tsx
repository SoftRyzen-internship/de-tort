import Image from "next/image";
import Link from "next/link";

import { getBase64, convertImage } from "@/utils/helpers";

import json from "@/data/cakes-assortment.json";

import { CardCakesProps } from "./types";

export const CardCakes: React.FC<CardCakesProps> = ({ title, slug, bgSrc }) => {
  return (
    <li className="cakes-card">
      <Link
        href={`/cakes/${slug}`}
        className="group relative block overflow-hidden rounded-3xl w-full h-[360px] xl:h-[480px]"
      >
        <p className="absolute top-8 left-1/2 -translate-x-1/2 w-full text-center font-unbounded text-color-accent-primary text-[24px] font-bold leading-normal uppercase xl:text-[28px] xl:top-10">
          {title}
        </p>
        <Image
          src={bgSrc}
          alt={title}
          width={592}
          height={480}
          priority
          quality={100}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${getBase64(
            convertImage(592, 480, "#fff8f2"),
          )}`}
          className="object-cover object-center w-full h-full"
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 336px, (min-width: 1280px) 592px"
        />

        <span className="notXL:hidden absolute bottom-10 xl:left-1/2 xl:-translate-x-1/2 opacity-0 xl:group-hover:opacity-100 transition xl:group-focus-visible:opacity-100 rounded-full py-[14px] text-center flex-center font-bold border-color-accent-primary uppercase text-xl leading-10 text-color-accent-primary bg-color-bg-white border-2 w-[298px]">
          {json.button}
        </span>
      </Link>
    </li>
  );
};
