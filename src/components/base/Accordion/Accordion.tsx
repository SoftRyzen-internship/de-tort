import { AccordionItem } from "@/components/ui/AccordionItem";
import qa from "@/data/qa.json";

export const Accordion: React.FC = () => {
  return (
    <div>
      {qa.accordion.map((item) => (
        <AccordionItem item={item} key={item.id} />
      ))}
    </div>
  );
};
