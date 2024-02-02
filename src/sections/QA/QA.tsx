import { Accordion } from "@/components/base/Accordion";
import { SectionTitle } from "@/components/ui/SectionTitle";

import json from "@/data/qa.json";

export const QA: React.FC = () => {
  return (
    <section className="section bg-color-bg-primary pb-[60px] mdOnly:pb-20 xl:pb-[120px]">
      <div className="container flex flex-col xl:flex-row xl:gap-8">
        <SectionTitle
          text={json.titleSection}
          className="mb-1 md:mb-5 xl:mb-0 mdOnly:w-[286px]"
        />
        <Accordion />
      </div>
    </section>
  );
};
