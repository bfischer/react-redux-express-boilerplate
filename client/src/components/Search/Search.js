import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { login } from '../../actions';
import SearchCriteria from './SearchCriteria';
import Repositories from './Repositories';
import axios from 'axios';


import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            repositories: [],
        }
    }

    componentDidMount() {

    }

    handleButtonClick() {
        const self = this;
        axios.get('https://api.github.com/search/repositories?q=react-inline&sort=stars&order=desc', { headers: { 'Authorization': 'token ' + '' } })
            .then(function (response) {
                console.error(response);

                self.setState({
                    repositories: response.data.items,
                })
            })
            .catch(function (error) {
                console.error(error);
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick.bind(this)}>Get Repos</button>

                <div className="main">
                    <SearchCriteria />
                    <Repositories items={this.state.repositories} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { test } = state;
    return {
        test,
    };
}

Search.propTypes = {
    login: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, { login })(Search);
