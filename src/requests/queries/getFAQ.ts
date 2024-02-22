import { gql } from "graphql-request";

export const getFAQ = gql`
  query {
    faqs(sort: "createdAt:desc", pagination: { limit: 100 }) {
      data {
        attributes {
          question
          answer
        }
      }
    }
  }
`;
