export type FAQType = FAQItem[];

export type FAQDataType = {
  faqs: {
    data: {
      attributes: FAQItem;
    }[];
  };
};

type FAQItem = {
  question: string;
  answer: string;
};
