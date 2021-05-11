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
                <title>Baufinanzierung - Die passende Finanzierung für das Eigenheim finden</title>
                <meta name="description" content="Finden Sie noch heute die richtige Finanzierung zu Ihrem Eigenheim." />
            </Helmet>
            {props.title && props.title}
            <WidgetInitializer id="tcpp-iframe-baufi" scripts='https://form.partner-versicherung.de/widgets/109564/tcpp-iframe-baufi/baufi-iframe.js' />
        </Content>
    )
}

