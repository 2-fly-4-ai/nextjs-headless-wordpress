import client from '../src/apollo/client';
import { GET_PAGES_URI } from '../src/queries/pages/get-pages';
import { isEmpty } from 'lodash';
import { GET_PAGE } from '../src/queries/pages/get-page';
import { useRouter } from 'next/router';
import Layout from '../src/components/layout';
import { FALLBACK, handleRedirectsAndReturnData, isCustomPageUri } from '../src/utils/slug';
import { sanitize } from '../src/utils/miscellaneous';

const Pages = ({ data }) => {
    console.warn("HELLLOOO", data)
    const router = useRouter();
    if (router.isFallback) {
        return (

            <div>Loading...</div>

        )
    }
    return (
        <Layout data={data}>
            Hello
        </Layout>
    )
    // return router?.query?.slug.join('/');
}

export default Pages;

export async function getStaticProps({ params }) {
    const { data } = await client.query({
        query: GET_PAGE,
        variables: {
            uri: params?.slug.join('/'),
        },
    });

    return {
        props: {
            data: {
                header: data?.header || [],
                footer: data?.footer || [],
                menus: {
                    headerMenus: data?.headerMenus?.edges || [],
                    footerMenus: data?.footerMenus?.edges || [],
                    footerMenus1: data?.footerMenus1?.edges || [],
                    footerMenus2: data?.footerMenus2?.edges || [],
                    footerMenus3: data?.footerMenus3?.edges || [],
                    footerMenus4: data?.footerMenus4?.edges || [],
                },
                page: data?.page ?? {},
                path: params?.slug.join("/")
            } // Will be passed to the page component as props
        },
        revalidate: 1
    }
}


export async function getStaticPaths() {
    const { data } = await client.query({
        query: GET_PAGES_URI
    });

    const pathsData = [];

    data?.pages?.nodes && data?.pages?.nodes.map(page => {
        if (!isEmpty(page?.uri)) {
            const slugs = page?.uri?.split('/').filter(pageSlug => pageSlug);
            pathsData.push({ params: { slug: slugs } });
        }
    });

    return {
        paths: pathsData,
        fallback: true
    };
}