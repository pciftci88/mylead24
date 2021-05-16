import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Copyright, FooterLinkList, FooterLink, Hint } from './styles';

export default function Footer(): ReactElement {
    const copyrightYear = new Date().getFullYear();
    return (
        <Wrapper>
            <FooterLinkList>
                <FooterLink>
                    <Link to='/imprint'>Imprint</Link>
                </FooterLink>
                <FooterLink>
                    <Link to='/privacy'>Privacy</Link>
                </FooterLink>
            </FooterLinkList>
            <Hint>We use optimized comparison calculators from Tarifcheck, Check24 and Finanzcheck on our website to be able to show you the best offers. We are not insurance brokers.</Hint>
            <Copyright>© {copyrightYear} MyLead24. All rights reserved.</Copyright>
        </Wrapper>
    )
}
