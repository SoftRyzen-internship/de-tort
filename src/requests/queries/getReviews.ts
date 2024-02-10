import { gql } from "graphql-request";

export const getReviews = gql`
  query {
    reviews {
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
