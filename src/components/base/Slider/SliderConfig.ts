import { TSections } from "@/components/base/Slider/types";

const dimensions = {
  sm: 320,
  md: 768,
  lg: 1280,
};

export const getSliderConfigs = (section: TSections) => {
  switch (section) {
    case "advantages": {
      return {
        [dimensions.sm]: {
          loop: true,
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
          loop: false,
          centeredSlidesBounds: true,
        },
        [dimensions.md]: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        [dimensions.lg]: {
          slidesPerView: 3,
        },
      };
    }
    case "feedback": {
      return {
        [dimensions.sm]: {
          slidesPerView: 1,
          loop: true,
        },
        [dimensions.md]: {
          slidesPerView: 2,
        },
        [dimensions.lg]: {
          slidesPerView: 3,
          spaceBetween: 16,
          watchSlidesProgress: true,
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
