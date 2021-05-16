import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faLeaf, faBurn } from '@fortawesome/free-solid-svg-icons';
import {
    ProductLink,
    LinkText,
    LinkWrapper
} from '../../global/pageStyles';
import { Teaser } from './styles';

interface Props {
    title?: any;
}

export default function Energy(props: Props): ReactElement {
    return (
        <>
            <Helmet>
                <title>Electricity & gas overview</title>
                <meta name="description" content="Your home is always fully supplied with electricity and gas." />
                <link rel="alternate" hrefLang="de" href="https://mylead24.de/strom-gas" />
            </Helmet>
            <Teaser>
                {props.title && props.title}
            </Teaser>
            <LinkWrapper>
                <ProductLink to='/electricity-gas/electricity'>
                    <FontAwesomeIcon icon={faBolt} size='6x' color='orange' />
                    <LinkText>Electricity</LinkText>
                </ProductLink>
                <ProductLink to='/electricity-gas/eco-electricity'>
                    <FontAwesomeIcon icon={faLeaf} size='6x' color='orange' />
                    <LinkText>Eco electricity</LinkText>
                </ProductLink>
                <ProductLink to='/electricity-gas/gas'>
                    <FontAwesomeIcon icon={faBurn} size='6x' color='orange' />
                    <LinkText>Gas</LinkText>
                </ProductLink>
            </LinkWrapper>
        </>
    )
}
