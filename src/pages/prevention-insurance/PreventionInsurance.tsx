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
                <title>Vorsorgeversicherung | MyLead24</title>
                <meta name="description" content="Sichern Sie sich bestens für das Alter ab." />
            </Helmet>
            {props.title && props.title}
            <WidgetInitializer
                id="tcpp-iframe-rente"
                scripts='https://form.partner-versicherung.de/widgets/109564/tcpp-iframe-rente/rente-iframe.js'
            />
        </Content>
    )
}
