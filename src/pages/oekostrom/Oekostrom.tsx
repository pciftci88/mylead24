import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import WidgetInitializer from '../../components/widget-initializer/WidgetInitializer';
import { Content } from '../../global/pageStyles';

interface Props {
    title?: any;
}

export default function Oekostrom(props: Props): ReactElement {
    return (
        <Content>
            <Helmet>
                <title>Eco electricity rates</title>
                <meta name="description" content="Find the right and cheapest eco electricity rate." />
                <link rel="alternate" hrefLang="de" href="https://mylead24.de/strom-gas/oekostrom" />
            </Helmet>
            {props.title && props.title}
            <WidgetInitializer
                id="c24pp-power-iframe"
                scripts='https://files.check24.net/widgets/auto/175104/c24pp-power-iframe/power-iframe.js'
                data-eco="yes"
            />
        </Content>
    )
}
