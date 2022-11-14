import client from '../../../src/apollo/client';
import { GET_PAGES_URI } from '../../../src/queries/categories-new/get-pages';
import { isEmpty, slice } from 'lodash';
import { GET_PAGE } from '../../../src/queries/categories-new/get-page';
import { useRouter } from 'next/router';
import Layout from '../../../src/components/layout';
import { FALLBACK, handleRedirectsAndReturnData, isCustomPageUri } from '../../../src/utils/slug';
import { sanitize } from '../../../src/utils/miscellaneous';
import Link from 'next/link';
import React from 'react';
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

const Page = ({ data }) => {
	console.warn(data)
	const router = useRouter();
	const [isMenuVisible, setMenuVisibility] = useState(false);
	const [activeId, setActiveId] = useState()

	// const [open, setOpen] = React.useState(false);


	function activeCategory(id) {
		setActiveId(id)
	}

	function isActive(id) {
		return id === activeId;
	}

	let page_tags = []
	let page_brands = []

	data?.page?.nodes[0]?.products?.nodes.map((product) => {
		product?.productTags?.nodes.map((product) => {


			let x = product?.name
			let y = x.split(" ").length
			let z = x.split("").length
			if ((y > 4) || (z > 25)) {
				return;

			};
			page_tags.push(product)

		})
		//((productTag) => {
		// 	console.warn("WHATTHEFUCK", productTag?.nodes?.name)
		// 	page_tags.append(productTag?.nodes?.name)
		// })
	})

	data?.page?.nodes[0]?.products?.nodes.map((product) => {
		let search_volume = product?.productBrands?.nodes[0]?.brand_fields?.searchVolume
		if ((search_volume < 200) || (search_volume == null)) {
			return;

		};

		let x = product?.productBrands?.nodes[0]?.name
		let y = x.split(" ").length
		let z = x.split("").length
		if ((y > 3) || (z > 18)) {
			return;

		};
		page_brands.push(product?.productBrands)

	})
	//((productTag) => {
	// 	console.warn("WHATTHEFUCK", productTag?.nodes?.name)
	// 	page_tags.append(productTag?.nodes?.name)
	// })



	page_tags = page_tags.filter((v, i, a) => a.findIndex(t => (JSON.stringify(t) === JSON.stringify(v))) === i).sort()
	page_brands = page_brands.filter((v, i, a) => a.findIndex(t => (JSON.stringify(t) === JSON.stringify(v))) === i).sort().reverse()




	// If the page is not yet generated, this will be displayed
	// initially until getStaticProps() finishes running
	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return (
		<Layout data={data}>
			<section className="bg-white dark:bg-gray-900">
				<div className='h-4 border-b'>

				</div>



				<div className="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-0 lg:px-5 flex bg-gray-50">

					<div className="sm:hidden lg:flex w-64 mb-5 flex-col border-r">
						<div className="space-x-2 mt-2 flex flex-col">
							<span className="text-gray-800 mx-2 my-4 text-left font-semibold">Tags: </span>
							<div>
								<ul className='flex flex-col align items-start gap-2'>
									{page_tags.map(tag => (
										<li key={tag.name} className="text-gray-500 dark:text-gray-400 mb-3">
											<Link href={tag.uri}>
												<a className="text-gray-600 border border-gray-500 rounded-full px-4  py-1 pb-1.5" dangerouslySetInnerHTML={{ __html: sanitize(tag?.name ?? {}) }} />
											</Link>
										</li>
									))
									}
								</ul>
							</div>
						</div>
						<div className="space-x-2 mt-5 flex flex-col">
							<span className="text-gray-800 mx-2 my-4 text-left font-semibold">Brands: </span>
							<div>
								<ul className='flex flex-wrap  align items-start gap-2'>
									{page_brands.map(brand => (
										<li key={brand?.nodes[0]?.name} className="text-gray-500 dark:text-gray-400 mb-3">
											<Link href={brand?.nodes[0]?.uri}>
												<a className="text-gray-600 border border-gray-500 rounded-full px-4 overflow-hidden py-1 pb-1.5" dangerouslySetInnerHTML={{ __html: sanitize(brand?.nodes[0]?.name ?? {}) }} />
											</Link>
										</li>
									))
									}
								</ul>
							</div>
						</div>



					</div>

					<div className="flex-1 flex-col px-3 bg-gray-100">
						<div className="flex flex-col items-start rounded-lg my-2">
							<h1><a className="m-5 text-gray-600 text-5xl px-2  py-1 pb-1.5" href={data?.page?.nodes[0]?.name}>{data?.page?.nodes[0]?.name}</a></h1>
							{/* <p className="text-gray-400 p-1 ml-1 text-lg font-medium">RESULTS</p> */}
							<p className="text-gray-600 font-medium m-5">
								<a className="mx-1 text-gray-600 border border-gray-500 rounded-full px-4  py-1 pb-1.5" href={data?.page?.nodes[0]?.parent?.node?.parent?.node?.uri}>{data?.page?.nodes[0]?.parent?.node?.parent?.node?.name}</a>
								<a className="mx-1 text-gray-600 border border-gray-500 rounded-full px-4  py-1 pb-1.5" href={data?.page?.nodes[0]?.parent?.node?.uri}>{data?.page?.nodes[0]?.parent?.node?.name}</a>
								<a className="mx-1 text-gray-600 border border-gray-500 rounded-full px-4  py-1 pb-1.5" href={data?.page?.nodes[0]?.name}>{data?.page?.nodes[0]?.name}</a>
							</p>
						</div>


						{/* PRODUCT BOX */}
						<div className="flex-1">
							<div className="grid gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
								{/* Number 1 */}
								{data?.page?.nodes[0]?.products?.nodes.map((product, index) => {
									// if (index < 3) {

									return (
										<div className="p-0 pb-3 h-68 max-w-sm bg-white rounded-none  dark:bg-gray-800 dark:border-gray-700">

											<div className="flex flex-col relative bg-white">
												<img src={product?.single_product_acf?.productImageMainUrl
												} className="m-auto h-56" />


												<div className='bg-opacity-0 hover:bg-opacity-20 group bg-black w-full h-full absolute duration-500'>
													<a className="opacity-0 hover:bg-gray-300 border-gray-300 border-2 leading-tight font-semibold group-hover:opacity-80 text-black -mt-8 rounded-full p-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white" href={product?.single_product_acf?.productUrl}>
														Get Latest Price
													</a>



													<div className="p-2 opacity-0 hover:bg-gray-200 font-semibold border-gray-300 border-2 leading-tight group-hover:opacity-80 item mt-10 rounded-full text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white">
														<button id="readProductButton" onClick={() => { setMenuVisibility(!isMenuVisible); activeCategory(index) }} className={isActive(index) ? "..." : ""} data-modal-toggle="readProductModal" class="block text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">
															Quick View
														</button>
													</div>
												</div>

											</div >


											{/* Button */}

											{/* modal */}
											<div id="readProductModal" tabindex="-1" aria-hidden="true" class={`${isMenuVisible && index == activeId ? 'flex' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center bg-black bg-opacity-60 w-screen h-screen`}>
												<div class="relative p-4 w-full max-w-4xl h-full md:h-auto">
													{/* <!-- Modal content --> */}

													<div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">


														{/* <!-- Modal header --> */}

														<div className='flex overscroll-contain'>

															<div class="flex justify-between mb-4 rounded-t sm:mb-5">
																<div class="text-lg text-gray-900 md:text-xl dark:text-white">
																	<img src={product?.single_product_acf?.productImageMainUrl
																	} className="w-96" />


																</div>

															</div>
															<dl className='text-left p-6'>
																<div className='absolute right-3 top-3'>
																	<button onClick={() => { setMenuVisibility(!isMenuVisible); activeCategory(index) }} className={isActive(index) ? "..." : ""} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="readProductModal">
																		<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

																	</button>
																</div>
																<h3 class="font-semibold text-xl ">
																	{product?.title}
																</h3>


																<div className="mt-4 text-gray-700 prose" dangerouslySetInnerHTML={{ __html: sanitize(product?.single_product_acf?.productAida ?? {}) }} />

																<div className="mt-6 flex gap-3 border-b border-gray-200 pb-6 pt-0">
																	<a href={product?.single_product_acf?.productUrl}
																		className="border border-gray-500 bg-green-400 text-gray-600 px-8 py-2 font-medium rounded-full uppercase flex items-center gap-2 hover:text-primary transition">
																		<i className="fa-solid fa-heart"></i> View On Amazon
																	</a>
																	<a href={product?.uri}
																		className="border border-gray-500 bg-yellow-300 text-gray-600 px-8 py-2 font-medium rounded-full uppercase flex items-center gap-2 hover:text-primary transition">
																		<i className="fa-solid fa-heart"></i>Product Details
																	</a>
																</div>

															</dl>
														</div>

													</div>
												</div>
											</div>
											<h5 className="py-3 text px-2 tracking-tight text-gray-900 font-semibold dark:text-white"><a href={product?.uri}>{product?.title.split(" ").slice(0, 8).join(' ')}</a></h5>

										</div>)

								})}



							</div>


						</div>

					</div>


				</div>
			</section>
		</Layout>
	);
};

