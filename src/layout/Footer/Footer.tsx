import Link from "next/link";

import { ContactLinks } from "@/components/ui/ContactLinks";
import { InfoButton } from "@/components/ui/InfoButton";
import { Logo } from "@/components/ui/Logo";

import data from "@/data/common.json";

import { FooterProps } from "./types";

export const Footer: React.FC<FooterProps> = ({ contacts }) => {
  const { soft_ryzen, info } = data;

  return (
    <footer className="footer relative py-10 md:pb-[86px] bg-color-bg-primary">
      <div className="container flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <ul className="flex flex-col items-center gap-4 md:items-start md:gap-5">
          {info.buttons.map(({ id, label, data }) => (
            <li key={id}>
              <InfoButton label={label} data={data} />
            </li>
          ))}
        </ul>

        <ContactLinks
          variant="footer"
          data={contacts}
          className="smOnly:items-center"
        />

        <div className="smOnly:static absolute bottom-10 left-1/2 md:-translate-x-1/2 flex flex-col items-center gap-6 ">
          <Logo />

          <Link
            href={soft_ryzen.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="font-fixel text-color-text-secondary text-[16px] leading-[1.3] xl:leading-[1.4] hover:text-color-accent-primary focus-visible:text-color-accent-primary transition-all"
          >
            <span className="font-light">{soft_ryzen.label.pre}</span>
            <span>{soft_ryzen.label.name}</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};
