export interface AccordionItemType {
  item: {
    question: string;
    answer: string;
  };
  isActive: boolean;
  setActive: () => void;
}
