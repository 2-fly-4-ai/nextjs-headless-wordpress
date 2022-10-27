
import { gql } from '@apollo/client'

/**
 * Get pages.
 *
 */
export const GET_PAGES_URI = gql`
 query GET_PAGES{
  pages: productBrands {
    nodes {
      id
      uri
    }
  }
 }
 `;
