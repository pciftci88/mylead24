import React, { ReactElement } from 'react';
import WidgetInitializer from '../../components/widget-initializer/WidgetInitializer';
import { Content } from '../../global/pageStyles';

interface Props {
    title?: any;
}

export default function Baufinanzierung(props: Props): ReactElement {
    return (
        <Content>
            {props.title && props.title}
            <WidgetInitializer
                id="c24pp-package-iframe"
                scripts='https://files.check24.net/widgets/auto/175104/c24pp-package-iframe/package-iframe.js'
                data-forward-url="no"
            />
        </Content>
    )
}
