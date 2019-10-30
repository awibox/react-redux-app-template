import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components
import Header from 'components/Header/Header';
// Pages
import HomeContainer from 'pages/Home/Home';
import ReposContainer from 'pages/Repos/Repos';
import AuthorContainer from 'pages/Author/Author';
import NotFound from 'pages/NotFound/NotFound';
// Styles
import styles from 'styles/container.scss';
// Config
import { routes } from './config';

const RouterComponent = () => (
  <Router>
    <div className="app">
      <Header/>
      <main className={styles.content}>
        <div className={styles.wrapper}>
          <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path={routes.repos} component={ReposContainer}/>
            <Route path={`${routes.repos}/:user`} component={ReposContainer}/>
            <Route path={routes.author} component={AuthorContainer}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </main>
    </div>
  </Router>
);
export default RouterComponent;
