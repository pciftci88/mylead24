import React, { ReactElement } from 'react';
import { Teaser, Widget } from './styles';

interface Props {
    title?: any;
}

export default function RentalCar(props: Props): ReactElement {
    return (
        <>
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