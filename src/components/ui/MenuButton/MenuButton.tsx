"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { BurgerMenu } from "@/components/base/BurgerMenu";

import IconMenu from "~/icons/burger.svg";

import data from "@/data/common.json";

import { MenuButtonProps } from "./types";

export const MenuButton: React.FC<MenuButtonProps> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const { open } = data.menu.buttons;

  const onClose = () => setIsOpen(false);

  const hoverStyle =
    pathname === "/cakes"
      ? "hover:scale-110 focus-visible:scale-110"
      : "hover:text-color-bg-white focus-visible:text-color-bg-white";

  return (
    <>
      <button
        type="button"
        aria-label={open}
        onClick={() => setIsOpen(true)}
        className={`w-10 h-10 flex items-center justify-center text-color-accent-primary transition-all ${hoverStyle} ${className}`}
      >
        <IconMenu className="w-6 h-6" />
      </button>

      <BurgerMenu isOpen={isOpen} onClose={onClose} />
    </>
  );
};
