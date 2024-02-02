import { SectionTitle } from "@/components/ui/SectionTitle";
import { SweetsCard } from "@/components/ui/SweetsCard";

import data from "@/data/common.json";

export const Sweets = () => {
  const { sweets } = data;

  return (
    <section className="section bg-color-bg-primary">
      <div className="container">
        <SectionTitle text={sweets.title} className="sr-only" />
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {sweets.sweetList.map(
            ({ name, nameColor, bgSrc, bgAlt, targetHref }, index) => (
              <SweetsCard
                key={index}
                name={name}
                nameColor={nameColor}
                bgSrc={bgSrc}
                bgAlt={bgAlt}
                targetHref={targetHref}
              />
            ),
          )}
        </ul>
      </div>
    </section>
  );
};
