import { Metadata } from "next";

import { PublicOffer } from "@/sections/offer/PublicOffer";

import { metadataGenerator } from "@/utils/helpers";

import { fetchInformation } from "@/requests";

import metaInfo from "@/data/meta/information.json";

import { InfoSlug } from "@/types";

export const dynamicParams = false;
export const dynamic = "error";
export const revalidate = false;

export async function generateStaticParams() {
  const staticParams = metaInfo.map(({ slug }) => {
    return { info: slug };
  });

  return staticParams;
}

export async function generateMetadata({
  params: { info },
}: {
  params: {
    info: InfoSlug;
  };
}): Promise<Metadata> {
  return metadataGenerator({ page: "info", info });
}

export default async function InfoPage({
  params: { info },
}: {
  params: { info: InfoSlug };
}) {
  const { contract_offer, service_terms } = await fetchInformation();
  // todo: parse & show information markdown according to current slug

  return (
    <>
      <PublicOffer
        data={info === "contract-offer" ? contract_offer : service_terms}
      />
    </>
  );
}
