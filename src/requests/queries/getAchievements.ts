import { gql } from "graphql-request";

export const getAchievements = gql`
  query {
    achievement {
      data {
        attributes {
          achievement {
            title
            type
          }
        }
      }
    }
  }
`;
