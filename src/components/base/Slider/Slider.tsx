"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";

import { getSliderConfigs } from "./SliderConfig";

import img1 from "~/images/cakepops-@x2.jpg";
import img2 from "~/images/cheesecakes-@x2.jpg";
import img3 from "~/images/cookies-@x2.jpg";
import img4 from "~/images/pasta-@x2.jpg";

import { cn } from "@/utils/helpers";

import { SliderProps } from "./types";

const defaultSlides = [img1, img2, img3, img4];

export const Slider: React.FC<SliderProps> = ({
  slides = defaultSlides,
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
        lazyPreloadPrevNext={1}
        loop={true}
        speed={800}
        spaceBetween={24}
        grabCursor={true}
        initialSlide={1}
        breakpoints={getSliderConfigs(section)}
        className={cn("w-full ", customClass)}
      >
        {slides.map((slide, idx: number) => (
          <SwiperSlide
            key={idx}
            tag="li"
            className={cn(
              `overflow-hidden rounded-3xl relative `,
              customSlideClass,
            )}
          >
            <Image
              width={320}
              height={320}
              src={slide}
              alt={"some"}
              className="w-full h-auto object-cover"
            />
            <div className="swiper-lazy-preloader absolute top-2/4 left-2/4" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
