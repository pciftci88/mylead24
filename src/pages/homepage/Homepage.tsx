import React from 'react';
import {
    Content,
    Product,
    ProductTitle,
    WidgetContainer,
    Widget,
    TravelWidget
} from './styles';
import ImageSlider from '../../components/image-slider/ImageSlider';
import { appendScript } from '../../utils/appendScript';

import '../../css/gas.css';
import '../../css/power.css';
import '../../css/dsl.css';
import '../../css/packagebillboard.css';

import TravellingBg from '../../images/homepage/travelling.jpg';
import HouseBg from '../../images/homepage/house.jpg';

interface Props {

}
interface State {

}

class Homepage extends React.Component<Props, State> {
    state = {};

    componentDidMount() {
        const scripts: string[] = [
            'https://files.check24.net/widgets/175104/c24pp-gas-widget54602/gas.js',
            'https://files.check24.net/widgets/175104/c24pp-power-widget83157/power.js',
            'https://files.check24.net/widgets/175104/c24pp-dsl-widget92794/dsl.js',
            'https://files.check24.net/widgets/175104/c24pp-package-widget56314/packagebillboard.js'
        ];
        scripts.forEach((script) => appendScript(script));
    }

    render() {
        return (
            <Content>
                <ImageSlider />
                <React.Fragment>
                    <Product withBackground={true} bgImage={HouseBg}>
                        <ProductTitle>Strom, Gas & DSL</ProductTitle>
                        <WidgetContainer>
                            <Widget id="c24pp-power-widget83157" data-whitelabel="no" data-form="https://www.check24.net/strom-vergleich/" ></Widget>
                            <Widget id="c24pp-gas-widget54602" data-whitelabel="no" data-form="https://www.check24.net/gasanbieter-vergleich/" ></Widget>
                            <Widget id="c24pp-dsl-widget92794" data-whitelabel="no" data-form="https://www.check24.net/dsl-vergleich/" ></Widget>
                        </WidgetContainer>
                    </Product>
                    <Product withBackground={true} bgImage={TravellingBg}>
                        <ProductTitle>Reisen</ProductTitle>
                        <WidgetContainer>
                            <TravelWidget id="c24pp-package-widget56314" data-whitelabel="no" data-form="https://www.check24.net/pauschalreisen-vergleich/"></TravelWidget>
                        </WidgetContainer>
                    </Product>
                </React.Fragment>
            </Content>
        );
    }
}

export default Homepage;