import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus";
import { HeaderFooter } from "../get-menus";
import SeoFragment from "../fragments/seo";

export const GET_PAGE = gql`
query GET_PAGE($uri: [String]) {
	${HeaderFooter}
	  page: productTags(where: {slug: $uri}) {
    nodes {
      name
      products(where: {taxQuery: {taxArray: {taxonomy: PRODUCTTAG}}}) {
        nodes {
          title
        }
      }
	  roundupFields {
        faqs
        howWeChose
        intro
        typesOf
        whatToConsider
        author
    }
  }
}
}
${MenuFragment}

`;

export const GET_PAGE_BY_ID = gql`
	query GET_PAGE_BY_ID($id: ID!) {
		${HeaderFooter}
	  page(idType: DATABASE_ID, id: $id) {
	    id
	    title
	    content
	    slug
	    uri
	    seo {
          ...SeoFragment
        }
		status
	  }
	}
	${MenuFragment}
	${SeoFragment}
`;