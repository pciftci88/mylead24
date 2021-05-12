import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Logo, Menu, MenuList, MenuItems, MenuLink, InnerWrapper } from './styles';

import logo from '../../images/logo.png';

function Header() {
    return (
        <Wrapper>
            <InnerWrapper>
                <Link to="/">
                    <Logo src={logo} alt="MyLead24 Logo" title="MyLead24" />
                </Link>
                <Menu>
                    <MenuList>
                        <MenuItems><MenuLink to="/">Startseite</MenuLink></MenuItems>
                        <MenuItems><MenuLink to="/finanzen">Finanzen</MenuLink></MenuItems>
                        <MenuItems><MenuLink to="/versicherungen">Versicherungen</MenuLink></MenuItems>
                        <MenuItems><MenuLink to="/dsl">DSL</MenuLink></MenuItems>
                        <MenuItems><MenuLink to="/strom-gas">Energie</MenuLink></MenuItems>
                        <MenuItems><MenuLink to="/reisen">Reisen</MenuLink></MenuItems>
                        <MenuItems><MenuLink to="/mietwagen">Mietwagen</MenuLink></MenuItems>
                    </MenuList>
                </Menu>
            </InnerWrapper>
        </Wrapper>
    );
}

export default Header;