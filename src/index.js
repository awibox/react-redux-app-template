import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store';
import router from './router';
import './styles/build.scss';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(<Provider store={store}>{router}</Provider>, document.getElementById('root'));
