import { SectionTitle } from "@/components/ui/SectionTitle";
import { CommonForm } from "@/components/ui/CommonForm";

import { B2bHeroProps } from "./types";

export const B2bHero: React.FC<B2bHeroProps> = ({ heading }) => {
  return (
    <section className="pt-[148px] pb-[60px] md:pt-[168px] md:pb-20 xl:pb-[120px] xl:pt-[208px]">
      <div className="container">
        <SectionTitle
          hero
          text={heading}
          className="text-center md:text-[40px] mb-10 xl:mb-20"
        />
        <CommonForm />
      </div>
    </section>
  );
};
