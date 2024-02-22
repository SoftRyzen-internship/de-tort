import Link from "next/link";
import Image from "next/image";

import IconMapPin from "~/icons/pin-cake.svg";

import data from "@/data/section-contacts.json";

import { MapLinkProps } from "./types";

import { convertImage, getBase64 } from "@/utils/helpers";

export const MapLink: React.FC<MapLinkProps> = ({ className = "" }) => {
  const { href, alt, path, ariaLabel, caption } = data.address.image;

  return (
    <>
      <Link
        href={href}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={`group relative box-content w-full h-full md:w-[704px] md:h-[640px] xl:w-[592px] xl:h-[536px] overflow-hidden rounded-3xl border-[1px] ${className}`}
      >
        <Image
          src={path}
          width={592}
          height={536}
          alt={alt}
          className="object-cover object-center w-full h-full group-hover:scale-110 group-focus-visible:scale-110 transition-all"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${getBase64(
            convertImage(592, 536, "#f8f7f7"),
          )}`}
          sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw"
        />

        <div className="absolute bottom-[34%] left-[34%] md:bottom-[38%] md:left-[38%] flex flex-col items-center gap-3">
          <IconMapPin className="w-[58px] h-20 md:w-[96px] md:h-[134px]" />

          <span className="max-w-[128px] md:max-w-[192px] font-unbounded font-extrabold text-center text-[16px] md:text-[24px] text-color-accent-primary uppercase leading-[1.4]">
            {caption}
          </span>
        </div>
      </Link>
    </>
  );
};
