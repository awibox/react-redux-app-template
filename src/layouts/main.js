import React, {Component} from 'react';
import Header from '../components/Header/Header';
// import './../sass/build.scss';

export default class MainLayout extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <main className="content">
                    <div className="wrapper">
                        {this.props.children}
                    </div>
                </main>
            </div>
        );
    }
};
