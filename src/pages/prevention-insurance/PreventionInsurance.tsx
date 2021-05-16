import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import WidgetInitializer from '../../components/widget-initializer/WidgetInitializer';
import { Content } from '../../global/pageStyles';

interface Props {
    title?: any;
}

export default function PreventionInsurance(props: Props): ReactElement {
    return (
        <Content>
            <Helmet>
                <title>Prevention insurance</title>
                <meta name="description" content="Protect yourself well for old age." />
                <link rel="alternate" hrefLang="de" href="https://mylead24.de/versicherungen/vorsorgeversicherung" />
            </Helmet>
            {props.title && props.title}
            <WidgetInitializer
                id="tcpp-iframe-rente"
                scripts='https://form.partner-versicherung.de/widgets/109564/tcpp-iframe-rente/rente-iframe.js'
            />
        </Content>
    )
}
