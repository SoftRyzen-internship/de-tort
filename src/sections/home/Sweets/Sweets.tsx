import { SectionTitle } from "@/components/ui/SectionTitle";
import { SweetsCard } from "@/components/ui/SweetsCard";

import sweets from "@/data/sweets.json";
import { cn } from "@/utils/helpers";

export const Sweets = () => {
  const { title, sweetList } = sweets;

  const textColors = `
    [&>*:nth-child(1)]:text-color-option-first
    [&>*:nth-child(2)]:text-color-option-second
    [&>*:nth-child(3)]:text-color-option-third
    [&>*:nth-child(4)]:text-color-option-fourth
    [&>*:nth-child(5)]:text-color-option-fifth
    [&>*:nth-child(6)]:text-color-option-first
    `;

  return (
    <section className="section bg-color-bg-primary">
      <div className="container">
        <SectionTitle text={title} className="sr-only" />

        <ul
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8",
            textColors,
          )}
        >
          {sweetList.map(({ name, bgSrc, bgAlt, targetHref }, index) => (
            <SweetsCard
              key={index}
              name={name}
              bgSrc={bgSrc}
              bgAlt={bgAlt}
              targetHref={targetHref}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
