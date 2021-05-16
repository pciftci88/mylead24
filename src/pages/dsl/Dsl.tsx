import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import WidgetInitializer from '../../components/widget-initializer/WidgetInitializer';
import { Content } from '../../global/pageStyles';
import { Teaser } from './styles';

interface Props {
    title?: any;
}

export default function Dsl(props: Props): ReactElement {
    return (
        <>
            <Helmet>
                <title>Internet comparison - Fast internet for your home.</title>
                <meta name="description" content="Upgrade today and surf the internet faster" />
                <link rel="alternate" hrefLang="de" href="https://mylead24.de/dsl" />
            </Helmet>
            <Teaser>
                {props.title && props.title}
            </Teaser>
            <Content>
                <WidgetInitializer id="c24pp-dsl-iframe" scripts='https://files.check24.net/widgets/auto/175104/c24pp-dsl-iframe/dsl-iframe.js' />
            </Content>
        </>
    )
}
