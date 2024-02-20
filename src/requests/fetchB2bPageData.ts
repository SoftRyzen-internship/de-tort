import { request } from "graphql-request";

import { getB2bPageData } from "./queries/getB2bPageData";

import json from "@/data/common.json";

import { B2bPageDataType, B2bPageType } from "@/types";

export const fetchB2bPageData = async (): Promise<B2bPageType> => {
  try {
    const res: B2bPageDataType = await request(
      process.env.API_BASE_URL as string,
      getB2bPageData,
    );

    return res.b2BPage.data.attributes || json.b2b;
  } catch (error) {
    console.error("fetch B2B-page data error: ", error);

    return json.b2b;
  }
};
