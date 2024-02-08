import { gql } from "graphql-request";

export const getFAQ = gql`
  query {
    faqs {
      data {
        attributes {
          question
          answer
        }
      }
    }
  }
`;
