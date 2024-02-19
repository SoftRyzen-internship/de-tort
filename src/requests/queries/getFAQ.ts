import { gql } from "graphql-request";

export const getFAQ = gql`
  query {
    faqs(sort: "id:asc", pagination: { limit: 100 }) {
      data {
        attributes {
          question
          answer
        }
      }
    }
  }
`;
