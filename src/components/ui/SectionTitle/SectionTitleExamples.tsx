// todo: WILL BE DELETED LATER...

import { SectionTitle } from "@/components/ui/SectionTitle";

export const SectionTitleExamples: React.FC = () => {
  return (
    <>
      {/* Section heading examples: */}
      <ul className="container outline-dashed flex flex-col gap-4">
        <li key="hero">
          <SectionTitle
            hero
            text="Онлайн-кондитерська"
            className="max-w-[694px]"
          />
        </li>

        <li key="cakes-assortment">
          <SectionTitle
            text="Асортимент тортів"
            className="max-w-[400px] xl:max-w-[575px]"
          />
        </li>

        <li key="about-us">
          <SectionTitle text="Про нас" />
        </li>

        <li key="achievement">
          <SectionTitle text="Досягнення" />
        </li>

        <li key="top-fillings">
          <SectionTitle text="Топ-Начинки" />
        </li>

        <li key="FAQ">
          <SectionTitle text="Питання-Відповіді" className="max-w-[288px]" />
        </li>

        <li key="Reviews">
          <SectionTitle text="Відгуки" />
        </li>

        <li key="Contacts">
          <SectionTitle text="Контакти" />
        </li>
      </ul>
    </>
  );
};
