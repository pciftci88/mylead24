import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import MobileHeader from './components/mobile-header/MobileHeader';
import Footer from './components/footer/Footer';

import { Title, Content } from './App.styles';

const Homepage = lazy(() => import('./pages/homepage/Homepage'));
const Energy = lazy(() => import('./pages/energy/Energy'));
const Finance = lazy(() => import('./pages/finance/Finance'));
const Insurance = lazy(() => import('./pages/insurance/Insurance'));
const DSL = lazy(() => import('./pages/dsl/Dsl'));
const Travel = lazy(() => import('./pages/travel/Travel'));
const Impressum = lazy(() => import('./pages/impressum/Impressum'));
const Datenschutz = lazy(() => import('./pages/datenschutz/Datenschutz'));
const Immobilien = lazy(() => import('./pages/immobilien/Immobilien'));
const Baufinanzierung = lazy(() => import('./pages/baufinanzierung/Baufinanzierung'));
const Kredite = lazy(() => import('./pages/kredite/Kredite'));

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
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter basename="/">
            {!this.state.isMobile ? (
              <Header />
            ) : (
              <MobileHeader />
            )}
            <Content>
              <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/strom-gas' component={Energy} />
                <Route exact path='/finanzen' component={Finance} />
                <Route exact path='/finanzen/immobilien' children={<Immobilien title={<Title>Immobilien</Title>} />} />
                <Route exact path='/finanzen/baufinanzierung' children={<Baufinanzierung title={<Title>Baufinanzierung</Title>} />} />
                <Route exact path='/finanzen/kredite' children={<Kredite title={<Title>Kredite</Title>} />} />
                <Route exact path='/versicherungen' component={Insurance} />
                <Route exact path='/dsl' children={<DSL title={<Title>DSL</Title>} />} />
                <Route exact path='/reisen' children={<Travel title={<Title>Reisevergleich</Title>} />} />
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
