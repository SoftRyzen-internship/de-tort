import { gql } from "graphql-request";

export const getReviews = gql`
  query {
    reviews(pagination: { limit: 100 }) {
      data {
        attributes {
          author
          date
          text
        }
      }
    }
  }
`;
