import { gql } from "graphql-request";

export const getCakeToppings = gql`
  query ($cake: String) {
    toppings(filters: { cakes: { slug: { eq: $cake } } }) {
      data {
        attributes {
          name
          uniqe
          description
          price_double
          images {
            layers
            image {
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
  }
`;
