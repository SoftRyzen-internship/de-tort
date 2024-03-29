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
          spaceBetween: 32,
          watchSlidesProgress: false,
          loop: true,
        },
        [dimensions.md]: {
          slidesPerView: 2,
          spaceBetween: 32,
          allowTouchMove: true,
          loop: true,
        },
        [dimensions.lg]: {
          loop: false,
          slidesPerView: 3,
          allowTouchMove: false,
          centeredSlidesBounds: true,
        },
      };
    }
    case "toppings": {
      return {
        [dimensions.sm]: {
          slidesPerView: 1,
          loop: false,
        },
        [dimensions.md]: {
          slidesPerView: 2,
          spaceBetween: 32,
          loop: false,
        },
        [dimensions.lg]: {
          slidesPerView: 3,
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
          spaceBetween: 32,
        },
        [dimensions.lg]: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      };
    }
    case "desserts": {
      return {
        [dimensions.sm]: {
          slidesPerView: 1,
        },
      };
    }

    default: {
      return {
        [dimensions.sm]: {
          slidesPerView: 1,
        },
      };
    }
  }
};
