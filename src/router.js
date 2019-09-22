import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from 'components/Header/Header';
import styles from 'styles/container.scss';

// Pages
import HomeContainer from 'pages/Home/Home';
import ReposContainer from "pages/Repos/Repos";
import AuthorContainer from "pages/Author/Author";
import NoMatchPage from "pages/NoMatchPage/NoMatchPage";

export const routes = {
    repos: '/repos',
    author: '/author'
};

export default (
    <Router>
        <div className="app">
            <Header />
            <main className={styles.content}>
                <div className={styles.wrapper}>
                    <Switch>
                        <Route exact path="/" component={HomeContainer} />
                        <Route exact path={routes.repos} component={ReposContainer} />
                        <Route path={routes.repos + '/:user'} component={ReposContainer} />
                        <Route path={routes.author} component={AuthorContainer} />
                        <Route component={NoMatchPage}/>
                    </Switch>
                </div>
            </main>
        </div>
    </Router>
);
