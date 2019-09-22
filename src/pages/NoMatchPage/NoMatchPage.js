import React, {Component} from 'react';
// Styles
import styles from './NoMatchPage.scss';
import Card from "components/Card/Card";

export default class NoMatchPage extends Component {
    render() {
        return (
            <Card className={styles.notFound}>
                <div className={styles.code}>404</div>
                <p>We couldn't find this page.</p>
                <p>The page you are looking for does not exists.</p>
            </Card>
        );
    }
}
