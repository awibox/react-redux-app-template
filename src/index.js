import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store';
import RouterComponent from './router';
// Styles
import 'styles/build.scss';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(<Provider store={store}><RouterComponent/></Provider>, document.getElementById('root'));
