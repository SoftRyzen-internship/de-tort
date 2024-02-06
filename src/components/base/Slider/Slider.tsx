"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";

import { getSliderConfigs } from "./SliderConfig";

import { ReviewCard } from "@/components/ui/ReviewCard";

import data from "@/data/slides-example.json";

import { cn } from "@/utils/helpers";

import { SliderProps } from "./types";

const defaultSlides = data?.map(({ date, author, text, key }) => (
  <ReviewCard date={date} author={author} text={text} key={key} />
));

export const Slider: React.FC<SliderProps> = ({
  slides = defaultSlides,
  section = "toppings",
  customClass = "",
  customSlideClass = "",
}) => {
  return (
    <>
      <Swiper
        wrapperTag="ul"
        modules={[Navigation, Pagination, A11y]}
        navigation={{
          nextEl: `.button-next-${section}`,
          prevEl: `.button-prev-${section}`,
        }}
        slidesPerView={1}
        updateOnWindowResize={true}
        loop={true}
        speed={800}
        spaceBetween={24}
        grabCursor={true}
        breakpoints={getSliderConfigs(section)}
        className={cn("w-full ", customClass)}
      >
        {slides?.map((slide, idx) => (
          <SwiperSlide
            key={idx}
            tag="li"
            className={cn(
              `overflow-hidden rounded-3xl relative `,
              customSlideClass,
            )}
          >
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
