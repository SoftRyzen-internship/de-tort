export interface AccordionItemType {
  item: {
    question: string;
    answer: string;
  };
  isActive: boolean;
  setActive: () => void;
  // isOpen: boolean;
  // handleToggle: (id: number) => void;
}
