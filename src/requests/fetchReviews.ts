import { request } from "graphql-request";

import { getReviews } from "@/requests/queries/getReviews";
import { convertDate } from "@/utils/helpers";

import { ReviewsDataType, ReviewsType } from "@/types";

export const fetchReviews = async (): Promise<ReviewsType> => {
  try {
    const res: ReviewsDataType = await request(
      process.env.API_BASE_URL as string,
      getReviews,
    );

    return (
      res?.reviews.data?.map(({ attributes: { author, date, text } }) => ({
        date: convertDate(date),
        author,
        text,
      })) || []
    );
  } catch (error) {
    console.log("fetch reviews error: ", error);

    return [];
  }
};
