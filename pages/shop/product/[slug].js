import { isEmpty, isArray } from 'lodash';
import client from '../../../src/apollo/client';
import { useRouter } from 'next/router';
import Layout from '../../../src/components/layout';
import { FALLBACK, handleRedirectsAndReturnData } from '../../../src/utils/slug';
import { GET_POST } from '../../../src/queries/productsv2/get-post';
import { GET_POST_SLUGS } from '../../../src/queries/productsv2/get-posts';
import { sanitize } from '../../../src/utils/miscellaneous';
import { Tabs } from 'flowbite-react';
import { Table } from 'flowbite-react';
import Link from 'next/link';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import * as React from "react";
import { useState } from 'react';


const Post = ({ data }) => {
	const router = useRouter();
	const [open, setOpen] = React.useState(false);
	const [activeId, setActiveId] = useState()
	let slides_list = []
	let related_products = []
	console.warn({ data })


	function activeCategory(id) {
		setActiveId(id)
	}

	function isActive(id) {
		return id === activeId;
	}

	data?.post?.productTags?.nodes.map((test) => {
		related_products.push(test?.products?.nodes)
	})


	related_products = related_products.flat(Infinity)
	const uniqueNames = related_products.filter((v, i, a) => a.findIndex(t => (JSON.stringify(t) === JSON.stringify(v))) === i).slice(0, 12)
	console.warn(uniqueNames)

	{ console.warn("LOOK HERE", uniqueNames) }





	// If the page is not yet generated, this will be displayed
	// initially until getStaticProps() finishes running
	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return (
		<Layout data={data} isPost>
			{/* The whole page */}
			<div className="px-6 py-4 flex-col">

				{/* Top-box-Whole */}
				<div className="container grid grid-cols-2 gap-10 mx-auto">

					{/* Top-box-left */}
					<div>
						<div className="container py-4 flex items-center gap-3">
							<a href="" className="text-primary text-base">
								<i className="fa-solid fa-house"></i>
							</a>
							<span className="text-sm text-gray-400">
								<i className="fa-solid fa-chevron-right"></i>
							</span>

							<p className="text-gray-600 font-medium">
								<a href={data?.post?.productTaxonomies?.nodes[0]?.parent?.node?.parent?.node?.link}>{data?.post?.productTaxonomies?.nodes[0]?.parent?.node?.parent?.node?.name}</a>
								{" > "}
								<a href={data?.post?.productTaxonomies?.nodes[0]?.parent?.node?.link}>{data?.post?.productTaxonomies?.nodes[0]?.parent?.node?.name}</a>
								{" > "}
								<a href={data?.post?.productTaxonomies?.nodes[0]?.uri}>{data?.post?.productTaxonomies?.nodes[0]?.name}</a>
							</p>
						</div>
						{console.warn("FUCK", data?.post?.productTaxonomies)}

						<img src={data?.post?.single_product_acf?.productImageMainUrl} alt="product" className="max-h-96" />
						<div className="grid grid-cols-5 gap-4 mt-4">
							{data?.post?.single_product_acf?.productImageGalleryUrls.split(", ").slice(0, 5).map((imageUrl, index) => {
								return <img onClick={() => { setOpen(true); activeCategory(index) }} key={imageUrl} src={imageUrl} alt="product2" className={isActive(index) ? "..." : ""} />

							}
							)}

							{/* <button type="button" onClick={() => console.warn(key) setOpen(true)}>
        Open Lightbox
      </button> */}

							{data?.post?.single_product_acf?.productImageGalleryUrls.split(", ").map(imageUrl => {
								slides_list.push({ src: imageUrl })
							})}

							{/* {slides_list.push({ src: data?.post?.single_product_acf?.productImageMainUrl })} */}


							<Lightbox
								open={open}
								close={() => setOpen(false)}
								slides={slides_list}
								index={activeId}
							/>

						</div>
					</div>

					{/* Top-box-right */}
					<div className='flex-col'>
						<h2 className="text-4xl mb-3 mt-4">{data?.post?.title}</h2>
						<span className="items-center underline flex text-gray-500 border-b text  font-bold py-1 pb-1.5"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>GET LATEST STAR RATING<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></span>

						<div className="flex items-center mb-4">
							<div className="flex gap-1 text-sm text-yellow-400">
								<span><i className="fa-solid fa-star"></i></span>
								<span><i className="fa-solid fa-star"></i></span>
								<span><i className="fa-solid fa-star"></i></span>
								<span><i className="fa-solid fa-star"></i></span>
								<span><i className="fa-solid fa-star"></i></span>
							</div>
						</div>
						<div className="space-y-2">
							{/* <p className="text-gray-800 font-semibold space-x-2">
								<span>Availability: </span>
								<span className="text-green-600">In Stock</span>
							</p> */}
							<p className="space-x-2">
								<span className="text-gray-800 font-semibold">Brand: </span>
								<a href={data?.post?.productBrands?.nodes[0]?.uri} className="text-gray-600 border border-gray-500 rounded-full px-4  py-1 pb-1.5">{data?.post?.productBrands?.nodes[0]?.name}</a>
							</p>

							<p className="space-x-2">
								<span className="text-gray-800 font-semibold">SKU: </span>
								<span className="text-gray-600">BE45VGRT</span>
							</p>
						</div>

						{/* PRODUCT DESCRIPTION*/}

						<div className="mt-4 text-gray-700 prose" dangerouslySetInnerHTML={{ __html: sanitize(data?.post?.single_product_acf?.shortDescription ?? {}) }} />



						<div className="mt-6 flex gap-3 border-b border-gray-200 pb-6 pt-0">
							<a href={data?.post?.single_product_acf?.productUrl}
								className="border border-gray-500 bg-green-400 text-gray-600 px-8 py-2 font-medium rounded-full uppercase flex items-center gap-2 hover:text-primary transition">
								<i className="fa-solid fa-heart"></i> View On Amazon
							</a>
							<a href="#"
								className="border border-gray-500 bg-yellow-300 text-gray-600 px-8 py-2 font-medium rounded-full uppercase flex items-center gap-2 hover:text-primary transition">
								<i className="fa-solid fa-heart"></i> View On Ebay
							</a>
						</div>

						<div className="space-x-2 mt-5 flex">
							<span className="text-gray-800 font-semibold">Tags: </span>




							{!isEmpty(data?.post?.productTags?.nodes) && isArray(data?.post?.productTags?.nodes) ? (
								<div>
									<ul className='flex flex-wrap gap-2'>
										{data?.post?.productTags?.nodes.map(tag => (
											<li key={tag.name} className="text-gray-500 dark:text-gray-400 mb-3">
												<Link href={tag.uri}>
													<a className="text-gray-600 border border-gray-500 rounded-full px-4  py-1 pb-1.5" dangerouslySetInnerHTML={{ __html: sanitize(tag?.name ?? {}) }} />
												</Link>
											</li>
										))
										}
									</ul>
								</div>

							) : null}



						</div>

						<div className="space-x-2 mt-5 flex mb-5">
							<span className="text-gray-800 font-semibold">Categories: </span>
							{!isEmpty(data?.post?.productTaxonomies?.nodes) && isArray(data?.post?.productTaxonomies?.nodes) ? (
								<div>
									<ul className='flex gap-2'>
										{data?.post?.productTaxonomies?.nodes.map(category => (
											<li key={category.name} className="text-gray-500 dark:text-gray-400">
												<Link href={category.uri} key={category.name + 1}>
													<a className="text-gray-600 border border-gray-500 rounded-full px-4  py-1 pb-1.5" dangerouslySetInnerHTML={{ __html: sanitize(category?.name ?? {}) }} />
												</Link>
											</li>
										))
										}
									</ul>
								</div>
							) : null}
						</div>


						<div className="font-thin text-sm">
							SERP AI is reader-supported, and a participant in the Amazon Associate program. When you buy through links on our site, we may earn an affiliate commission. Read more about our policy.
						</div>
					</div>
				</div>

				{/*tabs-section*/}
				<div className="container pb-16 mx-auto mt-6">
					<Tabs.Group
						aria-label="Default tabs"
						style="default"
					>
						<Tabs.Item
							active={true}
							title="Features"
						>
							<div className="mt-4 text-gray-700 prose" dangerouslySetInnerHTML={{ __html: sanitize(data?.post?.single_product_acf?.productFeatures ?? {}) }} />

						</Tabs.Item>
						<Tabs.Item title="Pro's & con's">
							<div className="mt-4 text-gray-700 prose" dangerouslySetInnerHTML={{ __html: sanitize(data?.post?.single_product_acf?.productProsCons ?? {}) }} />

						</Tabs.Item>
						<Tabs.Item title="Expert Opinion">
							<div className='max-w-2xl'>
								<div className='prose  max-w-none'>
									<p>If your cat sleeps in weird places, or on weird objects, that might just be because it doesn’t have a sleeping surface it likes in a spot it wants to sleep in. Russell Hartstein, a certified pet behaviorist with 25 years of experience, said, “Oftentimes, cats will sleep in odd places when they don’t have a bed or place that they prefer.” So the right cat bed in the purrfect spot may help eliminate your cat’s weird sleeping arrangements.</p><p>To find the type of bed your cat prefers, consider these guidelines:</p><p><strong>Observe its behavior: </strong>Watch where and how your cat sleeps. If it curls into a ball, look for a round bed. If your cat huddles under a basket of clothes or frequently sits under an armchair, try a cave bed. Or, if it sprawls out in a windowsill or on a couch cushion, a mat might be your best bet. “Part of the fun of being a pet parent is just experimenting with what your family member enjoys,” Hartstein said, so if one style doesn’t work you could always try another.</p><p><strong>Consider the bed’s size:</strong> Depending on your cat’s sleeping preferences, its bed should either be large enough for it to stretch out or small enough for it to comfortably curl up and feel secure. If your cat prefers to lounge about in the open, look for a bed that’s as long as its body (minus the tail), about 18 to 20 inches long. If it prefers to curl up, a round bolster or cave bed that’s at least 15 inches in diameter is a good bet—but don’t shy away from larger beds that are enclosed, because they offer the security some cats prefer with the ability to stretch out when needed. And if your cat is a large breed, like a British shorthair or Maine coon, a bigger bed is always better.</p></div>
							</div>
						</Tabs.Item>
						<Tabs.Item title="Specifications">
							<div className='max-w-2xl'>
								<div className="mt-4 text-gray-700 prose " dangerouslySetInnerHTML={{ __html: sanitize(data?.post?.single_product_acf?.productSpecs ?? {}) }} />
							</div>

						</Tabs.Item>
						<Tabs.Item
							disabled={true}
							title="Disabled"
						>
							Disabled content
						</Tabs.Item>
					</Tabs.Group>
				</div>

				{/*comments-section*/}
				<div className='flex mx-auto max-w-screen-2xl   flex-auto'>

					{/* Left-box of Comments */}
					<div className='w-96  pb-8'>
						<div className='pb-12 border-b w-80'>
							<div className="flex items-center mb-3">
								<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">4.95 out of 5</p>
							</div>
							<p className="text-sm font-medium text-gray-700 dark:text-gray-400">1,745 global ratings</p>
							<div className="flex items-center mt-4">
								<span className="text-sm font-medium text-blue-600 dark:text-blue-500">5 star</span>
								<div className="mx-4 w-7/12 h-5 bg-gray-200 rounded dark:bg-gray-700">
									<div className="h-5 bg-yellow-400 rounded w-9/12"></div>
								</div>
								<span className="text-sm font-medium text-blue-600 dark:text-blue-500">70%</span>
							</div>
							<div className="flex items-center mt-4">
								<span className="text-sm font-medium text-blue-600 dark:text-blue-500">4 star</span>
								<div className="mx-4 w-7/12 h-5 bg-gray-200 rounded dark:bg-gray-700">
									<div className="h-5 bg-yellow-400 rounded w-9/12"></div>
								</div>
								<span className="text-sm font-medium text-blue-600 dark:text-blue-500">17%</span>
							</div>
							<div className="flex items-center mt-4">
								<span className="text-sm font-medium text-blue-600 dark:text-blue-500">3 star</span>
								<div className="mx-4 w-7/12 h-5 bg-gray-200 rounded dark:bg-gray-700">
									<div className="h-5 bg-yellow-400 rounded w-9/12"></div>
								</div>
								<span className="text-sm font-medium text-blue-600 dark:text-blue-500">8%</span>
							</div>
							<div className="flex items-center mt-4">
								<span className="text-sm font-medium text-blue-600 dark:text-blue-500">2 star</span>
								<div className="mx-4 w-7/12 h-5 bg-gray-200 rounded dark:bg-gray-700">
									<div className="h-5 bg-yellow-400 rounded w-9/12"></div>
								</div>
								<span className="text-sm font-medium text-blue-600 dark:text-blue-500">4%</span>
							</div>
							<div className="flex items-center mt-4 ">
								<span className="text-sm font-medium text-blue-600 dark:text-blue-500">1 star</span>
								<div className="mx-4 w-7/12 h-5 bg-gray-200 rounded dark:bg-gray-700">
									<div className="h-5 bg-yellow-400 rounded w-9/12"></div>
								</div>
								<span className="text-sm font-medium text-blue-600 dark:text-blue-500">1%</span>
							</div>


						</div>
					</div>


					{/* Right-box of Comments */}
					<div className='flex-col  max-w-screen-md'>
						<article className="mb-8 ">



							<div className="flex items-center mb-4 space-x-4" >
								<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
								<div className="space-y-1 font-medium dark:text-white">
									<p>Jese Leos <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-700 dark:text-gray-400">Joined on August 2014</time></p>
								</div>
							</div>


							<div className="flex items-center mb-1">
								<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
							</div>
							<footer className="mb-5 text-sm text-gray-700 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time dateTime="2017-03-03 19:00">March 3, 2017</time></p></footer>
							<p className="mb-2  text-gray-700 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
							<p className="mb-3  text-gray-700 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
							<a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
							<aside>
								<p className="mt-1 text-xs text-gray-700 dark:text-gray-400">19 people found this helpful</p>
								<div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
									<a href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
									<a href="#" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
								</div>
							</aside>
						</article>
						<article className="mb-8">
							<div className="flex items-center mb-4 space-x-4" >
								<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
								<div className="space-y-1 font-medium dark:text-white">
									<p>Jese Leos <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-700 dark:text-gray-400">Joined on August 2014</time></p>
								</div>
							</div>


							<div className="flex items-center mb-1">
								<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
							</div>
							<footer className="mb-5 text-sm text-gray-700 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time dateTime="2017-03-03 19:00">March 3, 2017</time></p></footer>
							<p className="mb-2  text-gray-700 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
							<p className="mb-3  text-gray-700 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
							<a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
							<aside>
								<p className="mt-1 text-xs text-gray-700 dark:text-gray-400">19 people found this helpful</p>
								<div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
									<a href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
									<a href="#" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
								</div>
							</aside>
						</article>
						<article className="mb-8">
							<div className="flex items-center mb-4 space-x-4" >
								<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
								<div className="space-y-1 font-medium dark:text-white">
									<p>Jese Leos <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-700 dark:text-gray-400">Joined on August 2014</time></p>
								</div>
							</div>


							<div className="flex items-center mb-1">
								<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
							</div>
							<footer className="mb-5 text-sm text-gray-700 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time dateTime="2017-03-03 19:00">March 3, 2017</time></p></footer>
							<p className="mb-2  text-gray-700 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
							<p className="mb-3  text-gray-700 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
							<a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
							<aside>
								<p className="mt-1 text-xs text-gray-700 dark:text-gray-400">19 people found this helpful</p>
								<div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
									<a href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
									<a href="#" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
								</div>
							</aside>
						</article>
						<button type="button" className=" flex py-2.5 px-5 mr-2 mb-2  font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-500 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Read More Reviews <svg className="w-4 h-6 my-auto ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></button>

					</div>
				</div>



				<div className="container py-8 mx-auto">
					<h2 className="text-3xl  text-gray-800  mb-6">Related products</h2>



					<div className="grid grid-cols-6 gap-3">


						{uniqueNames.map((product) => {

							return <div className="bg-white shadow rounded overflow-hidden group">
								<div className="relative">
									<div className='h-45 flex p-2 justify-center'>
										<img src={product?.single_product_acf?.productImageMainUrl} alt="product 1" className="max-h-56  my-auto" />
									</div>
								</div>
								<div className="pt-4 pb-3 px-4">
									<a href={product?.single_product_acf?.productUrl}>
										<h4 className="mt-3 uppercase font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">Bed
											{product?.title}</h4>
									</a>
								</div>
							</div>

							{ console.warn(<img key={imageUrl} src={imageUrl} alt="product2" className="w-full cursor-pointer border" />) }

						}
						)}


						{/* product 1 */}

					</div>
				</div>




			</div >
		</Layout >
	)
}

export default Post;

export async function getStaticProps({ params }) {
	const { data, errors } = await client.query({
		query: GET_POST,
		variables: {
			uri: params?.slug ?? '/',
		},
	});



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

	return handleRedirectsAndReturnData(defaultProps, data, errors, 'post');
}

/**
 * Since the page name 'does not' use catch-all routes,
 *htmlForexample [slug],
 * that's why params would contain just slug and not an array of slugs , unlike [...slug].
 *htmlForexample, If we need to have dynamic route '/foo/'
 * Then we would add paths: [ params: { slug: 'foo' } } ]
 * Here slug will be 'foo', then Next.js will statically generate the page at /foo/
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
		query: GET_POST_SLUGS
	});

	const pathsData = [];

	data?.posts?.nodes && data?.posts?.nodes.map(post => {
		if (!isEmpty(post?.slug)) {
			pathsData.push({ params: { slug: post?.slug } });
		}

	});

	console.warn(pathsData)
	return {

		paths: pathsData,
		fallback: FALLBACK
	};
}
