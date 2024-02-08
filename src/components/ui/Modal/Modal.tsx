import { Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";

import { ModalProps } from "./types";

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  classNameWrap = "",
  classNameModal = "",
}) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <div className="fixed inset-0 bg-color-bg-backdrop">
          <div
            className={`flex min-h-full items-start justify-center p-4 text-center ${classNameWrap}`}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-full max-w-md rounded-3xl bg-color-bg-white border-2 border-color-accent-primary p-4 text-left transition-all mt-[147px] md:mt-[352px] ${classNameModal}`}
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
