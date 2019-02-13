import * as React from 'react';
import './assets/scss/style.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Coctels } from './Coctels';
import { Beers } from './Beers';
import { Tapas } from './Tapas';
import { CoffeAndMore } from './CoffeAndMore';
import { Contact } from './Contact';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Route exact path="/coctels" component={Coctels} />
          <Route exact path="/tapas" component={Tapas} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/coffeandmore" component={CoffeAndMore} />
          <Route exact path="/contact" component={Contact} />
        </>
      </Router>
    );
  }
}
