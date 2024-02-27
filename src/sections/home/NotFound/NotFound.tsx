import { LinkButton } from "@/components/ui/LinkButton";
import { SectionTitle } from "@/components/ui/SectionTitle";

import json from "@/data/common.json";

export const NotFound: React.FC = () => {
  const { heading, subtitle, promotionText, promotionBtnLabel } =
    json.notFoundPage;
  return (
    <section className="grow flex bg-color-bg-primary pt-[96px] md:pt-[160px] xl:pt-[204px] pb-[60px] md:pb-[80px] xl:pb-[120px]">
      <div className="container md:flex md:flex-col smOnly:self-center">
        <SectionTitle
          hero
          text={heading}
          className="smOnly:text-center mb-6 md:mb-8"
        />

        <div className="flex flex-col gap-8 md:gap-12 xl:gap-16 md:ml-auto md:mt-auto">
          <div className="flex flex-col gap-4 md:gap-8 xl:gap-12 font-fixel text-base md:text-xl leading-normal text-color-text-secondary">
            <p className="max-w-[340px] md:max-w-[431px]">{subtitle}</p>
            <p className="max-w-[340px] md:max-w-[431px] smOnly:self-end">
              {promotionText}
            </p>
          </div>

          <LinkButton label={promotionBtnLabel} href="/" />
        </div>
      </div>
    </section>
  );
};
