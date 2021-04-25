import React, { ReactElement } from 'react';
import WidgetInitializer from '../../components/widget-initializer/WidgetInitializer';

interface Props {
    title?: any;
}

export default function Immobilien(props: Props): ReactElement {
    return (
        <div>
            {props.title && props.title}
            <WidgetInitializer id="tcpp-iframe-iv" scripts='https://form.partner-versicherung.de/widgets/109564/tcpp-iframe-iv/iv-iframe.js'></WidgetInitializer>
        </div>
    )
}

