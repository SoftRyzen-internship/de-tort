import { gql } from "graphql-request";

export const getB2bPageData = gql`
  query {
    b2BPage {
      data {
        attributes {
          heading
        }
      }
    }
  }
`;
