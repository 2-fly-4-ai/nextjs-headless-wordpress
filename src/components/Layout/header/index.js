import Nav from "./nav";
import { isEmpty } from "lodash"

const Header = ({ footer, header, headerMenus, slug }) => {
    if (isEmpty(headerMenus)) {
        return null;

    }

    return (
        <header>
            <Nav footer={footer} header={header} headerMenus={headerMenus} slug={slug} />
        </header>
    )
}

export default Header