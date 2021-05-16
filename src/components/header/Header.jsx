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
                        <MenuItems><MenuLink to="/">Home</MenuLink></MenuItems>
                        <MenuItems><MenuLink to="/finance">Finance</MenuLink></MenuItems>
                        <MenuItems><MenuLink to="/insurances">Insurances</MenuLink></MenuItems>
                        <MenuItems><MenuLink to="/internet">Internet</MenuLink></MenuItems>
                        <MenuItems><MenuLink to="/energy-gas">Energy</MenuLink></MenuItems>
                        <MenuItems><MenuLink to="/travels">Travels</MenuLink></MenuItems>
                        <MenuItems><MenuLink to="/rental-car">Rental car</MenuLink></MenuItems>
                    </MenuList>
                </Menu>
            </InnerWrapper>
        </Wrapper>
    );
}

export default Header;