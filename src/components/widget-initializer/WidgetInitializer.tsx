import React from 'react';
import { appendScript } from '../../utils/appendScript';
import { Widget } from './styles';

interface Props {
    id?: string;
    scripts?: any;
}
interface State {

}

export default class WidgetInitializer extends React.Component<Props, State> {
    state = {};

    componentDidMount() {
        const scripts: string[] = this.props.scripts;
        Array.isArray(scripts) ? (
            scripts.forEach((script) => appendScript(script))
        ) : (
            appendScript(scripts)
        );
    }

    render() {
        return (
            <Widget id={this.props.id} {...this.props}></Widget>
        )
    }
}
