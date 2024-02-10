"use client";

import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { FormControl } from "@/components/ui/form";
import { cn } from "@/utils/helpers";

interface ToppingControlProps {
  field: FieldValues;
  placeholder?: string;
}

const ToppingControl: React.FC<ToppingControlProps> = ({
  field,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    field.onChange("кокос-мигдаль");
    setIsOpen(false);
  };
  const onOpen = () => setIsOpen(true);

  return (
    <>
      <FormControl>
        <button onClick={onOpen} className="input-field">
          {field.value ? field.value : placeholder}
        </button>
      </FormControl>
      <div
        className={cn(
          {
            "fixed top-0 z-50 p-16 rounded-3xl bottom-0 left-0 right-0 bg-green-500/90":
              isOpen,
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
        <button onClick={onClose} tabIndex={-1} className="bg-yellow-500 p-4 ">
          Close Modal!!!
        </button>
      </div>
    </>
  );
};

export default ToppingControl;
