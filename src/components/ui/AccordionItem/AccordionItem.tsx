"use client";
import { KeyboardEvent } from "react";

import css from "./AccordionItem.module.css";

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
      className={`${css.item} flex flex-col xl:w-[696px] `}
    >
      <div className="flex justify-between items-center mt-5 cursor-pointer">
        <p className="font-semibold text-[14px] text-color-text-primary w-[220px] leading-normal md:w-[425px] md:text-[20px] xl:text-[24px] xl:w-[615px]">
          {question}
        </p>
        <div
          className={`rounded-full border bg-color-bg-white border-color-accent-primary p-[14px] ${isActive ? "transition-all shadow-2xl" : ""}`}
        >
          <span className="inherit">
            <Icon className={`w-5 h-5 ${isActive ? "rotate-180" : ""}`} />
          </span>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out grid ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <p
          className={`font-fixel text-[20px] text-color-text-secondary leading-normal font-normal mt-6`}
        >
          {answer}
        </p>
      </div>
    </li>
  );
};

// <li className={`${css.item} xl:w-[696px] overflow-hidden`}>
//   <div
//     className="flex justify-between items-start mt-5 cursor-pointer overflow-hidden"
//     // onClick={(e) => {
//     //   e.preventDefault();
//     //   handleToggle(id);
//     // }}
//     onClick={setActive}
//     onKeyDown={handleKeyDown}
//     tabIndex={0}
//   >
//     <p className="font-semibold text-[14px] text-color-text-primary w-[220px] leading-normal md:w-[425px] md:text-[20px] xl:text-[24px] xl:w-[615px]">
//       {question}
//     </p>
//     <div
//       className={`rounded-full border bg-color-bg-white border-color-accent-primary p-[14px] ${isOpen ? "transition-all shadow-2xl" : ""}`}
//     >
//       <span className="inherit">
//         {isOpen ? (
//           <Icon className="w-5 h-5 rotate-180" />
//         ) : (
//           <Icon className="w-5 h-5" />
//         )}
//       </span>
//     </div>
//   </div>

//   <p
//     className={`font-fixel text-[20px] text-color-text-secondary leading-normal font-normal mt-6 ${isOpen ? "drop-up-body" : "drop-up-body_state_toggled"}`}
//   >
//     {answer}
//   </p>
// </li>;
