"use client";

import { KeyboardEvent } from "react";

import Icon from "~/icons/arrow-down.svg";

import { AccordionItemType } from "./types";

export const AccordionItem: React.FC<AccordionItemType> = ({
  item,
  isActive,
  setActive,
}) => {
  const { question, answer } = item;
  const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      setActive();
    }
  };
  return (
    <li
      onClick={setActive}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className={`border-b border-color-accent-primary flex flex-col mb-5 pb-6 last:mb-0 xl:w-[696px]`}
    >
      <div className="flex justify-between items-center cursor-pointer">
        <p className="font-semibold text-[14px] text-color-text-primary w-[220px] leading-normal md:w-[550px] md:text-[20px] xl:text-[24px] xl:w-[615px]">
          {question}
        </p>
        <div
          className={`rounded-full border-2 bg-color-bg-white border-color-accent-primary p-[14px] ${isActive ? "transition-all shadow-2xl" : ""}`}
        >
          <span className="inherit">
            <Icon className={`w-5 h-5 ${isActive ? "rotate-180" : ""}`} />
          </span>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out grid ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p
            className={`font-fixel text-[20px] text-color-text-secondary leading-normal font-normal mt-6`}
          >
            {answer}
          </p>
        </div>
      </div>
    </li>
  );
};
