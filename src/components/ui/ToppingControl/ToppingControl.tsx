"use client";

import React, { useState } from "react";

import { ToppingsModal } from "@/sections/cakes/ToppingsModal";
import { Modal } from "@/components/ui/Modal";
import { FormControl } from "@/components/ui/Shadcn/form";

import { cn } from "@/utils/helpers";

import { ToppingControlProps } from "./types";

export const ToppingControl: React.FC<ToppingControlProps> = ({
  field,
  placeholder,
  disabled = false,
  toppings,
  isError,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  return (
    <>
      <FormControl>
        <button
          type="button"
          disabled={disabled}
          className={cn(
            "input-field",
            "font-semibold justify-center h-11 flex-center",
            {
              "text-color-accent-primary border-color-accent-primary":
                field.value,
              "text-mine": !field.value,
              "opacity-20": disabled,
              "border-error": isError,
            },
          )}
          onClick={() => setIsOpen(true)}
        >
          {field.value ? field.value : placeholder}
        </button>
      </FormControl>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ToppingsModal
          toppings={toppings}
          onClose={onClose}
          onSelectTopping={(title) => {
            field.onChange(title);
          }}
        />
      </Modal>
    </>
  );
};
