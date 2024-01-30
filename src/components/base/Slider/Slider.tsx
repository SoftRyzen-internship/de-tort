"use client";

import Image from "next/image";
import {
  FC,
  // ReactNode,
  // useCallback, useState
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Swiper as SwiperClass } from "swiper/types";

import { cn } from "@/utils/helpers/cn";
// import { getSliderOptions } from "@/utils/getSliderOptions";

// import SliderNavigation from "@/components/SliderNavigation";

import "swiper/css";

import img1 from "~/images/cakepops-@x2.jpg";
import img2 from "~/images/cheesecakes-@x2.jpg";
import img3 from "~/images/cookies-@x2.jpg";
import img4 from "~/images/pasta-@x2.jpg";

import { SliderProps } from "./types";

const defaultSlides = [img1, img2, img3, img4];

export const Slider: FC<SliderProps> = ({
  slides = defaultSlides,
  section = "services",
}) => {
  //   const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  //   const handlePrev = useCallback(() => {
  //     swiperRef?.slidePrev();
  //   }, [swiperRef]);

  //   const handleNext = useCallback(() => {
  //     swiperRef?.slideNext();
  //   }, [swiperRef]);

  return (
    <>
      <Swiper
        wrapperTag="ul"
        // onSwiper={setSwiperRef}
        // id={`swiper-${section}`}
        slidesPerView={1}
        loop={true}
        speed={500}
        spaceBetween={24}
        // breakpoints={getSliderOptions(section)}
        className={"!mb-6  w-full !h-[424px] md:!h-[460px] lg:!h-[636px]"}
      >
        {slides.map((slide, idx: number) => (
          <SwiperSlide
            key={idx}
            tag="li"
            className={cn(
              "overflow-hidden rounded-3xl relative cursor-grab",
              `${section}-slide`,
            )}
          >
            <Image
              width={600}
              height={429}
              src={slide}
              alt={"some"}
              loading="lazy"
              sizes="(max-width: 767px) 280px, (max-width: 1279px) 400px, 600px"
              className="w-[280px] h-[187px] tablet:w-[415px] tablet:h-[294px] desk:w-[600px] desk:h-[429px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <SliderNavigation onNext={handleNext} onPrev={handlePrev} /> */}
    </>
  );
};
