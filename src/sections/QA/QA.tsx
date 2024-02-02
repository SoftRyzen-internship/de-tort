import { Accordion } from "@/components/base/Accordion";
import { SectionTitle } from "@/components/ui/SectionTitle";

import json from "@/data/qa.json";

export const QA: React.FC = () => {
  return (
    <section className="section bg-color-bg-primary">
      <div className="container">
        <SectionTitle
          text={json.titleSection}
          className="flex flex-col mb-6 md:mb-10 xl:flex-row xl:mb-0 xl:gap-8"
        />
        <Accordion />
      </div>
    </section>
  );
};
