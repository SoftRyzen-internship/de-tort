import { request } from "graphql-request";

import { getContacts } from "@/requests/queries/getContacts";

import { ContactsDataType, ContactsType } from "@/types";

import json from "@/data/common.json";

export const fetchContacts = async (): Promise<ContactsType> => {
  const { instagramLink, instagramUser, phone } = json.contacts;

  const staticJson = {
    phone: phone,
    instagram: {
      label: `static ${instagramUser}`,
      url: instagramLink,
    },
  };

  try {
    const res: ContactsDataType = await request(
      process.env.API_BASE_URL as string,
      getContacts,
    );

    return res.contact.data.attributes || staticJson;
  } catch (error) {
    return staticJson;
  }
};
