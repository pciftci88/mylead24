import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Copyright, FooterLinkList, FooterLink } from './styles';

interface Props {

}

export default function Footer({ }: Props): ReactElement {
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
            <Copyright>© {copyrightYear} MyLead24. Alle Inhalte unterliegen unserem Copyright.</Copyright>
        </Wrapper>
    )
}
