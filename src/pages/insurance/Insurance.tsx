import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarCrash, faMotorcycle, faProcedures } from '@fortawesome/free-solid-svg-icons';
import {
    ProductLink,
    LinkText,
    LinkWrapper
} from '../../global/pageStyles';
import { Teaser } from './styles';

interface Props {
    title?: any;
}

export default function Insurance(props: Props): ReactElement {
    return (
        <>
            <Teaser>
                {props.title && props.title}
            </Teaser>
            <LinkWrapper>
                <ProductLink to='/versicherungen/kfz-versicherung'>
                    <FontAwesomeIcon icon={faCarCrash} size='6x' color='orange' />
                    <LinkText>Kfz-Versicherung</LinkText>
                </ProductLink>
                <ProductLink to='/versicherungen/motorrad-versicherung'>
                    <FontAwesomeIcon icon={faMotorcycle} size='6x' color='orange' />
                    <LinkText>Motorrad Versicherung</LinkText>
                </ProductLink>
                <ProductLink to='/versicherungen/vorsorgeversicherung'>
                    <FontAwesomeIcon icon={faProcedures} size='6x' color='orange' />
                    <LinkText>Vorsorgeversicherung</LinkText>
                </ProductLink>
            </LinkWrapper>
        </>
    )
}
