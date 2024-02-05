"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";

import { getSliderConfigs } from "./SliderConfig";

// import { ReviewCard } from "@/components/ui/ReviewCard";

import { cn } from "@/utils/helpers";

import { SliderProps } from "./types";

export const Slider: React.FC<SliderProps> = ({
  slides,
  section = "top",
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
        {slides.map((slide, idx) => (
          <SwiperSlide
            key={idx}
            tag="div"
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
