import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import WidgetInitializer from '../../components/widget-initializer/WidgetInitializer';
import { Content } from '../../global/pageStyles';

interface Props {
    title?: any;
}

export default function CarInsurance(props: Props): ReactElement {
    return (
        <Content>
            <Helmet>
                <title>Car insurace</title>
                <meta name="description" content="Find the best and cheapest insurance for your car." />
                <link rel="alternate" hrefLang="de" href="https://mylead24.de/versicherungen/kfz-versicherung" />
            </Helmet>
            {props.title && props.title}
            <WidgetInitializer
                id="tcpp-iframe-kfz"
                scripts='https://form.partner-versicherung.de/widgets/109564/tcpp-iframe-kfz/kfz-iframe.js'
            />
        </Content>
    )
}
