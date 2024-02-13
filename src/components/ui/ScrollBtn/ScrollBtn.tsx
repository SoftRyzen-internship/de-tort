"use client";

import { Link } from "react-scroll";

import { cn } from "@/utils/helpers";

import { ScrollBtnProps } from "./types";

export const ButtonLink: React.FC<ScrollBtnProps> = ({
  label,
  targetName,
  className = "",
}) => {
  return (
    <Link
      className={cn(
        "cursor-pointer transition block pointer-events-auto hover:shadow-3xl focus:shadow-3xl rounded-full text-center flex-center font-bold border-color-accent-primary uppercase text-xl text-color-accent-primary bg-color-bg-white hover:translate-x-[3px] hover:-translate-y-[3px] focus:translate-x-[3px] focus:-translate-y-[3px] py-[14px] px-[34px] border-2 w-fit leading-loose ",
        className,
      )}
      to={targetName}
      href="/"
      spy
      smooth
      duration={500}
    >
      {label}
    </Link>
  );
};
