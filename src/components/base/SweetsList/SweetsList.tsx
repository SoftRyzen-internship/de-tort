import { SweetsCard } from "@/components/ui/SweetsCard";

import sweets from "@/data/sweets.json";

import { SweetsListProps } from "./types";

export const SweetsList: React.FC<SweetsListProps> = ({ slug }) => {
  const { sweetsList } = sweets;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
      {sweetsList
        .filter((item) => item.slug !== slug)
        .map(({ name, bgSrc, bgAlt, slug }, index) => (
          <SweetsCard
            key={index}
            name={name}
            bgSrc={bgSrc}
            bgAlt={bgAlt}
            targetHref={`/${slug}`}
            titleClass={`sweets-card-title_${slug}`}
          />
        ))}
    </ul>
  );
};