export default Page;

export async function getStaticProps({ params }) {
	const { data, errors } = await client.query({
		query: GET_PAGE,
		variables: {
			uri: params?.slug.join('/'),
		},
	});
	console.warn("XXXXXXXXXXXXXXXXXXXXX", params?.slug.join('/'))

	const defaultProps = {
		props: {
			data: data || {}
		},
		/**
		 * Revalidate means that if a new request comes to server, then every 1 sec it will check
		 * if the data is changed, if it is changed then it will update the
		 * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
		 */
		revalidate: 1,
	};

	return handleRedirectsAndReturnData(defaultProps, data, errors, 'page');
}

/**
 * Since the page name uses catch-all routes,
 * for example [...slug],
 * that's why params would contain slug which is an array.
 * For example, If we need to have dynamic route '/foo/bar'
 * Then we would add paths: [ params: { slug: ['foo', 'bar'] } } ]
 * Here slug will be an array is ['foo', 'bar'], then Next.js will statically generate the page at /foo/bar
 *
 * At build time next js will will make an api call get the data and
 * generate a page bar.js inside .next/foo directory, so when the page is served on browser
 * data is already present, unlike getInitialProps which gets the page at build time but makes an api
 * call after page is served on the browser.
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching#the-paths-key-required
 *
 * @returns {Promise<{paths: [], fallback: boolean}>}
 */
export async function getStaticPaths() {
	const { data } = await client.query({
		query: GET_PAGES_URI
	});

	const pathsData = [];

	data?.pages?.nodes && data?.pages?.nodes.map(page => {
		if (!isEmpty(page?.uri) && !isCustomPageUri(page?.uri)) {
			const slugs = page?.uri?.split('/').filter(pageSlug => pageSlug);
			pathsData.push({ params: { slug: slugs } });
		}
	});
	return {
		paths: pathsData,
		fallback: FALLBACK
	};
}