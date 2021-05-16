import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import WidgetInitializer from '../../components/widget-initializer/WidgetInitializer';
import { Content } from '../../global/pageStyles';

interface Props {
    title?: any;
}

export default function Immobilien(props: Props): ReactElement {
    return (
        <Content>
            <Helmet>
                <title>Property - Find the right property</title>
                <meta name="description" content="Find your home today." />
                <link rel="alternate" hrefLang="de" href="https://mylead24.de/finanzen/immobilien" />
            </Helmet>
            {props.title && props.title}
            <WidgetInitializer id="tcpp-iframe-iv" scripts='https://form.partner-versicherung.de/widgets/109564/tcpp-iframe-iv/iv-iframe.js'></WidgetInitializer>
        </Content>
    )
}

