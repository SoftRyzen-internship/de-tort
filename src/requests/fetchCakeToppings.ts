import { request } from "graphql-request";

import { getCakeToppings } from "@/requests/queries/getCakeToppings";

import { CakeSlug, CakeToppingType, CakeToppingsDataType } from "@/types";

export const fetchCakeToppings = async (
  cake: CakeSlug,
): Promise<CakeToppingType[]> => {
  try {
    const res: CakeToppingsDataType = await request(
      process.env.API_BASE_URL as string,
      getCakeToppings,
      {
        cake: cake,
      },
    );

    const data = res.toppings.data.map(
      ({
        attributes: { name, description, price_double, images: imagesData },
      }) => {
        const images = imagesData.map(({ layers, image }) => ({
          layers,
          desc: image.image_description,
          url: image.photo.data.attributes.url,
        }));

        return {
          name,
          description,
          price_double,
          images,
        };
      },
    );

    return data;
  } catch (error) {
    return [];
  }
};
