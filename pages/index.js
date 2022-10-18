
import Layout from "../src/components/layout";
import client from '../src/apollo/client';
import { sanitize } from '../src/utils/miscellaneous';

import { handleRedirectsAndReturnData } from '../src/utils/slug';
import { GET_MENUS } from "../src/queries/get-menus";

export default function Home({ data }) {
	console.warn("DATABONER", data)
	return (

		<Layout data={data}>
			<section className="bg-[url('https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg')] bg-no-repeat bg-cover bg-center bg-gray-600 bg-blend-multiply ">
				<div className="relative py-8 2xl:px-4 lg:px-6 mx-auto max-w-screen-2xl text-white lg:py-12 2xl:py-20  z-1">
					<div className="mb-6 max-w-screen-lg  2xl:mb-6">
						<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">{data?.header?.siteTagLine}</h1>
						<p className="mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">The need for energy is universal. That's why Flowbite scientists and engineers are pioneering new research and pursuing new technologies to reduce emissions while creating more efficient fuels. We're committed to responsibly meeting the world's energy needs.</p>
						<a href="#" className="inline-flex items-center lg:py-1 2xl:py-0 px-2 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
							<button type="button" className="py-2.5 px-5 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Visit The Store</button>

						</a>
					</div>


					{/* Products Grid */}
					<div className="grid gap-8 pt-8 lg:pt-12 mt-8 lg:mt-6 2xl:mt-12 border-t border-gray-600 sm:grid-cols-2 lg:grid-cols-4">
						<div>
							<h2 className="mb-1 text-2xl font-bold">1000+</h2>
							<p className="mb-1 text-sm text-gray-300">Pet Related Medically Reviewed Articles </p>
							<a href="#" className="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline">
								Read more
								<svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
							</a>
						</div>
						<div>
							<h2 className="mb-1 text-2xl font-bold">400+</h2>
							<p className="mb-1 text-sm text-gray-300">Health topics covered</p>
							<a href="#" className="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline">
								Read more
								<svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
							</a>
						</div>
						<div>
							<h2 className="mb-1 text-2xl font-bold">1 000 000+</h2>
							<p className="mb-1 text-sm text-gray-300">Yearly readers </p>
							<a href="#" className="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline">
								Read more
								<svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
							</a>
						</div>
						<div>
							<h2 className="mb-1 text-2xl font-bold">2022 plans</h2>
							<p className="mb-1 text-sm text-gray-300">Investing in the future of Africa</p>
							<a href="#" className="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline">
								Read more
								<svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
							</a>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-white dark:bg-gray-900">
				<div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
					<dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
						<div className="flex flex-col items-center justify-center">
							<dt className="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
							<dd className="font-light text-gray-500 dark:text-gray-400">developers</dd>
						</div>
						<div className="flex flex-col items-center justify-center">
							<dt className="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
							<dd className="font-light text-gray-500 dark:text-gray-400">contributors</dd>
						</div>
						<div className="flex flex-col items-center justify-center">
							<dt className="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
							<dd className="font-light text-gray-500 dark:text-gray-400">organizations</dd>
						</div>
					</dl>
				</div>
			</section>

		</Layout>

	);
}
export async function getStaticProps(context) {

	// Use new keyword when initializing the client - When already initialized, do not use keyword
	const { data } = await client.query({

		query: GET_MENUS

	});

	console.warn("data", data);

	return {
		props: {
			data: {
				header: data?.header || [],
				menus: {
					headerMenus: data?.headerMenus?.edges || [],
					footerMenus: data?.footerMenus?.edges || [],
					footerMenus1: data?.footerMenus1?.edges || [],
					footerMenus2: data?.footerMenus2?.edges || [],
					footerMenus3: data?.footerMenus3?.edges || [],
					footerMenus4: data?.footerMenus4?.edges || [],
				},
				footer: data?.footer || [],

			} // Will be passed to the page component as props
		}, revalidate: 1

	}
}
