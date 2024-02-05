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
      <section className="section pb-[60px] bg-color-bg-accent">
        {/* <section className="section bg-color-bg-accent"> */}
        <div className="container smOnly:pl-[13px] smOnly:relative">
          <SectionTitle text={title} className="mb-6 pl-[7px]" />
          <Slider
            section="feedback"
            slides={slides}
            customClass="!pl-[7px] !pb-[7px]"
            customSlideClass=" overflow-visible"
          />
          <SliderNav
            section="feedback"
            className="smOnly:mt-[17px] md:absolute md:right-8 md:top-0"
          />
        </div>
      </section>
    </>
  );
};
