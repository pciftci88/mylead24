import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { Teaser, Widget } from './styles';

interface Props {
    title?: any;
}

export default function RentalCar(props: Props): ReactElement {
    return (
        <>
            <Helmet>
                <title>Rental car</title>
                <meta name="description" content="Rent your dream car today." />
                <link rel="alternate" hrefLang="de" href="https://mylead24.de/mietwagen" />
            </Helmet>
            <Teaser>
                {props.title && props.title}
            </Teaser>
            <Widget
                id='c24pp-rentalcar-iframe'
                scripts='https://files.check24.net/widgets/auto/175104/c24pp-rentalcar-iframe/rentalcar-iframe.js'
            />
        </>
    )
}
