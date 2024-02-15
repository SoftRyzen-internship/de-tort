import { SweetsSlug, CakeToppingType, ImageType, CakeSlug } from "@/types";

export type DessertInfoProps = {
  dessert: {
    slug: SweetsSlug | CakeSlug;
    title: string;
    description: string;
    price: string;
    decor: string | null;
    production_time: string;
    tastes?: string;
    portion_size?: { label: string; size: string } | null | undefined;
    images: ImageType[];
    toppings?: CakeToppingType[];
  };
};

export type TImage = {
  url: string;
  desc: string;
};
