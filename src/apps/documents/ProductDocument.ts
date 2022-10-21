import { gql } from 'graphql-request'

export function getProductsDocument() {
  return gql`
    query {
      products {
        data {
          id
          sales_office
          store_name
          prefecture
          address
          telephone_number
          number_of_equipment
        }
        from
        to
        total
        per_page
      }
    }
  `
}
