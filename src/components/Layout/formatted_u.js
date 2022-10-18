
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import Link from "next/link";
import PropTypes from 'prop-types';


const Layout = ({ data, isPost, children }) => {
    const { page, post, posts, header, footer, headerMenus, footerMenus, footerMenus1, footerMenus2, footerMenus3, footerMenus4 } = data || {};

    console.warn("menus", data);
    return (
        <div>
            <Head>
                <link rel="shortcut icon" href={data?.header?.favicon} />
            </Head>
            <Header header={header} headerMenus={headerMenus?.edges} footer={footer} />
            {children}
            <Footer footer={footer} footerMenus={footerMenus?.edges} footerMenus1={footerMenus1?.edges} footerMenus2={footerMenus2?.edges} footerMenus3={footerMenus3?.edges} footerMenus4={footerMenus3?.edges} />
        </div>
    )
}

Layout.propTypes = {
    data: PropTypes.object,
    isPost: PropTypes.bool,
    children: PropTypes.object
};

Layout.defaultProps = {
    data: {},
    isPost: false,
    children: {}
};

export default Layout