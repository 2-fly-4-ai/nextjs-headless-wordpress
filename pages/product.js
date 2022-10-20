
import client from '../src/apollo/client';
import { GET_PAGE } from '../src/queries/pages/get-page';
import Layout from '../src/components/layout';
import { FALLBACK, handleRedirectsAndReturnData, isCustomPageUri } from '../src/utils/slug';

export default function product({ data }) {
    return (
        <Layout data={data}>
            <div className="px-6">
                <div className="container grid grid-cols-2 gap-6">
                    <div>
                        <div className="container py-4 flex items-center gap-3">
                            <a href="" className="text-primary text-base">
                                <i className="fa-solid fa-house"></i>
                            </a>
                            <span className="text-sm text-gray-400">
                                <i className="fa-solid fa-chevron-right"></i>
                            </span>
                            <p className="text-gray-600 font-medium">Home / Shop / electronics / audio / audio players & recorders / home theater systems / 2.1CH Sound Bar with Subwoofer, 5EQ Modes</p>
                        </div>
                        <img src="https://m.media-amazon.com/images/I/91ohn1BKStL._AC_SL1500_.jpg   " alt="product" className="w-full" />
                        <div className="grid grid-cols-5 gap-4 mt-4">
                            <img src="https://m.media-amazon.com/images/I/91ty9-ptnWL._AC_SL1500_.jpg" alt="product2"
                                className="w-full cursor-pointer border border-primary" />
                            <img src="https://m.media-amazon.com/images/I/81vnRwJ7ltL._AC_SL1500_.jpg" alt="product2" className="w-full cursor-pointer border" />
                            <img src="https://m.media-amazon.com/images/I/A1GU0CNOAPL._AC_SL1500_.jpg" alt="product2" className="w-full cursor-pointer border" />
                            <img src="https://m.media-amazon.com/images/I/71aCyqF5TtL._AC_SL1500_.jpg" alt="product2" className="w-full cursor-pointer border" />
                            <img src="https://m.media-amazon.com/images/I/71aCyqF5TtL._AC_SL1500_.jpg" alt="product2" className="w-full cursor-pointer border" />
                        </div>
                    </div>

                    <div className=' py-3'>

                        <h2 className="text-3xl font-medium uppercase mb-2">Italian L Shape Sofa</h2>
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
                            <p className="text-gray-800 font-semibold space-x-2">
                                <span>Availability: </span>
                                <span className="text-green-600">In Stock</span>
                            </p>
                            <p className="space-x-2">
                                <span className="text-gray-800 font-semibold">Brand: </span>
                                <span className="text-gray-600">Apex</span>
                            </p>

                            <p className="space-x-2">
                                <span className="text-gray-800 font-semibold">SKU: </span>
                                <span className="text-gray-600">BE45VGRT</span>
                            </p>
                        </div>

                        <p className="mt-4 text-gray-600">The HW-T150 is a powerful and compact soundbar that provides excellent sound quality and compatibility with multiple inputs. This soundbar features a wired subwoofer and wireless Bluetooth connectivity, allowing you to connect your devices wirelessly. It has five different modes for you to choose from, perfect for whatever type of content you’re watching or listening to. With its ultra-slim design, it’s easy to mount on your wall and use.</p>

                        <div className="mt-6 flex gap-3 border-b border-gray-200 pb-0 pt-0">
                            <a href="#"
                                className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
                                <i className="fa-solid fa-heart"></i> View On Amazon
                            </a>
                            <a href="#"
                                className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
                                <i className="fa-solid fa-heart"></i> View On Ebay
                            </a>
                        </div>

                        <p className="space-x-2 mt-5">
                            <span className="text-gray-800 font-semibold">Tags: </span>
                            <span className="text-gray-600 border rounded-full px-4  py-1 pb-1.5">Sofa</span>
                        </p>
                        <p className="space-x-2 mt-5">
                            <span className="text-gray-800 font-semibold">Category: </span>
                            <span className="text-gray-600 border rounded-full px-4  py-1 pb-1.5">Sofa</span>
                        </p>
                        <p className="space-x-2 mt-5">
                            Category: home theater systems

                        </p>

                        <div className="font-thin text-sm">
                            SERP AI is reader-supported, and a participant in the Amazon Associate program. When you buy through links on our site, we may earn an affiliate commission. Read more about our policy.
                        </div>
                    </div>
                </div>

                <div className="container pb-16">
                    <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">Product details</h3>
                    <div className="w-3/5 pt-6">
                        <div className="text-gray-600">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus deleniti natus
                                dolore cum maiores suscipit optio itaque voluptatibus veritatis tempora iste facilis non aut
                                sapiente dolor quisquam, ex ab.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quae accusantium voluptatem
                                blanditiis sapiente voluptatum. Autem ab, dolorum assumenda earum veniam eius illo fugiat possimus
                                illum dolor totam, ducimus excepturi.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia modi ut expedita! Iure molestiae
                                labore cumque nobis quasi fuga, quibusdam rem? Temporibus consectetur corrupti rerum veritatis
                                numquam labore amet.</p>
                        </div>

                        <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
                            <tr>
                                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Color</th>
                                <th className="py-2 px-4 border border-gray-300 ">Blank, Brown, Red</th>
                            </tr>
                            <tr>
                                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Material</th>
                                <th className="py-2 px-4 border border-gray-300 ">Latex</th>
                            </tr>
                            <tr>
                                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Weight</th>
                                <th className="py-2 px-4 border border-gray-300 ">55kg</th>
                            </tr>
                        </table>
                    </div>
                </div>


                <div className='flex '>

                    {/* Left-box of Comments */}
                    <div className='w-96 border pb-8'>
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
                    <div className='flex-1'>
                        <article className="max-w-2xl mb-8">
                            <div className="flex items-center mb-4 space-x-4" >
                                <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                                <div className="space-y-1 font-medium dark:text-white">
                                    <p>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-700 dark:text-gray-400">Joined on August 2014</time></p>
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
                            <footer className="mb-5 text-sm text-gray-700 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
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
                        <article className="max-w-2xl mb-8">
                            <div className="flex items-center mb-4 space-x-4" >
                                <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                                <div className="space-y-1 font-medium dark:text-white">
                                    <p>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-700 dark:text-gray-400">Joined on August 2014</time></p>
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
                            <footer className="mb-5 text-sm text-gray-700 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
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
                        <article className="max-w-2xl mb-8">
                            <div className="flex items-center mb-4 space-x-4" >
                                <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                                <div className="space-y-1 font-medium dark:text-white">
                                    <p>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-700 dark:text-gray-400">Joined on August 2014</time></p>
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
                            <footer className="mb-5 text-sm text-gray-700 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
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
                    </div>
                </div>



                <div className="container pb-16">
                    <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Related products</h2>
                    <div className="grid grid-cols-4 gap-6">
                        <div className="bg-white shadow rounded overflow-hidden group">
                            <div className="relative">
                                <div className='h-52 p-2 flex'>
                                    <img src="https://m.media-amazon.com/images/I/71rfYcgSqpL._AC_UL480_FMwebp_QL65_.jpg" alt="product 1" className="w-full my-auto" />
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
            justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <a href="#"
                                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="view product">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="#"
                                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="add to wishlist">
                                        <i className="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="pt-4 pb-3 px-4">
                                <a href="#">
                                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                        Chair</h4>
                                </a>

                                <div className="flex items-center">
                                    <div className="flex gap-1 text-sm text-yellow-400">
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="bg-white shadow rounded overflow-hidden group">
                            <div className="relative">
                                <div className='h-52 flex p-2'>
                                    <img src="https://m.media-amazon.com/images/I/612zjdj27AL._AC_UL480_FMwebp_QL65_.jpg" alt="product 1" className="w-full my-auto" />
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
            justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <a href="#"
                                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="view product">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="#"
                                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="add to wishlist">
                                        <i className="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="pt-4 pb-3 px-4">
                                <a href="#">
                                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Bed
                                        King Size</h4>
                                </a>

                                <div className="flex items-center">
                                    <div className="flex gap-1 text-sm text-yellow-400">
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow rounded overflow-hidden group">
                            <div className="relative">
                                <div className='h-52 flex p-2'>
                                    <img src="https://m.media-amazon.com/images/I/61KCxlOlWsL._AC_UL480_FMwebp_QL65_.jpg" alt="product 1" className="w-full my-auto" />
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
            justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <a href="#"
                                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="view product">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="#"
                                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="add to wishlist">
                                        <i className="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="pt-4 pb-3 px-4">
                                <a href="#">
                                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                        Couple Sofa</h4>
                                </a>

                                <div className="flex items-center">
                                    <div className="flex gap-1 text-sm text-yellow-400">
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="bg-white shadow rounded overflow-hidden group">
                            <div className="relative">
                                <div className='h-52 flex p-2'>
                                    <img src="https://m.media-amazon.com/images/I/91ohn1BKStL._AC_UL480_FMwebp_QL65_.jpg" alt="product 1" className="w-full my-auto" />
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
            justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <a href="#"
                                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="view product">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="#"
                                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="add to wishlist">
                                        <i className="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="pt-4 pb-3 px-4">
                                <a href="#">
                                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                        Mattrass X</h4>
                                </a>

                                <div className="flex items-center">
                                    <div className="flex gap-1 text-sm text-yellow-400">
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </Layout >

    )
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





