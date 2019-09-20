import React, {Component} from 'react';
import styles from './HomeInfo.scss';
import Button from "../Button/Button";
import PropTypes from "prop-types";

// Using "Stateless Functional Components"
export default class HomeContainer extends Component {
  static propTypes = {
    home: PropTypes.any.isRequired,
    buttonClick: PropTypes.func.isRequired,
  };

  buttonClick(url) {
    window.open(url);
  }

  render() {
    const {home, buttonClick} = this.props;
    return (
        <div className={styles.homeInfo}>
          <div className={styles.homeCard}>
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
          </div>
        </div>
    );
  }
}
