import { request } from "graphql-request";

import { getSweet } from "@/requests/queries/getSweet";

import { SweetsSlug, SweetDataType, SweetsItemType } from "@/types";

export const fetchSweet = async (
  sweet: SweetsSlug,
): Promise<SweetsItemType[]> => {
  try {
    const res: SweetDataType = await request(
      process.env.API_BASE_URL as string,
      getSweet,
      {
        sweet: sweet,
      },
    );

    const data = res.sweets.data.map(({ attributes }) => {
      const sweetImages = attributes.images.map(
        ({ image_description, photo }) => {
          return {
            desc: image_description,
            url: photo.data.attributes.url,
          };
        },
      );

      return {
        ...attributes,
        images: sweetImages,
      };
    });

    return data;
  } catch (error) {
    return [];
  }
};
