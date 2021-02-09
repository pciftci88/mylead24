import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import MobileHeader from './components/mobile-header/MobileHeader';

import { ContentWrapper } from './App.styles';

const Homepage = lazy(() => import('./pages/homepage/Homepage'));
const Energy = lazy(() => import('./pages/energy/Energy'));
const Finance = lazy(() => import('./pages/finance/Finance'));
const Insurance = lazy(() => import('./pages/insurance/Insurance'));
const Internet = lazy(() => import('./pages/internet/Internet'));
const Travel = lazy(() => import('./pages/travel/Travel'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  componentDidUpdate(prevProps) {
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
            <ContentWrapper>
              <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/strom-gas' component={Energy} />
                <Route exact path='/finanzen' component={Finance} />
                <Route exact path='/versicherungen' component={Insurance} />
                <Route exact path='/dsl' component={Internet} />
                <Route exact path='/reisen' component={Travel} />
              </Switch>
            </ContentWrapper>
          </BrowserRouter>
        </Suspense>
      </React.Fragment>
    );
  }
}

export default App;
