import React from 'react';
import {
    Product,
    ProductTitle,
    WidgetContainer,
    Widget,
    TravelWidget
} from './styles';
import ImageSlider from '../../components/image-slider/ImageSlider';
import Overview from '../../components/overview/Overview';
import { appendScript } from '../../utils/appendScript';

import '../../css/gas.css';
import '../../css/power.css';
import '../../css/dsl.css';
import '../../css/packagebillboard.css';
import '../../css/kredit-widget.css';

import TravellingBg from '../../images/homepage/travelling.jpg';
import HouseBg from '../../images/homepage/house.jpg';
import KreditDslBg from '../../images/homepage/kredit-dsl.jpg';

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
            'https://files.check24.net/widgets/175104/c24pp-package-widget56314/packagebillboard.js',
            'https://form.partner-versicherung.de/widgets/109564/tcpp-widget-kredit/kredit-widget.js'
        ];
        scripts.forEach((script) => appendScript(script));
    }

    render() {
        return (
            <>
                <ImageSlider />
                <Overview />
                <>
                    <Product bgImage={HouseBg}>
                        <ProductTitle>Strom & Gas</ProductTitle>
                        <WidgetContainer>
                            <Widget id="c24pp-power-widget83157" data-whitelabel="no" data-form="https://www.check24.net/strom-vergleich/"></Widget>
                            <Widget id="c24pp-gas-widget54602" data-whitelabel="no" data-form="https://www.check24.net/gasanbieter-vergleich/"></Widget>
                        </WidgetContainer>
                    </Product>
                    <Product bgImage={KreditDslBg}>
                        <ProductTitle>DSL & Kredite</ProductTitle>
                        <WidgetContainer>
                            <Widget id="c24pp-dsl-widget92794" data-whitelabel="no" data-form="https://www.check24.net/dsl-vergleich/"></Widget>
                            <Widget id="tcpp-widget-kredit" data-form="https://www.tarifcheck.de/kredit/ergebnis/" data-duration="12" data-purpose="4" data-amount="1000"></Widget>
                        </WidgetContainer>
                    </Product>
                    <Product bgImage={TravellingBg}>
                        <ProductTitle>Reisen</ProductTitle>
                        <WidgetContainer>
                            <TravelWidget id="c24pp-package-widget56314" data-whitelabel="no" data-form="https://www.check24.net/pauschalreisen-vergleich/"></TravelWidget>
                        </WidgetContainer>
                    </Product>
                </>
            </>
        );
    }
}

export default Homepage;