import Image from "next/image";
import Link from "next/link";

import data from "@/data/common.json";

import { MainNavProps } from "./types";

export const MainNav: React.FC<MainNavProps> = ({ onClick }) => {
  const { staticPages, dynamicPages } = data.menu.navigation;

  return (
    <div className="overflow-y-auto flex flex-col justify-between gap-2 h-full font-unbounded font-bold leading-[1.4] xl:leading-[1.3] uppercase text-color-text-primary">
      <ul className="flex flex-col gap-6 xl:gap-7">
        {dynamicPages.map((link, idx) => {
          return (
            <li key={idx}>
              <span onClick={onClick} className="inline-block">
                <Link
                  href={`/${link.slug}`}
                  className="inline-flex items-center gap-3 xl:gap-4 text-[20px] md:text-[24px] xl:text-[32px] hover:text-color-accent-primary focus-visible:text-color-accent-primary transition-all"
                >
                  <Image
                    src={link.icon.path}
                    alt={link.icon.alt}
                    width={40}
                    height={40}
                    priority
                    className="w-10 h-10"
                  />
                  {link.label}
                </Link>
              </span>
            </li>
          );
        })}
      </ul>

      <ul className="flex flex-col gap-3 xl:gap-4">
        {staticPages.map((link, idx) => {
          return (
            <li key={idx}>
              <Link
                href={`/${link.slug}`}
                className="text-[18px] md:text-[20px] xl:text-[24px] hover:text-color-accent-primary focus-visible:text-color-accent-primary transition-all"
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
