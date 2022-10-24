
import client from '../src/apollo/client';
import { GET_PAGE } from '../src/queries/pages/get-page';
import { useRouter } from 'next/router';
import { FALLBACK, handleRedirectsAndReturnData, isCustomPageUri } from '../src/utils/slug';
import { sanitize } from '../src/utils/miscellaneous';
import Layout from '../src/components/layout';


export default function Home({ data }) {
	console.warn("DATABONER", data)
	return (<div>
	</div>

	);
}
