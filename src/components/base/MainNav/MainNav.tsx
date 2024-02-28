import Image from "next/image";
import Link from "next/link";

import data from "@/data/common.json";

import css from "./MainNav.module.css";

import { MainNavProps } from "./types";

export const MainNav: React.FC<MainNavProps> = ({ onClick }) => {
  const { b2bPage, dynamicPages } = data.menu.navigation;

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {dynamicPages.map((link, idx) => {
          return (
            <li key={idx}>
              <span onClick={onClick} className="inline-block">
                <Link href={`/${link.slug}`} className={css.link}>
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

      <span onClick={onClick} className="self-start">
        <Link href={`/${b2bPage.slug}`} className={css.link}>
          {b2bPage.label}
        </Link>
      </span>
    </div>
  );
};
