import metaBase from "@/data/meta/base.json";
import metaCakes from "@/data/meta/cakes.json";
import metaSweets from "@/data/meta/sweets.json";
import metaB2B from "@/data/meta/coffee-shops.json";

import { CakeSlug, SweetsSlug } from "@/types";

export const metadataGenerator = ({
  page,
  cake,
  sweet,
}: {
  page: "cakes" | "cake" | "sweet" | "b2b";
  cake?: CakeSlug;
  sweet?: SweetsSlug;
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_MAIN_SITE_URL as string;

  const { description, keywords, openGraph } = metaBase;

  const cakesObj = metaSweets.find(({ slug }) => slug === "cakes");
  const cakeObj = metaCakes.find(({ slug }) => slug === cake);
  const sweetObj = metaSweets.find(({ slug }) => slug === sweet);

  const getTitle = () => {
    switch (page) {
      case "cakes":
        return cakesObj?.title || "";
      case "cake":
        return cakeObj?.title || "";
      case "sweet":
        return sweetObj?.title || "";
      case "b2b":
        return metaB2B.title;
      default:
        return "";
    }
  };

  const getDesc = () => {
    switch (page) {
      case "cakes":
        return cakesObj?.description || description;
      case "cake":
        return cakeObj?.description || description;
      case "sweet":
        return sweetObj?.description || description;
      case "b2b":
        return metaB2B.description || description;
      default:
        return description;
    }
  };

  const getKeywords = () => {
    switch (page) {
      case "cakes":
        return cakesObj?.keywords || keywords;
      case "cake":
        return cakeObj?.keywords || keywords;
      case "sweet":
        return sweetObj?.keywords || keywords;
      case "b2b":
        return metaB2B.keywords || keywords;
      default:
        return keywords;
    }
  };

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
      default:
        return baseUrl;
    }
  };

  return {
    title: getTitle(),
    description: getDesc(),
    keywords: getKeywords(),
    alternates: {
      canonical: getUrl(),
    },
    openGraph: { ...openGraph, url: getUrl() },
  };
};
