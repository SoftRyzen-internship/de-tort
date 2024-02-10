type ReviewsItemType = {
  author: string;
  date: string;
  text: string;
};

export type ReviewsType = ReviewsItemType[];

export type ReviewsDataType = {
  reviews: {
    data: {
      attributes: ReviewsItemType;
    }[];
  };
};
