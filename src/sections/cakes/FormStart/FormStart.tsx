"use client";

import { ToppingsModal } from "@/sections/cakes/ToppingsModal";
import { Modal } from "@/components/ui/Modal";
import { useState } from "react";

export const FormStart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  return (
    <section className="p-20 ">
      <div className="container">
        <button
          type="button"
          className="bg-color-bg-accent p-5 hover:bg-color-accent-primary"
          onClick={() => setIsOpen(true)}
        >
          Обрати начинку
        </button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ToppingsModal onClose={onClose} />
        </Modal>
      </div>
    </section>
  );
};
