import { CakeSlug, ImageDataType, ImageType } from "@/types/common";

export type CakeDataType = {
  cakes: {
    data: {
      attributes: {
        slug: CakeSlug;
        title: string;
        description: string;
        price: string;
        decor: string | null;
        production_time: string;
        portion_size: {
          label: string;
          size: string;
        };
        images: ImageDataType[];
        toppings: {
          data: CakeToppingDataType[];
        };
      };
    }[];
  };
};

export type CakeToppingDataType = {
  attributes: {
    name: string;
    description: string;
    price_double: string;
    images: ToppingImageDataType[];
    unique?: boolean;
  };
};

export type CakeToppingsDataType = {
  toppings: {
    data: CakeToppingDataType[];
  };
};

export type CakeToppingType = {
  name: string;
  description: string;
  price_double: string;
  images: CakeToppingImageType[];
  unique?: boolean;
};

export type CakeType = {
  slug: CakeSlug;
  title: string;
  description: string;
  price: string;
  decor: string | null;
  production_time: string;
  portion_size: {
    label: string;
    size: string;
  };
  images: ImageType[];
  toppings: CakeToppingType[];
};

export type CakeToppingImageType = {
  layers: "single" | "double";
  url: string;
  desc: string;
};

type ToppingImageDataType = {
  layers: "single" | "double";
  image: ImageDataType;
};
