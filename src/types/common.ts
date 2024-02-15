export type CakeSlug =
  | "mini-cakes"
  | "bento-cakes"
  | "middle-cakes"
  | "big-cakes";

export type SweetsSlug =
  | "cupcakes"
  | "cheesecakes"
  | "sweet-sets"
  | "cookies"
  | "macaron"
  | "cake-pops";

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

export type B2bPageDataType = {
  b2BPage: {
    data: {
      attributes: B2bPageType;
    };
  };
};

export type B2bPageType = {
  heading: string;
};
