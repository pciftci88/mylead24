import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import WidgetInitializer from '../../components/widget-initializer/WidgetInitializer';
import { Content } from '../../global/pageStyles';

interface Props {
    title?: any;
}

export default function Baufinanzierung(props: Props): ReactElement {
    return (
        <Content>
            <Helmet>
                <title>Mortgage lending - Find the right financing for your own home</title>
                <meta name="description" content="Find the right financing for your home today." />
                <link rel="alternate" hrefLang="de" href="https://mylead24.de/finanzen/baufinanzierung" />
            </Helmet>
            {props.title && props.title}
            <WidgetInitializer id="tcpp-iframe-baufi" scripts='https://form.partner-versicherung.de/widgets/109564/tcpp-iframe-baufi/baufi-iframe.js' />
        </Content>
    )
}

