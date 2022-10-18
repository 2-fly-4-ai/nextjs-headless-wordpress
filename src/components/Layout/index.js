
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ data, children }) => {
    console.warn("menus", data);
    return (
        <div>
            <Head>
                <link rel="shortcut icon" href={data?.header?.favicon} />
            </Head>
            <Header header={data?.header} headerMenus={data?.menus?.headerMenus} footer={data?.footer} />
            {children}
            <Footer footer={data?.footer} footerMenus={data?.menus?.footerMenus} footerMenus1={data?.menus?.footerMenus1} footerMenus2={data?.menus?.footerMenus2} footerMenus3={data?.menus?.footerMenus3} footerMenus4={data?.menus?.footerMenus4} />
        </div>
    )
}

export default Layout