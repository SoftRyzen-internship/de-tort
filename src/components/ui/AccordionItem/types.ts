export interface AccordionItemType {
  item: {
    id: number;
    question: string;
    answer: string;
  };
  isOpen: boolean;
  handleToggle: (id: number) => void;
}
