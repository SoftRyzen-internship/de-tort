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
    <div
      className={`${css.item} xl:w-[696px]`}
      onClick={(e) => {
        e.preventDefault();
        handleToggle(id);
      }}
    >
      <div className="flex justify-between items-start mt-5">
        <div className="font-semibold text-sm text-color-text-primary w-[220px] leading-[1.4] md:w-[425px] md:text-[20px] xl:text-[24px] xl:w-[615px]">
          {question}
        </div>
        <div
          className={`rounded-full border bg-color-bg-white border-color-accent-primary p-[14px] ${isOpen ? "shadow-2xl" : ""}`}
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
        <div className="font-fixel text-xl text-color-text-secondary leading-[1.4] font-normal mt-6">
          {answer}
        </div>
      )}
    </div>
  );
};
