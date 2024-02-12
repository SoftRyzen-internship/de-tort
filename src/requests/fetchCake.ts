import { request } from "graphql-request";

import { getCake } from "@/requests/queries/getCake";

import { CakeDataType, CakeType, CakeSlug } from "@/types";

export const fetchCake = async (cake: CakeSlug): Promise<CakeType[]> => {
  try {
    const res: CakeDataType = await request(
      process.env.API_BASE_URL as string,
      getCake,
      { cake: cake },
    );

    const data = res.cakes.data.map(({ attributes }) => {
      const cakeImages = attributes.images.map(
        ({ image_description, photo }) => {
          return {
            desc: image_description,
            url: photo.data.attributes.url,
          };
        },
      );

      const {
        slug,
        title,
        description,
        price,
        decor,
        production_time,
        portion_size,
        toppings: toppingsData,
      } = attributes;

      const toppings = toppingsData.data.map(
        ({
          attributes: {
            name,
            description,
            price_double,
            unique,
            images: imagesData,
          },
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
            unique,
            images,
          };
        },
      );

      return {
        slug,
        title,
        description,
        price,
        decor,
        production_time,
        portion_size,
        images: cakeImages,
        toppings,
      };
    });

    return data;
  } catch (error) {
    console.log("fetch cake error: ", error);

    return [];
  }
};
