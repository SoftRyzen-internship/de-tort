import { LinkButton } from "@/components/ui/LinkButton";

import json from "@/data/common.json";

export const NotFound: React.FC = () => {
  const {
    heading,
    subtitle,
    promotionText,
    promotionBtnLabelShort,
    promotionBtnLabelLong,
  } = json.notFoundPage;

  return (
    <section className="grow flex items-center bg-color-bg-primary pt-[96px] md:pt-[160px] xl:pt-[204px] pb-[60px] md:pb-[80px] xl:pb-[120px]">
      <div className="container flex flex-col gap-6 md:gap-8 items-center xl:flex-row  xl:justify-center xl:gap-[160px]">
        <h1 className="text-title leading-[1.2] tracking-[1.12px] text-[72px] md:text-[96px] md:tracking-[1.76px] xl:text-[120px] xl:tracking-[2.4px]">
          {heading}
        </h1>

        <div className="flex flex-col items-center gap-8 md:gap-12 xl:gap-16 text-center block-404 relative">
          <div className="flex flex-col gap-4 md:gap-8 xl:gap-12 font-fixel text-base md:text-xl leading-normal text-color-text-secondary">
            <p className="max-w-[340px] md:max-w-[431px]">{subtitle}</p>

            <p className="max-w-[340px] md:max-w-[431px] smOnly:hidden">
              {promotionText}
            </p>
          </div>

          <LinkButton
            label={promotionBtnLabelLong}
            href="/"
            className="smOnly:hidden"
          />

          <LinkButton
            label={promotionBtnLabelShort}
            href="/"
            className="md:hidden"
          />
        </div>
      </div>
    </section>
  );
};
