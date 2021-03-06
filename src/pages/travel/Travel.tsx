import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import WidgetInitializer from '../../components/widget-initializer/WidgetInitializer';
import { Teaser } from './styles';

interface Props {
    title?: any;
}

export default function Travel(props: Props): ReactElement {
    return (
        <>
            <Helmet>
                <title>Reisen | MyLead24</title>
                <meta name="description" content="Buchen Sie noch heute Ihren Traumurlaub." />
            </Helmet>
            <Teaser>
                {props.title && props.title}
            </Teaser>
            <WidgetInitializer
                id="c24pp-package-iframe"
                scripts='https://files.check24.net/widgets/auto/175104/c24pp-package-iframe/package-iframe.js'
                data-forward-url="no"
            />
        </>
    )
}
