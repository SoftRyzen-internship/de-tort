import { SweetsCard } from "@/components/ui/SweetsCard";

import { cn } from "@/utils/helpers";

import sweets from "@/data/sweets.json";

export const SweetsList: React.FC = () => {
  const textColors = `
    [&>*:nth-child(1)]:text-color-option-first
    [&>*:nth-child(2)]:text-color-option-second
    [&>*:nth-child(3)]:text-color-option-third
    [&>*:nth-child(4)]:text-color-option-fourth
    [&>*:nth-child(5)]:text-color-option-fifth
    [&>*:nth-child(6)]:text-color-option-first
    `;

  const { sweetsList } = sweets;

  return (
    <ul
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8",
        textColors,
      )}
    >
      {sweetsList.map(({ name, bgSrc, bgAlt, targetHref }, index) => (
        <SweetsCard
          key={index}
          name={name}
          bgSrc={bgSrc}
          bgAlt={bgAlt}
          targetHref={targetHref}
        />
      ))}
    </ul>
  );
};
