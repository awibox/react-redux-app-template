import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

// Pages
import HomeComponent from './pages/Home/Home';

export default (
    <Router>
        <Route exact path="/" component={ HomeComponent } />
    </Router>
);
