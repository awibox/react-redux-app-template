import React, {Component} from 'react';
import styles from './HomeInfo.scss';
import Button from "../Button/Button";
import PropTypes from "prop-types";
import Card from "../Card/Card";

// Using "Stateless Functional Components"
export default class HomeContainer extends Component {
  static propTypes = {
    home: PropTypes.any.isRequired,
  };

  buttonClick(url) {
    window.open(url);
  }

  render() {
    const {home} = this.props;
    return (
        <div className={styles.homeInfo}>
          <Card>
            <div className={styles.homeLogo}>
              <div className={styles.image}>
                <i className="fa fa-gears"></i>
              </div>
              <h1 className={styles.name}>{home.name}</h1>
              <div className={styles.text}>{home.description}</div>
              <div className={styles.button}>
                <Button icon="fa-github" onClick={()=>this.buttonClick(home.html_url)}>
                  Download with Github
                </Button>
              </div>
            </div>
          </Card>
        </div>
    );
  }
}
