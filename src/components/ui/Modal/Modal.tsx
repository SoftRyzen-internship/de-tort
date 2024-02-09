import { Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";

import { CloseButton } from "../CloseButton";

import data from "@/data/common.json";

import { ModalProps } from "./types";

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  classNameWrap = "",
  classNameModal = "",
}) => {
  const { close } = data.menu.buttons;
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <div
          // className="fixed inset-0 bg-color-bg-backdrop w-screen"
          className="fixed inset-0 bg-color-bg-backdrop"
        >
          <div className="fixed inset-0 w-screen overflow-y-auto">
            <div
              // className={`flex items-start justify-center text-center container min-h-full ${classNameWrap}`}
              className={`min-h-full py-6 flex items-center justify-center text-center  ${classNameWrap}`}
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
                  // className={`fixed max-w-[480px] h-full rounded-3xl bg-color-bg-white border-2 border-color-accent-primary p-4 text-left transition-all mt-[120px] md:py-[60px] md:px-9 md:max-w-[704px] xl:max-w-[1216px] xl:py-10 xl:px-[104px] ${classNameModal}`}
                  className={`relative max-w-[480px] h-[90vh] rounded-3xl bg-color-bg-white border-2 border-color-accent-primary p-4 text-left md:py-[60px] md:px-9 md:max-w-[704px] xl:max-w-[1216px] xl:py-10 xl:px-[104px] ${classNameModal}`}
                  // className={`relative max-w-[480px] rounded-3xl bg-color-bg-white border-2 border-color-accent-primary p-4 text-left md:py-[60px] md:px-9 md:max-w-[704px] xl:max-w-[1216px] xl:py-10 xl:px-[104px] ${classNameModal}`}
                >
                  <CloseButton
                    ariaLabel={close}
                    onClick={onClose}
                    className="absolute top-4 right-4 md:top-[60px] md:right-9 xl:top-9"
                  />
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
