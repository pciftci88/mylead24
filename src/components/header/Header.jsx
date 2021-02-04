import React from 'react';
import { Wrapper, Logo, Menu, MenuList, MenuItems, MenuLinks } from './styles';

import logo from '../../images/logo.png';

function Header() {
    return <Wrapper>
        <React.Fragment>
            <a href="/">
                <Logo src={logo} alt="MyLead24 Logo" title="MyLead24" />
            </a>
        </React.Fragment>
        <Menu>
            <MenuList>
                <MenuItems><MenuLinks href="/">Finanzen</MenuLinks></MenuItems>
                <MenuItems><MenuLinks href="/">Versicherungen</MenuLinks></MenuItems>
                <MenuItems><MenuLinks href="/">DSL</MenuLinks></MenuItems>
                <MenuItems><MenuLinks href="/">Energie</MenuLinks></MenuItems>
                <MenuItems><MenuLinks href="/">Reisen</MenuLinks></MenuItems>
            </MenuList>
        </Menu>
    </Wrapper>;
}

export default Header;