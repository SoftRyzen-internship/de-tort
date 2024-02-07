import { SectionTitle } from "@/components/ui/SectionTitle";
import { SweetsCard } from "@/components/ui/SweetsCard";

import sweets from "@/data/sweets.json";

export const Sweets = () => {
  const { title, sweetList } = sweets;

  return (
    <section className="section bg-color-bg-primary">
      <div className="container">
        <SectionTitle text={title} className="sr-only" />

        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {sweetList.map(
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
