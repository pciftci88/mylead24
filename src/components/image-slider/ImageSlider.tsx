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
                        <img src={slideTravel} alt="Find the cheapest trips and hotels" title="Travels comparison" />
                    </picture>
                    <Legend href="/travels">To travel comparison</Legend>
                </div>
                <div>
                    <picture>
                        <source media="(max-width:960px)" srcSet={slideFinanceMob} />
                        <img src={slideFinance} alt="Find the cheapest credit for your use" title="Finance comparison" />
                    </picture>
                    <Legend href="/finance">To finance comparison</Legend>
                </div>
                <div>
                    <picture>
                        <source media="(max-width:960px)" srcSet={slideInternetMob} />
                        <img src={slideInternet} alt="Always the fastest and cheapest connection in your home with the internet comparison" title="Internet comparison" />
                    </picture>
                    <Legend href="/internet">To internet comparison</Legend>
                </div>
                <div>
                    <picture>
                        <source media="(max-width:960px)" srcSet={slideInsuranceMob} />
                        <img src={slideInsurance} alt="Find the best insurance for your pension" title="Insurance comparison" />
                    </picture>
                    <Legend href="/insurances">To insurance comparison</Legend>
                </div>
                <div>
                    <picture>
                        <source media="(max-width:960px)" srcSet={slidePowerMob} />
                        <img src={slidePower} alt="Your home is always fully supplied with electricity and gas" title="Electricity & gas" />
                    </picture>
                    <Legend href="/electricity-gas">To energy & gas comparison</Legend>
                </div>
                <div>
                    <picture>
                        <source media="(max-width:960px)" srcSet={slideRentalCarMob} />
                        <img src={slideRentalCar} alt="Rent your dream car today at the best price" title="Rental car comparison" />
                    </picture>
                    <Legend href="/rental-car">To rental car comparison</Legend>
                </div>
            </Carousel>
        </Content>
    );
};

export default ImageSlider;