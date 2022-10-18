
import { ApolloClient } from "@apollo/client";
import client from "../../src/apollo/client";
import Layout from "../../src/components/layout";
import { GET_MENUS } from "../../src/queries/get-menus";

export default function category({ data }) {
    return (
        <Layout data={data}>
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-4 lg:px-5 border flex">



                    <div className="w-56 border flex-none">
                        TEST

                    </div>



                    <div className="border flex-1 flex-col">
                        <div className="h-10 border flex">
                            <p className="text-white p-1 ml-1 text-lg font-medium">RESULTS</p>
                            <button type="button" class="ml-auto  px-5 mr-2 m-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button>

                        </div>

                        {/* PRODUCT BOX */}
                        <div className="flex-1 border">
                            <div class="grid gap-3 p-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                                {/* Number 1 */}
                                <div class="p-0 pb-3 max-w-sm bg-white rounded-none border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <div className="h-72 border flex flex-col bg-white">
                                            <img src="https://m.media-amazon.com/images/I/61mDBGHFcxL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="m-auto max-h-72" />
                                        </div>
                                        <h5 class="py-3 text-xl px-2 tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                    </a>

                                </div>


                                {/* Number 2 */}
                                <div class="p-0 pb-3 max-w-sm bg-white rounded-none border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <div className="h-72 border flex flex-col bg-white">
                                            <img src="https://m.media-amazon.com/images/I/61mDBGHFcxL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="m-auto max-h-72" />
                                        </div>
                                        <h5 class="py-3 text-xl px-2 tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                    </a>

                                </div>


                                {/* number 3 */}
                                <div class="p-0 pb-3 max-w-sm bg-white rounded-none border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <div className="h-72 border flex flex-col bg-white">
                                            <img src="https://m.media-amazon.com/images/I/712OyBPPL0L._AC_SX679_.jpg" className="m-auto max-h-72" />
                                        </div>
                                        <h5 class="py-3 text-xl px-2 tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                    </a>

                                </div>

                                {/* number 3 */}
                                <div class="p-0 pb-3 max-w-sm bg-white rounded-none border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <div className="h-72 border flex flex-col bg-white">
                                            <img src="https://m.media-amazon.com/images/I/61j6ey6mBpL._AC_SX679_.jpg" className="m-auto max-h-72" />
                                        </div>
                                        <h5 class="py-3 text-xl px-2 tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                    </a>

                                </div>

                                {/* number 4 */}
                                <div class="p-0 pb-3 max-w-sm bg-white rounded-none border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <div className="h-72 border flex flex-col bg-white">
                                            <img src="https://m.media-amazon.com/images/I/71wXQyxCENL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="m-auto max-h-72" />
                                        </div>
                                        <h5 class="py-3 text-xl px-2 tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                    </a>

                                </div>

                                {/* number 5*/}
                                <div class="p-0 pb-3 max-w-sm bg-white rounded-none border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <div className="h-72 border flex flex-col bg-white">
                                            <img src="https://m.media-amazon.com/images/I/71+jTaVbHxL._AC_UY327_FMwebp_QL65_.jpg" className="m-auto max-h-72" />
                                        </div>
                                        <h5 class="py-3 text-xl px-2 tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                    </a>

                                </div>

                                {/* number 6 */}
                                <div class="p-0 pb-3 max-w-sm bg-white rounded-none border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <div className="h-72 border flex flex-col bg-white">
                                            <img src="https://m.media-amazon.com/images/I/61+iCbVTWcS._AC_UY327_FMwebp_QL65_.jpg" className="m-auto max-h-72" />
                                        </div>
                                        <h5 class="py-3 text-xl px-2 tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                    </a>

                                </div>

                                {/* number 7 */}
                                <div class="p-0 pb-3 max-w-sm bg-white rounded-none border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <div className="h-72 border flex flex-col bg-white">
                                            <img src="https://m.media-amazon.com/images/I/51CSzjwiYyL._AC_UY327_FMwebp_QL65_.jpg" className="m-auto max-h-72" />
                                        </div>
                                        <h5 class="py-3 text-xl px-2 tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                    </a>

                                </div>



                            </div>


                        </div>

                    </div>


                </div>
            </section>


        </Layout>

    )
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

            }, // Will be passed to the page component as props
        }, revalidate: 1


    }
}
