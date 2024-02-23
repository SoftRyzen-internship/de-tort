"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { MainNav } from "@/components/base/MainNav";
import { CloseButton } from "@/components/ui/CloseButton";

import data from "@/data/common.json";

import { BurgerMenuProps } from "./types";

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  const { close } = data.menu.buttons;

  return (
    <>
      {/* Use the `Transition` component at the root level */}
      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={onClose} className="relative z-50">
          {/* The backdrop, rendered as a fixed sibling to the menu container */}
          <div
            className="fixed inset-0 bg-color-bg-backdrop"
            aria-hidden="true"
          />

          {/* The actual menu window with personal transition  */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="translate-x-full"
            enterTo="translate-x-auto"
            leave="ease-in duration-200"
            leaveFrom="translate-x-auto"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel
              className={`burger-menu fixed inset-0 ml-auto w-full md:w-[428px] 2xl:w-1/2 bg-color-bg-primary px-6 pt-14 pb-[50px] md:pl-12 md:pr-[42px] md:pt-16 md:pb-[77px] 2xl:pl-[66px] 2xl:pr-12 2xl:py-[81px]`}
            >
              <CloseButton
                ariaLabel={close}
                onClick={onClose}
                className="absolute top-0 right-5 md:top-1/2 md:-left-[41px] xl:-left-[49px] md:-translate-y-1/2"
              />

              <MainNav onClick={onClose} />
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};
