import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Wrapper,
    MenuIcon,
    CloseIcon,
    Menu,
    LinkList,
    LinkListHeader,
    MenuLink,
    Navbar,
    Logo
} from './styles';

import menuIcon from '../../images/icons/burger-menu.svg';
import closeIcon from '../../images/icons/close.svg';

import logo from '../../images/logo.png';

function MobileHeader() {
    const [visible, setVisible] = useState(false);

    const toggleMenu = () => {
        setVisible(!visible);
    }

    return (
        <Wrapper>
            <MenuIcon id="menuIcon" src={menuIcon} alt="Menu-Icon" onClick={toggleMenu} />
            <Link to="/">
                <Logo src={logo} alt="MyLead24 Logo" title="MyLead24" />
            </Link>
            <Menu isVisible={visible}>
                <Navbar>
                    <LinkListHeader>
                        <CloseIcon id="closeIcon" src={closeIcon} alt="Close-Icon" onClick={toggleMenu} />
                        <Logo src={logo} alt="MyLead24 Logo" title="MyLead24" />
                    </LinkListHeader>
                    <LinkList onClick={toggleMenu}>
                        <MenuLink to="/">Startseite</MenuLink>
                        <MenuLink to="/finanzen">Finanzen</MenuLink>
                        <MenuLink to="/versicherungen">Versicherungen</MenuLink>
                        <MenuLink to="/dsl">DSL</MenuLink>
                        <MenuLink to="/strom-gas">Energie</MenuLink>
                        <MenuLink to="/reisen">Reisen</MenuLink>
                        <MenuLink to="/mietwagen">Mietwagen</MenuLink>
                    </LinkList>
                </Navbar>
            </Menu>
        </Wrapper>
    );
};

export default MobileHeader;