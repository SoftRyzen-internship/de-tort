"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";

import { cn } from "@/utils/helpers";
import { getSliderConfigs } from "./SliderConfig";

import { SliderProps } from "./types";

export const Slider: React.FC<SliderProps> = ({
  slides,
  section,
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
        lazyPreloadPrevNext={1}
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
