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
      className={`${css.item}`}
      onClick={(e) => {
        e.preventDefault();
        handleToggle(id);
      }}
    >
      <div className="flex justify-between items-start mt-5">
        <div className="font-semibold text-sm leading-[1.4] text-color-text-primary w-[225px]">
          {question}
        </div>
        <div className="rounded-full border border-color-accent-primary p-[14px]">
          <span className="inline-block">
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
