"use client";

import { useState } from "react";

import { ToppingsModal } from "@/sections/cakes/ToppingsModal";
import { Modal } from "@/components/ui/Modal";

import data from "@/data/topping-modal.json";

export const FormStart: React.FC = () => {
  const { button } = data;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopping, setSelectedTopping] = useState<string | null>(null);

  const onClose = () => setIsOpen(false);

  return (
    <section className="p-20">
      <div className="container">
        <button
          type="button"
          className="bg-color-bg-accent p-5 hover:bg-color-bg-extraAccent"
          onClick={() => setIsOpen(true)}
        >
          {selectedTopping ? (
            <span className="text-color-accent-primary">{selectedTopping}</span>
          ) : (
            <span className="">{button}</span>
          )}
        </button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ToppingsModal
            onClose={onClose}
            onSelectTopping={(title) => setSelectedTopping(title)}
          />
        </Modal>
      </div>
    </section>
  );
};
