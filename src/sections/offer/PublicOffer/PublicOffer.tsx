import { SectionTitle } from "@/components/ui/SectionTitle";

import offer from "@/data/offerData.json";

import { OfferProps } from "./types";

export const PublicOffer: React.FC<OfferProps> = ({ heading }) => {
  const content = offer.data.map(({ title, text }) => (
    <>
      {title && <h2 className="mb-4 font-fixel">{title}</h2>}
      <pre className="font-fixel whitespace-pre-wrap text-base leading-normal text-color-text-secondary md:text-xl xl:text-lg">
        {text}
      </pre>
    </>
  ));

  return (
    <section className="pt-[148px] pb-[60px] md:pt-[168px] md:pb-20 xl:pb-[120px] xl:pt-[208px]">
      <div className="container xl:px-60">
        <SectionTitle
          hero
          text={heading}
          className="text-center mb-7 md:mb-9 md:tracking-[0.04em] md:text-[40px] xl:tracking-normal"
        />
        <div className="flex flex-col gap-7 md:gap-9">{content}</div>
      </div>
    </section>
  );
};
/*h2
font-weight: 600;
font-size: 20px;
line-height: 140%;
color: #383838;


tablet and more
font-size: 24px;
text-align: center;


pre
font-weight: 400;
font-size: 16px;
line-height: 140%;
color: #383838;

tablet
font-size: 20px;

desk
text-align: justify;


*/
