import { TKeyValue } from "@/types";

export function getValue(titles: TKeyValue, slug: string) {
  return titles[slug] ? titles[slug] : titles.default;
}
