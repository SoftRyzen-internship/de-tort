import { ImageDataType, ImageType, SweetsSlug } from ".";

export type SweetDataType = {
  sweets: {
    data: {
      attributes: {
        slug: SweetsSlug;
        title: string;
        description: string;
        price: string;
        tastes: string;
        production_time: string;
        decor: string | null;
        portion_size: {
          label: string;
          size: string;
        } | null;
        images: ImageDataType[];
      };
    }[];
  };
};

export type SweetsItemType = {
  slug: SweetsSlug;
  title: string;
  description: string;
  price: string;
  tastes: string;
  production_time: string;
  decor: string | null;
  portion_size: {
    label: string;
    size: string;
  } | null;
  images: ImageType[];
};
