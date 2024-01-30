import { AccordionItemType } from "./types";

export const AccordionItem: React.FC<AccordionItemType> = ({ item }) => {
  const { question, answer } = item;
  return (
    <details className="">
      <summary className="font-semibold text-sm leading-[1.4] text-color-text-primary">
        {question}
      </summary>
      <p className="font-fixel text-xl text-color-text-secondary leading-[1.4] font-normal">
        {answer}
      </p>
    </details>
  );
};
