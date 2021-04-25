import React, { ReactElement } from 'react';
import WidgetInitializer from '../../components/widget-initializer/WidgetInitializer';

interface Props {
    title?: any;
}

export default function Baufinanzierung(props: Props): ReactElement {
    return (
        <div>
            ⁄{props.title && props.title}
            <WidgetInitializer id="tcpp-iframe-baufi" scripts='https://form.partner-versicherung.de/widgets/109564/tcpp-iframe-baufi/baufi-iframe.js' />
        </div>
    )
}

