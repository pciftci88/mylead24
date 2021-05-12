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
          <meta name="description" content="MyLead24 - Verlgiechen und Sparen: Versicherungen, Kredite, Strom-, DSL-Tarife, Mietwagen, Reisen und Flüge." />
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
                <Route exact path='/strom-gas' children={<Energy title={<Title>Strom & Gas Übersicht</Title>} />} />
                <Route exact path='/strom-gas/strom' children={<Strom title={<Title>Strom Übersicht</Title>} />} />
                <Route exact path='/strom-gas/oekostrom' children={<Oekostrom title={<Title>Ökostrom Übersicht</Title>} />} />
                <Route exact path='/strom-gas/gas' children={<Gas title={<Title>Gas Übersicht</Title>} />} />
                <Route exact path='/finanzen' children={<Finance title={<Title>Finanzübersicht</Title>} />} />
                <Route exact path='/finanzen/immobilien' children={<Immobilien title={<Title>Immobilien</Title>} />} />
                <Route exact path='/finanzen/baufinanzierung' children={<Baufinanzierung title={<Title>Baufinanzierung</Title>} />} />
                <Route exact path='/finanzen/kredite' children={<Kredite title={<Title>Kredite</Title>} />} />
                <Route exact path='/versicherungen' children={<Insurance title={<Title>Versicherungen</Title>} />} />
                <Route exact path='/versicherungen/kfz-versicherung' children={<CarInsurance title={<Title>Kfz-Versicherung</Title>} />} />
                <Route exact path='/versicherungen/motorrad-versicherung' children={<MotorcycleInsurancensurance title={<Title>Motorrad Versicherung</Title>} />} />
                <Route exact path='/versicherungen/vorsorgeversicherung' children={<PreventionInsurance title={<Title>Vorsorgeversicherung</Title>} />} />
                <Route exact path='/dsl' children={<DSL title={<Title>DSL-Vergleich</Title>} />} />
                <Route exact path='/reisen' children={<Travel title={<Title>Reisevergleich</Title>} />} />
                <Route exact path='/mietwagen' children={<RentalCar title={<Title>Mietwagen</Title>} />} />
                <Route exact path='/impressum' component={Impressum} />
                <Route exact path='/datenschutz' component={Datenschutz} />
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
