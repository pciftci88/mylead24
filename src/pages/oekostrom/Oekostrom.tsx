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
                <title>Ökostrom-Tarife | MyLead24</title>
                <meta name="description" content="Finden Sie den passenden und günstigsten Ökostromtarif." />
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
