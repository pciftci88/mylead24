import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faHandHoldingUsd, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Wrapper, LinkWrapper, LinkText } from './styles';

interface Props {

}

export default function Finance({ }: Props): ReactElement {
    return (
        <Wrapper>
            <h1>Finanzübersicht</h1>
            <LinkWrapper to='/finanzen/immobilien'>
                <FontAwesomeIcon icon={faHouseUser} size='6x' color='orange' />
                <LinkText>Immobilien</LinkText>
            </LinkWrapper>
            <LinkWrapper to='/finanzen/baufinanzierung'>
                <FontAwesomeIcon icon={faHandHoldingUsd} size='6x' color='orange' />
                <LinkText>Baufinanzierung</LinkText>
            </LinkWrapper>
            <LinkWrapper to='/finanzen/kredite'>
                <FontAwesomeIcon icon={faCreditCard} size='6x' color='orange' />
                <LinkText>Kredite</LinkText>
            </LinkWrapper>
        </Wrapper>
    )
}
