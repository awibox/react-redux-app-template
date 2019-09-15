import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import './styles/build.scss';
import styles from './styles/container.scss';

// Pages
import HomeComponent from './pages/Home/Home';
import Repos from "./pages/Repos/Repos";

export default (
    <Router>
        <div className="app">
            <Header />
            <main className={styles.content}>
                <div className={styles.wrapper}>
                    <Route exact path="/" component={HomeComponent} />
                    <Route path="/repos" component={Repos} />
                </div>
            </main>
        </div>
    </Router>
);
