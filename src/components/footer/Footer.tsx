import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Copyright, FooterLinkList, FooterLink, Hint } from './styles';

export default function Footer(): ReactElement {
    const copyrightYear = new Date().getFullYear();
    return (
        <Wrapper>
            <FooterLinkList>
                <FooterLink>
                    <Link to='/impressum'>Impressum</Link>
                </FooterLink>
                <FooterLink>
                    <Link to='/datenschutz'>Datenschutz</Link>
                </FooterLink>
            </FooterLinkList>
            <Hint>Wir verwenden auf unserer Webseite optimierte Vergleichsrechner von Tarifcheck und Check24 um Ihnen die besten Angebote anzeigen zu können. Wir sind keine Versicherungsmakler.</Hint>
            <Copyright>© {copyrightYear} MyLead24. Alle Inhalte unterliegen unserem Copyright.</Copyright>
        </Wrapper>
    )
}
