import { TSections } from "@/components/base/Slider/types";

const dimensions = {
  sm: 360,
  md: 768,
  lg: 1280,
};

export const getSliderConfigs = (section: TSections) => {
  switch (section) {
    case "achievements": {
      return {
        [dimensions.sm]: {
          slidesPerView: 1,
          watchSlidesProgress: false,
        },
        [dimensions.sm]: {
          slidesPerView: 2,
          spaceBetween: 32,
          initialSlide: 1,
        },
        [dimensions.lg]: {
          loop: false,
          slidesPerView: 3,
          watchOverFlow: true,
          centeredSlidesBounds: true,
        },
      };
    }
    case "top": {
      return {
        [dimensions.sm]: {
          slidesPerView: 1,
          allowTouchMove: false,
          loop: false,
          centeredSlidesBounds: true,
        },
        [dimensions.md]: {
          slidesPerView: 2,
          spaceBetween: 32,
          allowTouchMove: false,

          loop: false,
        },
        [dimensions.lg]: {
          slidesPerView: 3,
          allowTouchMove: false,
          grabCursor: false,
          loop: false,
        },
      };
    }
    case "feedback": {
      return {
        [dimensions.sm]: {
          slidesPerView: 1,
        },
        [dimensions.md]: {
          slidesPerView: 2,
        },
        [dimensions.lg]: {
          slidesPerView: 3,
          spaceBetween: 16,
          watchSlidesProgress: true,
          lazyPreloadPrevNext: 1,
        },
      };
    }

    default: {
      return {
        [dimensions.sm]: {
          slidesPerView: 1,
        },
        [dimensions.md]: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        [dimensions.lg]: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      };
    }
  }
};
