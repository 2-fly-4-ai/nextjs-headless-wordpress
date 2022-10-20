
import client from '../src/apollo/client';
import { GET_PAGE } from '../src/queries/pages/get-page';
import { useRouter } from 'next/router';
import { FALLBACK, handleRedirectsAndReturnData, isCustomPageUri } from '../src/utils/slug';
import { sanitize } from '../src/utils/miscellaneous';
import Layout from '../src/components/layout';


export default function Home({ data }) {
	console.warn("DATABONER", data)
	return (

		<Layout data={data}>
			<section className="bg-white dark:bg-gray-900 ">
				<div className=" grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-2 2xl:px-0 lg:grid-cols-12">

					<div className=" lg:col-span-6 w-full	 pr-10 flex flex-col border">
						<div className="max-w-screen-xl px-4 py-4 mr-auto text-center lg:py-4 lg:px-2">
							<dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
								<div className="hover:-translate-y-2 duration-500 flex flex-col items-center justify-center bg-green-400 p-2 shadow-lg">
									<dt className="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
									<dd className="font-medium text-gray-700 dark:text-gray-400">developers</dd>
								</div>
								<div className="hover:-translate-y-2 duration-500 flex flex-col items-center justify-center bg-yellow-400 p-2 shadow-lg">
									<dt className="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
									<dd className="font-medium  text-gray-700 dark:text-gray-400">contributors</dd>
								</div>
								<div className="hover:-translate-y-2 duration-500 flex flex-col items-center justify-center bg-red-400 p-2 shadow-lg">
									<dt className="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
									<dd className="font-medium text-gray-700 dark:text-gray-400">organizations</dd>
								</div>

							</dl>
						</div>
						<h1 className="w-full mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl lg:text-5xl 2xl:text-6xl dark:text-white">{data?.header?.siteTagLine}</h1>
						<p className="max-w-xl mb-6 font-light text-gray-600 lg:mb-6 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack. From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>

						<a href="#" className="inline-flex rounded-full items-center justify-center px-5 mr-auto py-3 text-base font-medium text-center text-gray-700 border border-gray-600  hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
							Go to shop
						</a>
					</div>

					<div className="hidden lg:mt-0 border lg:col-span-5 xl:flex 2xl:h-full">
						<img className="lg:max-h-96" src="http://staging-petsmarketplace-staging.kinsta.cloud/wp-content/uploads/2022/10/nordwood-themes-Z1-yorzKan8-unsplash-1-scaled-e1666209370624.jpg" alt="mockup" />
						<img className="lg:max-h-96" src="http://staging-petsmarketplace-staging.kinsta.cloud/wp-content/uploads/2022/10/remi-remino-E9kVmtiqqGE-unsplash-1-scaled-e1666237726364.jpg" alt="mockup" />
					</div>
				</div>
			</section>

			<section className="bg-white bg-no-repeat bg-cover bg-center bg-blend-multiply max-w-screen-2xl mx-auto border">
				<div className="relative py-4 2xl:px-0 lg:py-6 lg:px-6 mx-auto text-black  z-1 flex flex-col">

					<div className="grid gap-4 lg:pt-6 2xl:mt-0 lg:mt-0 sm:grid-cols-2 lg:grid-cols-7 ">
						<div className='flex flex-col justify-items-center items-center shadow-lg rounded-full bg-green-300 p-2 hover:-translate-y-2 duration-500'>
							<img src="https://s7d2.scene7.com/is/image/PetSmart/WEB-1178113-Jan22_DEAL1_Dog" className='rounded-full' />

							<a href="#" className="mt-2 mb-4 inline-flex  p-2 bg-green-400 rounded-2xl items-center text-sm font-semibold text-primary-500 hover:underline">
								Read more
								<svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
							</a>

						</div>
						<div className='flex flex-col justify-items-center items-center shadow-lg rounded-full bg-yellow-300 p-2 hover:-translate-y-2 duration-500'>
							<img src="https://s7d2.scene7.com/is/image/PetSmart/WEB-1178113-Jan22_DEAL2_Cat" className='rounded-full' />
							<a href="#" className="mt-2 mb-4 inline-flex  p-2 bg-yellow-400 rounded-2xl items-center text-sm font-semibold text-primary-500 hover:underline">
								Read more
								<svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
							</a>
						</div>
						<div className='flex flex-col justify-items-center items-center shadow-lg rounded-full bg-red-400 p-2 hover:-translate-y-2 duration-500'>
							<img src="https://s7d2.scene7.com/is/image/PetSmart/WEB-1178113-Jan22_DEAL3_Fish" className='rounded-full' />
							<a href="#" className="mt-2 mb-4 inline-flex  p-2 bg-red-600  rounded-2xl items-center text-sm font-semibold text-primary-500 hover:underline">
								Read more
								<svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
							</a>
						</div>
						<div className='flex flex-col justify-items-center items-center shadow-lg rounded-full bg-blue-400 p-2 hover:-translate-y-2 duration-500'>
							<img src="https://s7d2.scene7.com/is/image/PetSmart/WEB-1178113-Jan22_DEAL4_Bird" className='rounded-full' />
							<a href="#" className="mt-2 mb-4 inline-flex  p-2 bg-blue-600  rounded-2xl items-center text-sm font-semibold text-primary-500 hover:underline">
								Read more
								<svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
							</a>
						</div>
						<div className='flex flex-col justify-items-center items-center shadow-lg rounded-full bg-orange-400 p-2 hover:-translate-y-2 duration-500'>
							<img src="https://s7d2.scene7.com/is/image/PetSmart/WEB-1178113-Jan22_DEAL5_Reptile" className='rounded-full' />
							<a href="#" className="mt-2 mb-4 inline-flex  p-2 items-center bg-orange-600 rounded-2xl text-sm font-semibold text-primary-500 hover:underline ">
								Read more
								<svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
							</a>
						</div>
						<div className='flex flex-col justify-items-center items-center shadow-lg rounded-full bg-amber-300 p-2 hover:-translate-y-2 duration-500'>
							<img src="https://i.pinimg.com/736x/26/78/bc/2678bc60b5cd20ed745ae0fba79d23dd.jpg" className='rounded-full' />
							<a href="#" className="mt-2 mb-4 inline-flex  p-2 items-center bg-amber-400 rounded-2xl text-sm font-semibold text-primary-500 hover:underline ">
								Read more
								<svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
							</a>
						</div>
						<div className='flex flex-col justify-items-center items-center shadow-lg rounded-full bg-purple-400 p-2 hover:-translate-y-2 duration-500'>
							<img src="https://s7d2.scene7.com/is/image/PetSmart/WEB-1178113-Jan22_DEAL6_SmPet" className='rounded-full' />
							<a href="#" className="mt-2 mb-4 inline-flex  p-2 items-center bg-purple-600 rounded-2xl text-sm font-semibold text-primary-500 hover:underline ">
								Read more
								<svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
							</a>
						</div>
					</div>


				</div>

			</section>

			<section className="bg-white dark:bg-gray-900 max-w-screen-2xl mx-auto px-6 ">
				<div className="py-8 px-4 mx-auto max-w-screen-2xl sm:py-8 lg:px-0">
					<div className="mx-auto max-w-screen-2xl text-left">
						<h2 className="mb-6 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Animal News</h2>
					</div>
					<div className="grid gap-8 mb-16 lg:divide-x lg:divide-gray-200 dark:lg:divide-gray-700 lg:grid-cols-3">
						<article>
							<a href="#">
								<img className="mb-5 " src="http://staging-petsmarketplace-staging.kinsta.cloud/wp-content/uploads/2022/10/karsten-winegeart-oU6KZTXhuvk-unsplash-scaled-e1666260978199.jpg" alt="blog image" />
							</a>
							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Pug life</a>
							</h2>
							<p className="mb-4 font-light text-gray-700 dark:text-gray-400">Pugs - The Cutest Dogs Ever? We explore the gangster-like dogs that have taken over social media. These little dogs have big personalities, and an even bigger following </p>
							<a href="#" className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500">
								Read more
								<svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
							</a>
						</article>
						<div className="space-y-8 lg:pl-8">
							<article>
								<h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									<a href="#">How to quickly deploy a static website</a>
								</h2>
								<p className="mb-4 font-light text-gray-700 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.</p>
								<a href="#" className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500">
									Read more
									<svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								</a>
							</article>
							<article>
								<h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									<a href="#">What is SEO? Search Engine Optimization Explained</a>
								</h2>
								<p className="mb-4 font-light text-gray-700 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.</p>
								<a href="#" className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500">
									Read more
									<svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								</a>
							</article>
							<article>
								<h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									<a href="#">Spotify's Car Thing available to all premium users</a>
								</h2>
								<p className="mb-4 font-light text-gray-700 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.</p>
								<a href="#" className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500">
									Read more
									<svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								</a>
							</article>
						</div>
						<div className="space-y-8 lg:pl-8">
							<article>
								<h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									<a href="#">How to Rank Higher on Google (6 Easy Steps)</a>
								</h2>
								<p className="mb-4 font-light text-gray-700 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.</p>
								<a href="#" className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500">
									Read more
									<svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								</a>
							</article>
							<article>
								<h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									<a href="#">12 SEO Best Practices That Everyone Should Follow</a>
								</h2>
								<p className="mb-4 font-light text-gray-700 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.</p>
								<a href="#" className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500">
									Read more
									<svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								</a>
							</article>
							<article>
								<h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									<a href="#">How to schedule your Tweets to send later</a>
								</h2>
								<p className="mb-4 font-light text-gray-700 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.</p>
								<a href="#" className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500">
									Read more
									<svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								</a>
							</article>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-gradient-to-tq  dark:bg-gray-900 max-w-screen-2xl px-6	 mx-auto">
				<div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-6 lg:pb-2 lg:px-2 border-yellow-200 border-8">
					<div className="grid gap-6 lg:gap-0 md:grid-cols-6 ">

						<div className="p-3 pb-3 max-w-sm bg-white rounded-none  dark:bg-gray-800 dark:border-gray-700">

							<a href="#">
								<div className="lg:h-44 2xl:max-h-72 flex flex-col bg-white">
									<img src="https://m.media-amazon.com/images/I/71y3R5QvA9L._AC_SL1500_.jpg" className="m-auto lg:h-44 2xl:max-h-72" />
								</div>
								<h5 className=" py-3 text-base px-2 tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
							</a>
						</div>

						<div className="p-3 pb-3 max-w-sm bg-white rounded-none  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<div className="lg:h-44 2xl:max-h-72  flex flex-col bg-white">
									<img src="https://m.media-amazon.com/images/I/61kk7l9BjlL._AC_SL1500_.jpg" className="m-auto lg:h-44 2xl:max-h-72" />
								</div>
								<h5 className="py-3 text-base px-2 tracking-tight text-gray-900 dark:text-white">IVEWOODY Tactical Training Adhesion Reflective</h5>
							</a>

						</div>

						<div className="p-3 pb-3 max-w-sm bg-white rounded-none  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<div className="lg:h-44 2xl:max-h-72  flex flex-col bg-white">
									<img src="https://m.media-amazon.com/images/I/61yQxOWs4OL._AC_SL1181_.jpg" className="m-auto lg:h-44 2xl:max-h-72" />
								</div>
								<h5 className=" py-3 text-base px-2 tracking-tight text-gray-900 dark:text-white">Aquarium Cleaner Changer Air Pressing Controller</h5>
							</a>

						</div>

						<div className="p-3 pb-3 max-w-sm bg-white rounded-none  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<div className="lg:h-44 2xl:max-h-72 flex flex-col bg-white">
									<img src="https://m.media-amazon.com/images/I/71LtXuEA1sL._AC_SX679_.jpg" className="m-auto lg:h-44 2xl:max-h-72" />
								</div>
								<h5 className=" py-3 text-base px-2 tracking-tight text-gray-900 dark:text-white">Earth-Rated-Lavender-Scented-Completely</h5>
							</a>

						</div>


						<div className="p-3 pb-3 max-w-sm bg-white rounded-none  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<div className="lg:h-44 2xl:max-h-72 flex flex-col bg-white">
									<img src="https://m.media-amazon.com/images/I/71ujgHCbdIL._AC_SX679_.jpg" className="m-auto lg:h-44 2xl:max-h-72" />
								</div>
								<h5 className=" py-3 text-base px-2 tracking-tight text-gray-900 dark:text-white">GloFish Aquarium Gravel Fluorescent 5 Pound</h5>
							</a>

						</div>

						<div className="p-3 pb-3 max-w-sm bg-white rounded-none  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<div className="lg:h-44 2xl:max-h-72 flex flex-col bg-white">
									<img src="https://m.media-amazon.com/images/I/61s7RbaOCoL._AC_SX679_.jpg" className="m-auto lg:h-44 2xl:max-h-72" />
								</div>
								<h5 className=" py-3 text-base px-2 tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
							</a>
						</div>

					</div>
				</div>
			</section>

			<section className="bg-white dark:bg-gray-900 px-6">
				<div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-0">
					<div className="mx-auto max-w-screen-2xl text-left mb-8 lg:mb-8">
						<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Best Picks</h2>
					</div>
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>

						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>


						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>


						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>


						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>


						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>

						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>

						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>

						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>

						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>


						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>


						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>
					</div>
				</div>
			</section>

			<section className="bg-gradient-to-tq  dark:bg-gray-900 max-w-screen-2xl px-6	 mx-auto">
				<div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-6 lg:pb-2 lg:px-2 border-green-200 border-8">
					<div className="grid gap-6 lg:gap-0 md:grid-cols-6 ">

						<div className="p-3 pb-3 max-w-sm bg-white rounded-none  dark:bg-gray-800 dark:border-gray-700">

							<a href="#">
								<div className="lg:h-44 2xl:max-h-72 flex flex-col bg-white">
									<img src="https://m.media-amazon.com/images/I/71y3R5QvA9L._AC_SL1500_.jpg" className="m-auto lg:h-44 2xl:max-h-72" />
								</div>
								<h5 className=" py-3 text-base px-2 tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
							</a>
						</div>

						<div className="p-3 pb-3 max-w-sm bg-white rounded-none  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<div className="lg:h-44 2xl:max-h-72  flex flex-col bg-white">
									<img src="https://m.media-amazon.com/images/I/61kk7l9BjlL._AC_SL1500_.jpg" className="m-auto lg:h-44 2xl:max-h-72" />
								</div>
								<h5 className="py-3 text-base px-2 tracking-tight text-gray-900 dark:text-white">IVEWOODY Tactical Training Adhesion Reflective</h5>
							</a>

						</div>

						<div className="p-3 pb-3 max-w-sm bg-white rounded-none  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<div className="lg:h-44 2xl:max-h-72  flex flex-col bg-white">
									<img src="https://m.media-amazon.com/images/I/61yQxOWs4OL._AC_SL1181_.jpg" className="m-auto lg:h-44 2xl:max-h-72" />
								</div>
								<h5 className=" py-3 text-base px-2 tracking-tight text-gray-900 dark:text-white">Aquarium Cleaner Changer Air Pressing Controller</h5>
							</a>

						</div>

						<div className="p-3 pb-3 max-w-sm bg-white rounded-none  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<div className="lg:h-44 2xl:max-h-72 flex flex-col bg-white">
									<img src="https://m.media-amazon.com/images/I/71LtXuEA1sL._AC_SX679_.jpg" className="m-auto lg:h-44 2xl:max-h-72" />
								</div>
								<h5 className=" py-3 text-base px-2 tracking-tight text-gray-900 dark:text-white">Earth-Rated-Lavender-Scented-Completely</h5>
							</a>

						</div>


						<div className="p-3 pb-3 max-w-sm bg-white rounded-none  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<div className="lg:h-44 2xl:max-h-72 flex flex-col bg-white">
									<img src="https://m.media-amazon.com/images/I/71ujgHCbdIL._AC_SX679_.jpg" className="m-auto lg:h-44 2xl:max-h-72" />
								</div>
								<h5 className=" py-3 text-base px-2 tracking-tight text-gray-900 dark:text-white">GloFish Aquarium Gravel Fluorescent 5 Pound</h5>
							</a>

						</div>

						<div className="p-3 pb-3 max-w-sm bg-white rounded-none  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<div className="lg:h-44 2xl:max-h-72 flex flex-col bg-white">
									<img src="https://m.media-amazon.com/images/I/61s7RbaOCoL._AC_SX679_.jpg" className="m-auto lg:h-44 2xl:max-h-72" />
								</div>
								<h5 className=" py-3 text-base px-2 tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
							</a>
						</div>

					</div>
				</div>
			</section>
			<section className="bg-white dark:bg-gray-900 px-6">
				<div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-0">
					<div className="mx-auto max-w-screen-2xl text-left mb-8 lg:mb-8">
						<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Featured Product Reviews</h2>
					</div>
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>

						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>


						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>


						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>


						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>


						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>

						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>

						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>

						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>

						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>


						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>


						<article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="mb-2 " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptops" />
							</a>

							<h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<div className="flex items-center space-x-4">
								<img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar" />
								<div className="font-medium dark:text-white">
									<div>Sofia McGuire</div>
									<div className="text-sm font-normal text-gray-700 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
								</div>
							</div>
						</article>
					</div>
				</div>
			</section>

			<section className="bg-gradient-to-tq  dark:bg-gray-900 max-w-screen-2xl px-6	 mx-auto">
				<div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-6 lg:pb-2 lg:px-2 border-blue-200 border-8">
					<div className="grid gap-6 lg:gap-0 md:grid-cols-6 ">

						<div className="p-3 pb-3 max-w-sm bg-white rounded-none  dark:bg-gray-800 dark:border-gray-700">

							<a href="#">
								<div className="lg:h-44 2xl:max-h-72 flex flex-col bg-white">
									<img src="https://m.media-amazon.com/images/I/71y3R5QvA9L._AC_SL1500_.jpg" className="m-auto lg:h-44 2xl:max-h-72" />
								</div>
								<h5 className=" py-3 text-base px-2 tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
							</a>
						</div>

						<div className="p-3 pb-3 max-w-sm bg-white rounded-none  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<div className="lg:h-44 2xl:max-h-72  flex flex-col bg-white">
									<img src="https://m.media-amazon.com/images/I/61kk7l9BjlL._AC_SL1500_.jpg" className="m-auto lg:h-44 2xl:max-h-72" />
								</div>
								<h5 className="py-3 text-base px-2 tracking-tight text-gray-900 dark:text-white">IVEWOODY Tactical Training Adhesion Reflective</h5>
							</a>

						</div>

						<div className="p-3 pb-3 max-w-sm bg-white rounded-none  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<div className="lg:h-44 2xl:max-h-72  flex flex-col bg-white">
									<img src="https://m.media-amazon.com/images/I/61yQxOWs4OL._AC_SL1181_.jpg" className="m-auto lg:h-44 2xl:max-h-72" />
								</div>
								<h5 className=" py-3 text-base px-2 tracking-tight text-gray-900 dark:text-white">Aquarium Cleaner Changer Air Pressing Controller</h5>
							</a>

						</div>

						<div className="p-3 pb-3 max-w-sm bg-white rounded-none  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<div className="lg:h-44 2xl:max-h-72 flex flex-col bg-white">
									<img src="https://m.media-amazon.com/images/I/71LtXuEA1sL._AC_SX679_.jpg" className="m-auto lg:h-44 2xl:max-h-72" />
								</div>
								<h5 className=" py-3 text-base px-2 tracking-tight text-gray-900 dark:text-white">Earth-Rated-Lavender-Scented-Completely</h5>
							</a>

						</div>


						<div className="p-3 pb-3 max-w-sm bg-white rounded-none  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<div className="lg:h-44 2xl:max-h-72 flex flex-col bg-white">
									<img src="https://m.media-amazon.com/images/I/71ujgHCbdIL._AC_SX679_.jpg" className="m-auto lg:h-44 2xl:max-h-72" />
								</div>
								<h5 className=" py-3 text-base px-2 tracking-tight text-gray-900 dark:text-white">GloFish Aquarium Gravel Fluorescent 5 Pound</h5>
							</a>

						</div>

						<div className="p-3 pb-3 max-w-sm bg-white rounded-none  dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<div className="lg:h-44 2xl:max-h-72 flex flex-col bg-white">
									<img src="https://m.media-amazon.com/images/I/61s7RbaOCoL._AC_SX679_.jpg" className="m-auto lg:h-44 2xl:max-h-72" />
								</div>
								<h5 className=" py-3 text-base px-2 tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
							</a>
						</div>

					</div>
				</div>
			</section>

			<section className="bg-white dark:bg-gray-900">
				<div className="grid gap-16 py-8 px-4 mx-auto max-w-screen-2xl lg:grid-cols-2 lg:py-16 lg:px-6">
					<div className="text-gray-500 sm:text-lg dark:text-gray-400">
						<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our people make us great</h2>
						<p className="mb-2 md:text-lg">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value.</p>
						<p className="font-light md:text-lg">I started my pet supplies company because I saw a need for quality products that were also affordable. I started by selling products out of my home and then eventually expanded to an online store. </p><p className="font-light md:text-lg">I now have a team of employees who help me run the business and we are constantly expanding our inventory to include new and innovative products. We love being able to help pet owners take care of their furry friends and make sure they have everything they need to live happy and healthy lives.</p>
						<p className="font-light md:text-lg mt-2">We search for the best products available and offer them at competitive prices so that everyone can afford to take care of their pets. We love being able to help people and their pets and we will continue to grow our business to reach even more pet owners. Thank you for supporting our company!</p>
					</div>
					<div className="divide-y divide-gray-200 dark:divide-gray-700">

						<div className="flex flex-col items-center pb-8 sm:flex-row">
							<img className="mx-auto mb-4 w-36 h-36 rounded-full sm:ml-0 sm:mr-6" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
							<div className="text-center sm:text-left">
								<h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
									<a href="#">Bonnie Green</a>
								</h3>
								<span className="text-gray-700 dark:text-gray-400">CEO/Co-founder</span>
								<p className="mt-2 mb-4 max-w-sm font-light text-gray-700 dark:text-gray-400">Bonnie drives the technical strategy of the themesberg platform and brand.</p>
								<ul className="flex justify-center space-x-4 sm:justify-start">
									<li>
										<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
											<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
										</a>
									</li>
									<li>
										<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
											<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
										</a>
									</li>
									<li>
										<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
											<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
										</a>
									</li>
									<li>
										<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
											<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="flex flex-col items-center pt-8 pb-8 sm:flex-row">
							<img className="mx-auto mb-4 w-36 h-36 rounded-full sm:ml-0 sm:mr-6" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="Roberta Avatar" />
							<div className="text-center sm:text-left">
								<h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
									<a href="#">Roberta Casas</a>
								</h3>
								<span className="text-gray-700 dark:text-gray-400">CTO/Co-founder</span>
								<p className="mt-2 mb-4 max-w-sm font-light text-gray-700 dark:text-gray-400">Bonnie drives the technical strategy of the themesberg platform and brand.</p>
								<ul className="flex justify-center space-x-4 sm:justify-start">
									<li>
										<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
											<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
										</a>
									</li>
									<li>
										<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
											<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
										</a>
									</li>
									<li>
										<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
											<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
										</a>
									</li>
									<li>
										<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
											<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="flex flex-col items-center pt-8 sm:flex-row">
							<img className="mx-auto mb-4 w-36 h-36 rounded-full sm:ml-0 sm:mr-6" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png" alt="Jese Avatar" />
							<div className="text-center sm:text-left">
								<h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
									<a href="#">Jese Leos</a>
								</h3>
								<span className="text-gray-700 dark:text-gray-400">Designer</span>
								<p className="mt-2 mb-4 max-w-sm font-light text-gray-700 dark:text-gray-400">Bonnie drives the technical strategy of the themesberg platform and brand.</p>
								<ul className="flex justify-center space-x-4 sm:justify-start">
									<li>
										<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
											<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
										</a>
									</li>
									<li>
										<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
											<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
										</a>
									</li>
									<li>
										<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
											<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
										</a>
									</li>
									<li>
										<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
											<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-yellow-50 dark:bg-gray-900">
				<div className="items-center py-8 px-4 mx-auto max-w-screen-2xl lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-16 lg:px-6">
					<div className="col-span-2 mb-8">
						<p className="text-lg font-medium text-primary-600 dark:text-primary-500">Trusted Worldwide</p>
						<h2 className="mt-2 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">Trusted by over 600 million users and 10,000 teams</h2>
						<p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.</p>
						<div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
							<div>
								<a href="#" className="inline-flex items-center text-base font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
									Explore Legality Guide
									<svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								</a>
							</div>
							<div>
								<a href="#" className="inline-flex items-center text-base font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
									Visit the Trust Center
									<svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								</a>
							</div>
						</div>
					</div>
					<div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
						<div>
							<svg className="mb-2 w-10 h-10 text-primary-600 md:w-12 md:h-12 dark:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"></path></svg>
							<h3 className="mb-2 text-2xl font-bold dark:text-white">99.99% uptime</h3>
							<p className="font-light text-gray-700 dark:text-gray-400">For Flowbite, with zero maintenance downtime</p>
						</div>
						<div>
							<svg className="mb-2 w-10 h-10 text-primary-600 md:w-12 md:h-12 dark:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
							<h3 className="mb-2 text-2xl font-bold dark:text-white">600M+ Users</h3>
							<p className="font-light text-gray-700 dark:text-gray-400">Trusted by over 600 milion users around the world</p>
						</div>
						<div>
							<svg className="mb-2 w-10 h-10 text-primary-600 md:w-12 md:h-12 dark:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path></svg>
							<h3 className="mb-2 text-2xl font-bold dark:text-white">100+ countries</h3>
							<p className="font-light text-gray-700 dark:text-gray-400">Have used Flowbite to create functional websites</p>
						</div>
						<div>
							<svg className="mb-2 w-10 h-10 text-primary-600 md:w-12 md:h-12 dark:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
							<h3 className="mb-2 text-2xl font-bold dark:text-white">5+ Million</h3>
							<p className="font-light text-gray-700 dark:text-gray-400">Transactions per day</p>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-white dark:bg-gray-900 lg:bg-red-400 2xl:bg-white">
				<div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-0 lg:px-0">
					<div className="gap-16 justify-between items-center p-6 text-white bg-red-400  dark:bg-gray-800 lg:flex lg:gap-24 md:p-12">
						<div className="w-full">
							<h2 className="mb-4 text-3xl tracking-tight font-extrabold sm:text-4xl">Sign up for our newsletter</h2>
							<p className="font-light text-white sm:text-xl">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
						</div>
						<div className="mt-6 w-full lg:mt-0">
							<form action="#">
								<div className="items-center mb-3 space-y-4 sm:flex sm:space-y-0">
									<div className="relative w-full">
										<label for="member_email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
										<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
											<svg className="w-5 h-5 text-gray-700 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
										</div>
										<input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 sm:rounded-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" required="" />
									</div>
									<div>
										<button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white  border cursor-pointer bg-primary-600 border-primary-600 hover:border-primary-700 sm:rounded-none hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
									</div>
								</div>
								<div className="text-sm text-left text-white dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-white hover:underline">Read our Privacy Policy</a>.</div>
							</form>
						</div>
					</div>
				</div>
			</section>

		</Layout>

	);
}
export async function getStaticProps(context) {

	const { data, errors } = await client.query({
		query: GET_PAGE,
		variables: {
			uri: '/',
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

	return handleRedirectsAndReturnData(defaultProps, data, errors, 'page');
}