import { request } from "graphql-request";

import { getFAQ } from "@/requests/queries/getFAQ";

import { FAQDataType, FAQType } from "@/types";

export const fetchFAQ = async (): Promise<FAQType> => {
  try {
    const res: FAQDataType = await request(
      process.env.API_BASE_URL as string,
      getFAQ,
    );

    return (
      res?.faqs.data?.map(({ attributes: { question, answer } }) => ({
        question,
        answer,
      })) || []
    );
  } catch (error) {
    console.error("fetch FAQ error: ", error);
    return [];
  }
};
