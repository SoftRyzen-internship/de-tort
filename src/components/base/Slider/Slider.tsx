"use client";

import Image from "next/image";
import {
  FC,
  // ReactNode,
  useCallback,
  useState,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";

// import { cn } from "@/utils/helpers/cn";
import { getSliderConfigs } from "./SliderConfig";

import { SliderNav } from "../SliderNav/SliderNav";

import "swiper/css";

import img1 from "~/images/cakepops-@x2.jpg";
import img2 from "~/images/cheesecakes-@x2.jpg";
import img3 from "~/images/cookies-@x2.jpg";
import img4 from "~/images/pasta-@x2.jpg";

import { SliderProps } from "./types";

const defaultSlides = [img1, img2, img3, img4];

export const Slider: FC<SliderProps> = ({
  slides = defaultSlides,
  section = "top",
}) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handlePrev = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <>
      <Swiper
        wrapperTag="ul"
        onSwiper={setSwiperRef}
        slidesPerView={3}
        loop={true}
        speed={500}
        spaceBetween={24}
        grabCursor={true}
        centeredSlides={true}
        breakpoints={getSliderConfigs(section)}
        className={"w-full "}
      >
        {slides.map((slide, idx: number) => (
          <SwiperSlide
            key={idx}
            tag="li"
            className={"overflow-hidden rounded-3xl relative !w-[320px]"}
          >
            <Image
              width={320}
              height={320}
              src={slide}
              alt={"some"}
              loading="lazy"
              sizes="(max-width: 767px) 320px, (max-width: 1279px) 336px, 384px"
              className="w-[320px] h-[320px] tablet:w-[415px] tablet:h-[294px] desk:w-[600px] desk:h-[429px] object-cover"
            />
            <div className="swiper-lazy-preloader absolute top-2/4 left-2/4" />
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderNav onNext={handleNext} onPrev={handlePrev} />
    </>
  );
};
