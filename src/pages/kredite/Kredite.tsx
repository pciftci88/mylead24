import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import WidgetInitializer from '../../components/widget-initializer/WidgetInitializer';
import { Content } from '../../global/pageStyles';

interface Props {
    title?: any;
}

export default function Kredite(props: Props): ReactElement {
    return (
        <Content>
            <Helmet>
                <title>Loans</title>
                <meta name="description" content="Get the loan with the cheapest interest rates." />
                <link rel="alternate" hrefLang="de" href="https://mylead24.de/finanzen/kredite" />
            </Helmet>
            {props.title && props.title}
            <WidgetInitializer
                id="tcpp-iframe-kredit"
                scripts='https://form.partner-versicherung.de/widgets/109564/tcpp-iframe-kredit/kredit-iframe.js'
                data-duration="12"
                data-purpose="4"
                data-amount="1000"
            ></WidgetInitializer>
        </Content>
    );
}
