"use client";

import { useState } from "react";

import { AccordionItem } from "@/components/ui/AccordionItem";

import { AccordionProps } from "./types";

export const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (idx: number) => {
    if (idx !== activeIndex) {
      setActiveIndex(idx);
    }
  };

  return (
    <ul>
      {data.map((item, idx) => (
        <AccordionItem
          item={item}
          key={idx}
          isActive={idx === activeIndex}
          setActive={() => handleAccordionClick(idx)}
        />
      ))}
    </ul>
  );
};
