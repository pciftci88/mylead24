import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/header/Header';
import MobileHeader from './components/mobile-header/MobileHeader';
import Footer from './components/footer/Footer';

import { Title, Content, SuspenseLoader } from './App.styles';

const Homepage = lazy(() => import('./pages/homepage/Homepage'));
const Energy = lazy(() => import('./pages/energy/Energy'));
const Finance = lazy(() => import('./pages/finance/Finance'));
const Insurance = lazy(() => import('./pages/insurance/Insurance'));
const PreventionInsurance = lazy(() => import('./pages/prevention-insurance/PreventionInsurance'));
const DSL = lazy(() => import('./pages/dsl/Dsl'));
const Travel = lazy(() => import('./pages/travel/Travel'));
const Impressum = lazy(() => import('./pages/impressum/Impressum'));
const Datenschutz = lazy(() => import('./pages/datenschutz/Datenschutz'));
const Immobilien = lazy(() => import('./pages/immobilien/Immobilien'));
const Baufinanzierung = lazy(() => import('./pages/baufinanzierung/Baufinanzierung'));
const Kredite = lazy(() => import('./pages/kredite/Kredite'));
const Strom = lazy(() => import('./pages/strom/Strom'));
const Oekostrom = lazy(() => import('./pages/oekostrom/Oekostrom'));
const Gas = lazy(() => import('./pages/gas/Gas'));
const CarInsurance = lazy(() => import('./pages/car-insurance/CarInsurance'));
const MotorcycleInsurancensurance = lazy(() => import('./pages/motorcycle-insurance/MotorcycleInsurance'));
const RentalCar = lazy(() => import('./pages/rentalcar/RentalCar'));

interface propsTypes {
  location?: string
}

interface stateTypes {
  isMobile?: boolean;
}

class App extends React.Component<propsTypes, stateTypes> {
  constructor(props: any) {
    super(props);
    this.state = {
      isMobile: false
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  componentDidUpdate(prevProps: any) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.setState({ isMobile: window.innerWidth <= 1020 });
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>MyLead24 - Verlgiechen und Sparen</title>
          <meta name="description" content="MyLead24 - Compare and save: insurance, loans, electricity, internet, rental cars, travel and flights." />
        </Helmet>
        <Suspense fallback={<SuspenseLoader type="TailSpin" color="#16366F" height={100} width={100} />}>
          <BrowserRouter basename="/">
            {!this.state.isMobile ? (
              <Header />
            ) : (
              <MobileHeader />
            )}
            <Content>
              <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/electricity-gas' children={<Energy title={<Title>Electricity & gas overview</Title>} />} />
                <Route exact path='/electricity-gas/electricity' children={<Strom title={<Title>Electricity rates</Title>} />} />
                <Route exact path='/electricity-gas/eco-electricity' children={<Oekostrom title={<Title>Eco electricity rates</Title>} />} />
                <Route exact path='/electricity-gas/gas' children={<Gas title={<Title>Gas rates</Title>} />} />
                <Route exact path='/finance' children={<Finance title={<Title>Finance overview</Title>} />} />
                <Route exact path='/finance/property' children={<Immobilien title={<Title>Property</Title>} />} />
                <Route exact path='/finance/mortgage-lending' children={<Baufinanzierung title={<Title>Mortgage lending</Title>} />} />
                <Route exact path='/finance/loans' children={<Kredite title={<Title>Loans</Title>} />} />
                <Route exact path='/insurances' children={<Insurance title={<Title>Insurances</Title>} />} />
                <Route exact path='/insurances/car-insurance' children={<CarInsurance title={<Title>Car insurance</Title>} />} />
                <Route exact path='/insurances/motorcycle-insurance' children={<MotorcycleInsurancensurance title={<Title>Motorcycle insurance</Title>} />} />
                <Route exact path='/insurances/prevention-insurance' children={<PreventionInsurance title={<Title>Prevention insurance</Title>} />} />
                <Route exact path='/internet' children={<DSL title={<Title>Internet comparison</Title>} />} />
                <Route exact path='/travels' children={<Travel title={<Title>Travels comparison</Title>} />} />
                <Route exact path='/rental-car' children={<RentalCar title={<Title>Rental cars</Title>} />} />
                <Route exact path='/imprint' component={Impressum} />
                <Route exact path='/privacy' component={Datenschutz} />
              </Switch>
            </Content>
            <Footer />
          </BrowserRouter>
        </Suspense>
      </React.Fragment>
    );
  }
}

export default App;
