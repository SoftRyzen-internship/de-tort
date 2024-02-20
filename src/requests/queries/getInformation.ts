import { gql } from "graphql-request";

export const getInformation = gql`
  query {
    information {
      data {
        attributes {
          contract_offer
          service_terms
        }
      }
    }
  }
`;
