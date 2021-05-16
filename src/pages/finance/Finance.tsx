import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faHandHoldingUsd, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import {
    ProductLink,
    LinkText,
    LinkWrapper
} from '../../global/pageStyles';
import { Teaser } from './styles';

interface Props {
    title?: any;
}

export default function Finance(props: Props): ReactElement {
    return (
        <>
            <Helmet>
                <title>Finance overview</title>
                <meta name="description" content="Always keep an eye on your finances." />
                <link rel="alternate" hrefLang="de" href="https://mylead24.de/finanzen" />
            </Helmet>
            <Teaser>
                {props.title && props.title}
            </Teaser>
            <LinkWrapper>
                <ProductLink to='/finance/property'>
                    <FontAwesomeIcon icon={faHouseUser} size='6x' color='orange' />
                    <LinkText>Property</LinkText>
                </ProductLink>
                <ProductLink to='/finance/mortgage-lending'>
                    <FontAwesomeIcon icon={faHandHoldingUsd} size='6x' color='orange' />
                    <LinkText>Mortgage leding</LinkText>
                </ProductLink>
                <ProductLink to='/finance/loans'>
                    <FontAwesomeIcon icon={faCreditCard} size='6x' color='orange' />
                    <LinkText>Loans</LinkText>
                </ProductLink>
            </LinkWrapper>
        </>
    )
}
