import { Accordion } from "@/components/base/Accordion";
import { SectionTitle } from "@/components/ui/SectionTitle";

import { fetchFAQ } from "@/requests";

import json from "@/data/common.json";

export const QA: React.FC = async () => {
  const faq = await fetchFAQ();

  return (
    <section className="section pb-[60px] mdOnly:pb-20 xl:pb-[120px]">
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
