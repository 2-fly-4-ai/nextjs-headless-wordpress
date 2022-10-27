
import { gql } from '@apollo/client'

/**
 * Get pages.
 *
 */
export const GET_PAGES_URI = gql`
 query GET_PAGES{
  pages: productTaxonomies {
    nodes {
      id
      uri
    }
  }
 }
 `;
