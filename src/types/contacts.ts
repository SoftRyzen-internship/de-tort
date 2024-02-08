export type ContactsType = {
  phone: string;
  instagram: {
    label: string;
    url: string;
  };
};

export type ContactsDataType = {
  contact: {
    data: {
      attributes: ContactsType;
    };
  };
};
