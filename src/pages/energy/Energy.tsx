import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faLeaf, faBurn } from '@fortawesome/free-solid-svg-icons';
import {
    ProductLink,
    LinkText,
    LinkWrapper
} from '../../global/pageStyles';

interface Props {
    title?: any;
}

export default function Energy(props: Props): ReactElement {
    return (
        <>
            {props.title && props.title}
            <LinkWrapper>
                <ProductLink to='/strom-gas/strom'>
                    <FontAwesomeIcon icon={faBolt} size='6x' color='orange' />
                    <LinkText>Strom</LinkText>
                </ProductLink>
                <ProductLink to='/strom-gas/oekostrom'>
                    <FontAwesomeIcon icon={faLeaf} size='6x' color='orange' />
                    <LinkText>Ökostrom</LinkText>
                </ProductLink>
                <ProductLink to='/strom-gas/gas'>
                    <FontAwesomeIcon icon={faBurn} size='6x' color='orange' />
                    <LinkText>Gas</LinkText>
                </ProductLink>
            </LinkWrapper>
        </>
    )
}
