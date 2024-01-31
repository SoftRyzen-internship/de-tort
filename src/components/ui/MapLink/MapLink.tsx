import Image from "next/image";
import Link from "next/link";

import data from "@/data/section-contacts.json";

export const MapLink: React.FC = () => {
  const { href, path, alt, ariaLabel } = data.address.image;

  return (
    <>
      <Link
        href={href}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <Image
          src={path.mobile}
          width={320}
          height={320}
          alt={alt}
          className="inline-block md:hidden w-[320px] h-[320px]"
          placeholder="blur"
          blurDataURL={path.mobile}
        />

        <Image
          src={path.tablet}
          width={704}
          height={640}
          alt={alt}
          className="hidden mdOnly:inline-block w-[704px] h-[640px]"
          placeholder="blur"
          blurDataURL={path.tablet}
        />

        <Image
          src={path.desktop}
          width={592}
          height={536}
          alt={alt}
          className="hidden xl:inline-block w-[592px] h-[536px]"
          placeholder="blur"
          blurDataURL={path.desktop}
        />
      </Link>
    </>
  );
};
