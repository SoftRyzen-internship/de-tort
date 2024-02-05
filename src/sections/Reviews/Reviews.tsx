import { Slider } from "@/components/base/Slider";
import { SliderNav } from "@/components/base/SliderNav";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

import data from "@/data/reviews.json";

export const Reviews = () => {
  const { title, reviewList } = data;

  const slides = reviewList?.map(({ date, author, text, key }) => (
    <ReviewCard date={date} author={author} text={text} key={key} />
  ));

  return (
    <>
      <section className="section pb-[60px] md:pb-[73px] bg-color-bg-accent">
        <div className="container smOnly:pl-[13px] md:pl-[25px] xl:pb-[113px] relative">
          <SectionTitle
            text={title}
            className="mb-6 pl-[7px] md:mb-10 xl:mb-[60px]"
          />
          <Slider
            section="feedback"
            slides={slides}
            customClass="!pl-[7px] !pb-[7px]"
            customSlideClass=" overflow-visible"
          />
          <SliderNav
            section="feedback"
            className="smOnly:mt-[17px] md:absolute md:right-8 xl:right-[32px] md:top-0 xl:top-[2px] xl:h-[68px]"
          />
        </div>
      </section>
    </>
  );
};
