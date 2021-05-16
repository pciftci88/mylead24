import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Content, Legend } from './styles';

import slideTravel from '../../images/mainslider/slide-travel.jpg';
import slideFinance from '../../images/mainslider/slide-finance.jpg';
import slideInternet from '../../images/mainslider/slide-internet.jpg';
import slideInsurance from '../../images/mainslider/slide-insurance.jpg';
import slidePower from '../../images/mainslider/slide-power.jpg';
import slideRentalCar from '../../images/mainslider/slide-rentalcar.jpg';
import slideTravelMob from '../../images/mainslider/slide-travel-mob.jpg';
import slideFinanceMob from '../../images/mainslider/slide-finance-mob.jpg';
import slideInternetMob from '../../images/mainslider/slide-internet-mob.jpg';
import slideInsuranceMob from '../../images/mainslider/slide-insurance-mob.jpg';
import slidePowerMob from '../../images/mainslider/slide-power-mob.jpg';
import slideRentalCarMob from '../../images/mainslider/slide-rentalcar-mob.jpg';

function ImageSlider() {
    return (
        <Content>
            <Carousel
                autoPlay
                infiniteLoop
                swipeable
                showThumbs={false}
                showStatus={false}
            >
                <div>
                    <picture>
                        <source media="(max-width:960px)" srcSet={slideTravelMob} />
                        <img src={slideTravel} alt="Finde die günstigsten Reisen und Hotels" title="Reise-Vergleich" />
                    </picture>
                    <Legend href="/reisen">Zum Reise-Vergleich</Legend>

                </div>
                <div>
                    <picture>
                        <source media="(max-width:960px)" srcSet={slideFinanceMob} />
                        <img src={slideFinance} alt="Finden Sie hier den günstigsten Kredit oder die passende Baufinanzierung " title="Finanz-Vergleich" />
                    </picture>
                    <Legend href="/finanzen">Zum Finanz-Vergleich</Legend>
                </div>
                <div>
                    <picture>
                        <source media="(max-width:960px)" srcSet={slideInternetMob} />
                        <img src={slideInternet} alt="Immer die schnellste und günstigste Verbindung im Haus mit dem DSL-Vergleich" title="DSL-Vergleich" />
                    </picture>
                    <Legend href="/dsl">Zum DSL-Vergleich</Legend>
                </div>
                <div>
                    <picture>
                        <source media="(max-width:960px)" srcSet={slideInsuranceMob} />
                        <img src={slideInsurance} alt="Die beste Versicherung für Ihre Vorsorge finden" title="Versicherungs-Vergleich" />
                    </picture>
                    <Legend href="/versicherungen">Zum Versicherungs-Vergleich</Legend>
                </div>
                <div>
                    <picture>
                        <source media="(max-width:960px)" srcSet={slidePowerMob} />
                        <img src={slidePower} alt="Ihr zu Hause immer rundum versorgt" title="Strom- und Gasvergleich" />
                    </picture>
                    <Legend href="/strom-gas">Zum Strom- und Gasvergleich</Legend>
                </div>
                <div>
                    <picture>
                        <source media="(max-width:960px)" srcSet={slideRentalCarMob} />
                        <img src={slideRentalCar} alt="Miete dir noch heute dein Traumauto zum besten Preis" title="Mietwagen Vergleich" />
                    </picture>
                    <Legend href="/mietwagen">Zum Mietwagen-Vergleich</Legend>
                </div>
            </Carousel>
        </Content>
    );
};

export default ImageSlider;