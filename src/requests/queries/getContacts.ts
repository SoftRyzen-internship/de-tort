import { gql } from "graphql-request";

export const getContacts = gql`
  query {
    contact {
      data {
        attributes {
          phone
          instagram {
            label
            url
          }
        }
      }
    }
  }
`;
