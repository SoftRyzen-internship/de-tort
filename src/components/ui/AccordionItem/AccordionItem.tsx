"use client";
import css from "./AccordionItem.module.css";

import Icon from "~/icons/arrow-down.svg";

import { AccordionItemType } from "./types";

export const AccordionItem: React.FC<AccordionItemType> = ({
  item,
  isOpen,
  handleToggle,
}) => {
  const { id, question, answer } = item;

  return (
    <li className={`${css.item} xl:w-[696px]`}>
      <div
        className="flex justify-between items-start mt-5 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          handleToggle(id);
        }}
        tabIndex={0}
      >
        <p className="font-semibold text-[14px] text-color-text-primary w-[220px] leading-normal md:w-[425px] md:text-[20px] xl:text-[24px] xl:w-[615px]">
          {question}
        </p>
        <div
          className={`rounded-full border bg-color-bg-white border-color-accent-primary p-[14px] ${isOpen ? "transition-all shadow-2xl" : ""}`}
        >
          <span className="inherit">
            {isOpen ? (
              <Icon className="w-5 h-5 rotate-180" />
            ) : (
              <Icon className="w-5 h-5" />
            )}
          </span>
        </div>
      </div>

      {isOpen && (
        <p
          className={`font-fixel text-[20px] text-color-text-secondary leading-normal font-normal mt-6 `}
        >
          {answer}
        </p>
      )}
    </li>
  );
};
