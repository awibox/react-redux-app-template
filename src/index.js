import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store';
import router from './router';

ReactDOM.render(<Provider store={store}>{router}</Provider>, document.getElementById('root'));
