import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

// Layouts
import MainLayout from './layouts/main';

// Pages
import HomeComponent from './pages/Home/Home';

export default (
    <Router>
        <Route component={MainLayout}>
            <Route exact path="/" component={ HomeComponent } />
        </Route>
    </Router>
);
