import { SectionTitle } from "@/components/ui/SectionTitle";
import { LinkButton } from "@/components/ui/LinkButton";
import { HeroImage } from "@/components/ui/HeroImage";

import data from "@/data/common.json";

export const Hero: React.FC = () => {
  const { dynamicPages } = data.menu.navigation;
  const { hero } = data;
  const tortsSlug = dynamicPages.filter(({ label }) => label === "Торти")[0]
    .slug;

  return (
    <section className="bg-color-bg-hero pt-[56px] pb-[60px] md:pt-[160px] xl:pt-[204px] md:pb-[182px] xl:pb-[212px] overflow-hidden">
      <div className="container relative ">
        <HeroImage />
        <div className="relative z-10 md:max-w-[539px] xl:max-w-[693px] pointer-events-none">
          <SectionTitle
            hero
            text={hero.title}
            className="smOnly:-mt-3 mb-4 md:mb-6"
          />
          <p className="font-fixel max-w-[340px] text-base md:text-xl leading-normal mb-8 md:mb-[52px] md:max-w-[431px] xl:mb-[60px] text-color-text-secondary">
            {hero.details}
          </p>
          <LinkButton label={hero.buttonLabel} href={`/${tortsSlug}`} />
        </div>
      </div>
    </section>
  );
};
