import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faHandHoldingUsd, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import {
    ProductLink,
    LinkText,
    LinkWrapper
} from '../../global/pageStyles';
import { TitleWrapper } from './styles';

interface Props {
    title?: any;
}

export default function Finance(props: Props): ReactElement {
    return (
        <>
            <TitleWrapper>
                {props.title && props.title}
            </TitleWrapper>
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
