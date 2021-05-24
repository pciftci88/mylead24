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
                <title>Kfz-Versicherung | MyLead24</title>
                <meta name="description" content="Finden Sie die beste und günstigste Versicherung für Ihr Auto." />
            </Helmet>
            {props.title && props.title}
            <WidgetInitializer
                id="tcpp-iframe-kfz"
                scripts='https://form.partner-versicherung.de/widgets/109564/tcpp-iframe-kfz/kfz-iframe.js'
            />
        </Content>
    )
}
