import { gql } from "graphql-request";

export const getSweet = gql`
  query ($sweet: String) {
    sweets(filters: { slug: { eq: $sweet } }) {
      data {
        attributes {
          slug
          title
          description
          tastes
          production_time
          decor
          portion_size {
            label
            size
          }
          images {
            image_description
            photo {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
