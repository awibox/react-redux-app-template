import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';

import { HomeComponent } from './pages/Home/Home';

class App extends Component {
  render() {
      console.log('APP WORK')
    return (
      <Provider store = { store }>
          {router}
      </Provider>
    );
  }
}

export default App;
