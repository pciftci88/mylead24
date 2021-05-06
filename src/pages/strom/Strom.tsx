import React, { ReactElement } from 'react';
import WidgetInitializer from '../../components/widget-initializer/WidgetInitializer';
import { Content } from '../../global/pageStyles';

interface Props {
    title?: any;
}

export default function Strom(props: Props): ReactElement {
    return (
        <Content>
            {props.title && props.title}
            <WidgetInitializer
                id="c24pp-power-iframe"
                scripts='https://files.check24.net/widgets/auto/175104/c24pp-power-iframe/power-iframe.js'
            />
        </Content>
    )
}
