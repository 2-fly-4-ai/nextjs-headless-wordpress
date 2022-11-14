import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus";
import { HeaderFooter } from "../get-menus";
import SeoFragment from "../fragments/seo";

export const GET_PAGE = gql`
query GET_PAGE($uri: [String]) {
	${HeaderFooter}
	page: productTaxonomies(where: {slug: $uri}) {
	  nodes {
		name
		slug
		uri
		parent {
			node {
			  name
			  uri
			  parent {
				node {
				  name
				  uri
				}
			}
			}
		}
		children {
			nodes {
			  name
			}
		}
		
		products(first: 85 where: {taxQuery: {taxArray: {taxonomy: PRODUCTTAXONOMY}}}) {
		  nodes {
			title
			uri
			single_product_acf {
				asin
				brand
				productAida
				
				productImageMainUrl
				upc
				modelNumber
				keywordTerm
				fieldGroupName
				
				
				productUrl
			  }
			  productTags {
				nodes {
				  name
				  uri
				}
			  }
			  productBrands {
				nodes {
				  uri
				  name
				  brand_fields {
					searchVolume
				  }
				}
			  }
		  }
		}
		
		
		
		children {
		  nodes {
			name
			products {
			  nodes {
				slug
				title
				single_product_acf {
				  asin
				  brand
				}
				productTags {
					nodes {
					  name
					  uri
					}
				  }
				 
				
			  }
			}
		  }
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