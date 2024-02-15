import { SweetsSlug, CakeToppingType, ImageType, CakeSlug } from "@/types";

export type DessertInfoProps = {
  dessert: {
    slug: SweetsSlug | CakeSlug;
    title: string;
    description: string;
    price: string;
    decor: string | null;
    production_time: string;
    images: ImageType[];
    tastes?: string;
    portion_size?: { label: string; size: string } | null | undefined;
    toppings?: CakeToppingType[];
  };
};

export type TImage = {
  url: string;
  desc: string;
};
