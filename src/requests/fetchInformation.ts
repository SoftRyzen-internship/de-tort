import { request } from "graphql-request";

import { getInformation } from "./queries/getInformation";

import json from "@/data/information.json";

import { InfoPageDataType, InfoPageType } from "@/types";

export const fetchInformation = async (): Promise<InfoPageType> => {
  try {
    const res: InfoPageDataType = await request(
      process.env.API_BASE_URL as string,
      getInformation,
    );

    return res.information.data.attributes;
  } catch (error) {
    return json.data;
  }
};
