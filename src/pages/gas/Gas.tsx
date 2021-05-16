import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import WidgetInitializer from '../../components/widget-initializer/WidgetInitializer';
import { Content } from '../../global/pageStyles';

interface Props {
    title?: any;
}

export default function Gas(props: Props): ReactElement {
    return (
        <Content>
            <Helmet>
                <title>Gas rates</title>
                <meta name="description" content="Get the best gas rate for your home." />
                <link rel="alternate" hrefLang="de" href="https://mylead24.de/strom-gas/gas" />
            </Helmet>
            {props.title && props.title}
            <WidgetInitializer
                id="c24pp-gas-iframe"
                scripts='https://files.check24.net/widgets/auto/175104/c24pp-gas-iframe/gas-iframe.js'
            />
        </Content>
    )
}
