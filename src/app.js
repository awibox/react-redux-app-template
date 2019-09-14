import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import { Home } from './pages/Home/Home';

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
          <Route exact path="/" component={ Home } />
        </Router>
      </Provider>
    );
  }
}

export default App;
