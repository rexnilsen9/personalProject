import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Landing from './Views/Landing/Landing';
import Profile from './Components/Profile/Profile';
import Cart from './Components/Cart/Cart';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <HashRouter>
          <Switch>
            <Route path='/' component={Landing} exact />
            <Route path='/profile' component={Profile} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </HashRouter>
      </div>

    );
  }
}

export default App;
