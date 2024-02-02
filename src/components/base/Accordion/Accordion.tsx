"use client";
import { useState } from "react";

import { AccordionItem } from "@/components/ui/AccordionItem";

import qa from "@/data/qa.json";

export const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (idx: number) => {
    if (idx !== activeIndex) {
      setActiveIndex(idx);
    }
  };
  return (
    <ul>
      {qa.accordion.map((item, idx) => (
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
