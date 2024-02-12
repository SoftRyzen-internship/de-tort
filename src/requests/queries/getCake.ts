import { gql } from "graphql-request";

export const getCake = gql`
  query ($cake: String) {
    cakes(filters: { slug: { eq: $cake } }) {
      data {
        attributes {
          slug
          title
          description
          price
          decor
          production_time
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
          toppings {
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
      }
    }
  }
`;
