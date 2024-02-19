import metaSweets from "@/data/meta/sweets.json";
import metaCakes from "@/data/meta/cakes.json";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_MAIN_SITE_URL as string;

  const homeUrl = {
    url: `${baseUrl}`,
    lastModified: new Date(),
  };

  const b2bUrl = {
    url: `${baseUrl}coffee-shops/`,
    lastModified: new Date(),
  };

  //todo: including cakes general page...
  const sweetsAssortmentUrls = metaSweets.map(({ slug }) => ({
    url: `${baseUrl}${slug}/`,
    lastModified: new Date(),
  }));

  const cakesAssortmentUrls = metaCakes.map(({ slug }) => ({
    url: `${baseUrl}cakes/${slug}/`,
    lastModified: new Date(),
  }));

  return [homeUrl, b2bUrl, ...sweetsAssortmentUrls, ...cakesAssortmentUrls];
}
