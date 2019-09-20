import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getRepos} from 'actions/repos';


import ReposCard from 'components/ReposCard/ReposCard';
import Title from "components/Title/Title";
import Card from "components/Card/Card";

class ReposContainer extends Component {
    static propTypes = {
        getRepos: PropTypes.func.isRequired,
        repos: PropTypes.array.isRequired,
    };
    
    componentDidMount() {
        const {user} = this.props.match.params;
        if(typeof user !== 'undefined') {
            this.props.getRepos(user);
        }
    }

    render() {
        const {repos, errors} = this.props;
        return (
            <div>
                <Title>Repositories</Title>
                {typeof errors.message !== 'undefined' && <div>{errors.message}</div>}
                <Card>
                    <Link to={'/repos/awibox'}>awibox</Link>
                    <Link to={'/repos/angular'}>angular</Link>
                </Card>
                {repos.length > 0 && repos.map(repo => {
                    let languageStyle;
                    if (repo.language === 'JavaScript') {
                        languageStyle = {
                            color: '#f1e05a'
                        }
                    } else if (repo.language === 'TypeScript'){
                        languageStyle = {
                            color: '#2b7489'
                        }
                    }
                    return (
                        <ReposCard key={repo.id + '_' + repo.name} repo={repo}  style={languageStyle} />
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = store => ({repos: store.reposState.repos, errors: store.errors});

export default connect(mapStateToProps, {getRepos})(ReposContainer);
