import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import WidgetInitializer from '../../components/widget-initializer/WidgetInitializer';
import { Content } from '../../global/pageStyles';

interface Props {
    title?: any;
}

export default function MotorcycleInsurance(props: Props): ReactElement {
    return (
        <Content>
            <Helmet>
                <title>Motorrad-Versicherung</title>
                <meta name="description" content="Finden Sie die beste und günstigste Versicherung für Ihr Motorrad." />
            </Helmet>
            {props.title && props.title}
            <WidgetInitializer
                id="tcpp-iframe-mot"
                scripts='https://form.partner-versicherung.de/widgets/109564/tcpp-iframe-mot/mot-iframe.js'
            />
        </Content>
    )
}
