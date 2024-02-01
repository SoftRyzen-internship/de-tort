"use client";
import { useState } from "react";

import { AccordionItem } from "@/components/ui/AccordionItem";

import qa from "@/data/qa.json";

export const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleToggle = (id: number): void => {
    setOpenIndex(id === openIndex ? -1 : id);
  };

  return (
    <ul className="bg-color-bg-primary">
      {qa.accordion.map((item, index) => (
        <AccordionItem
          item={item}
          key={index}
          isOpen={item.id === openIndex}
          handleToggle={() => handleToggle(item.id)}
        />
      ))}
    </ul>
  );
};
