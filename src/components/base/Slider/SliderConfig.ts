import { TSections } from "@/components/base/Slider/types";

const dimensions = {
  sm: 280,
  md: 768,
  lg: 1280,
};

export const getSliderConfigs = (section: TSections) => {
  switch (section) {
    case "advantages": {
      return {
        [dimensions.sm]: {
          loop: false,
        },
        [dimensions.lg]: {
          slidesPerView: 4,
          spaceBetween: 12,
          loopedSlides: 4,
          loop: true,
        },
      };
    }
    case "top": {
      return {
        [dimensions.sm]: {
          slidesPerView: 1,
          loopedSlides: 4,
        },
        [dimensions.md]: {
          loop: false,
        },
      };
    }
    case "feedback": {
      return {
        [dimensions.sm]: {
          slidesPerView: 1,
          loopedSlides: 3,
        },
        [dimensions.md]: {
          slidesPerView: 1,
        },
        [dimensions.lg]: {
          slidesPerView: 2,
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
