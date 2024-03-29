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

export type InfoSlug = "contract-offer" | "service-terms";

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

export type TKeyValue = {
  [key: string]: string;
};

export type InfoPageDataType = {
  information: {
    data: {
      attributes: InfoPageType;
    };
  };
};

export type InfoPageType = {
  contract_offer: string;
  service_terms: string;
};
