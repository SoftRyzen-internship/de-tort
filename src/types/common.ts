export type CakeSlug =
  | "mini-cakes"
  | "bento-cakes"
  | "middle-cakes"
  | "big-cakes";

export type ImageDataType = {
  image_description: string;
  photo: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
};

export type ImageType = {
  url: string;
  desc: string;
};

export type FieldType =
  | "textarea"
  | "text"
  | "tel"
  | "calendar"
  | "topping"
  | "number";
