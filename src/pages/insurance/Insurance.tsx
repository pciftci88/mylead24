import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
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
            <Helmet>
                <title>Insurances overview</title>
                <meta name="description" content="Find the right insurance." />
                <link rel="alternate" hrefLang="de" href="https://mylead24.de/versicherungen" />
            </Helmet>
            <Teaser>
                {props.title && props.title}
            </Teaser>
            <LinkWrapper>
                <ProductLink to='/insurances/car-insurance'>
                    <FontAwesomeIcon icon={faCarCrash} size='6x' color='orange' />
                    <LinkText>Kfz-Versicherung</LinkText>
                </ProductLink>
                <ProductLink to='/insurances/motorcycle-insurance'>
                    <FontAwesomeIcon icon={faMotorcycle} size='6x' color='orange' />
                    <LinkText>Motorcycle insurance</LinkText>
                </ProductLink>
                <ProductLink to='/insurances/vorsorgeversicherung'>
                    <FontAwesomeIcon icon={faProcedures} size='6x' color='orange' />
                    <LinkText>Prevention insurance</LinkText>
                </ProductLink>
            </LinkWrapper>
        </>
    )
}
