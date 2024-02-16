import { Accordion } from "@/components/base/Accordion";
import { SectionTitle } from "@/components/ui/SectionTitle";

import json from "@/data/common.json";

import { QAProps } from "./types";

export const QA: React.FC<QAProps> = ({ faq }) => {
  return (
    <section className="section bg-color-bg-primary pb-[60px] mdOnly:pb-20 xl:pb-[120px]">
      <div className="container flex flex-col xl:flex-row xl:gap-8">
        <SectionTitle
          text={json.qa.titleSection}
          className="mb-6 smOnly:w-[200px] mdOnly:w-[286px] md:mb-10 xl:mb-0"
        />

        <Accordion data={faq} />
      </div>
    </section>
  );
};
