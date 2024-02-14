import { gql } from "graphql-request";

export const getReviews = gql`
  query {
    reviews(sort: "date:desc", pagination: { limit: 100 }) {
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
