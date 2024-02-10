"use client";

import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { FormControl } from "@/components/ui/form";
import { cn } from "@/utils/helpers";

interface ToppingControlProps {
  field: FieldValues;
}

const ToppingControl: React.FC<ToppingControlProps> = ({ field }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    field.onChange("кокос-мигдаль");
    setIsOpen(false);
  };
  const onOpen = () => setIsOpen(true);

  return (
    <>
      <FormControl>
        <button onClick={onOpen}>
          {field.value ? field.value : <span>Обрати начинку</span>}
        </button>
      </FormControl>
      <div
        className={cn(
          {
            "fixed top-0 bottom-0 left-0 right-0 bg-green-500/90": isOpen,
          },
          {
            "sr-only": !isOpen,
          },
        )}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga neque
          placeat dolorum voluptatem corporis aut reprehenderit eos sint
          incidunt amet. Itaque, temporibus sint aliquid aperiam velit ducimus
          laudantium minus fugit.
        </p>
        <button onClick={onClose}>Close Modal!!!</button>
      </div>
    </>
  );
};

export default ToppingControl;
