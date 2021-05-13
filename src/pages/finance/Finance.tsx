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
                <title>Finanzübersicht</title>
                <meta name="description" content="Ihre Finanzen immer im Blick." />
            </Helmet>
            <Teaser>
                {props.title && props.title}
            </Teaser>
            <LinkWrapper>
                <ProductLink to='/finanzen/immobilien'>
                    <FontAwesomeIcon icon={faHouseUser} size='6x' color='orange' />
                    <LinkText>Immobilien</LinkText>
                </ProductLink>
                <ProductLink to='/finanzen/baufinanzierung'>
                    <FontAwesomeIcon icon={faHandHoldingUsd} size='6x' color='orange' />
                    <LinkText>Baufinanzierung</LinkText>
                </ProductLink>
                <ProductLink to='/finanzen/kredite'>
                    <FontAwesomeIcon icon={faCreditCard} size='6x' color='orange' />
                    <LinkText>Kredite</LinkText>
                </ProductLink>
            </LinkWrapper>
        </>
    )
}
