import { AccordionItemType } from "./types";

export const AccordionItem: React.FC<AccordionItemType> = ({ item }) => {
  const { question, answer } = item;
  return (
    <details className="">
      <summary className="">{question}</summary>
      <p className="">{answer}</p>
    </details>
  );
};
