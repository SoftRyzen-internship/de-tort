import metaBase from "@/data/meta/base.json";
import metaCakes from "@/data/meta/cakes.json";
import metaSweets from "@/data/meta/sweets.json";
import metaB2B from "@/data/meta/coffee-shops.json";
import metaInfo from "@/data/meta/information.json";

import { CakeSlug, InfoSlug, SweetsSlug } from "@/types";

export const metadataGenerator = ({
  page,
  cake,
  sweet,
  info,
}: {
  page: "cakes" | "cake" | "sweet" | "b2b" | "info";
  cake?: CakeSlug;
  sweet?: SweetsSlug;
  info?: InfoSlug;
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_MAIN_SITE_URL as string;

  const { description, keywords, openGraph } = metaBase;

  const getData = () => {
    switch (page) {
      case "cakes":
        return metaSweets.find(({ slug }) => slug === "cakes");
      case "cake":
        return metaCakes.find(({ slug }) => slug === cake);
      case "sweet":
        return metaSweets.find(({ slug }) => slug === sweet);
      case "b2b":
        return metaB2B;
      case "info":
        return metaInfo.find(({ slug }) => slug === info);
      default:
        return undefined;
    }
  };

  const metadata = getData();

  const getUrl = () => {
    switch (page) {
      case "cakes":
        return `${baseUrl}cakes/`;
      case "cake":
        return `${baseUrl}cakes/${cake}/`;
      case "sweet":
        return `${baseUrl}${sweet}/`;
      case "b2b":
        return `${baseUrl}coffee-shops/`;
      case "info":
        return `${baseUrl}information/${info}/`;
      default:
        return baseUrl;
    }
  };

  return {
    title: metadata?.title || "",
    description: metadata?.description || description,
    keywords: metadata?.keywords || keywords,
    alternates: {
      canonical: getUrl(),
    },
    openGraph: { ...openGraph, url: getUrl() },
  };
};
