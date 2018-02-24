import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './Header';
import { fetchTest } from '../actions';
import axios from 'axios';

const MessageBox = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  padding: 40px;
  text-align: center;
  background-color: linen;
  color: paleVioletRed;
  border-radius: 20px;
  width: 400px;
`;

const Message = styled.span`
  font-weight: 700;
  color: maroon;
`;

class Home extends Component {
  componentDidMount() {
    this.props.fetchTest();
  }

  handleButtonClick() {
    axios.get('https://api.github.com/search/repositories?q=react-inline', { headers: { 'Authorization': 'token ' + '684cedad14607e97af4708a04b66559976f22f81' } })
    .then(function(response) {
      console.error(response);
    })
    .catch(function(error) {
      console.error(error);
    })
  }

  render() {
    const { message } = this.props.test;
    return (
      <div className="Home">
        <div className="container">
          <MessageBox className="col-sm-8 col-sm-offset-2">
            Message from API: <Message>{message}</Message>
          </MessageBox>
        </div>

        <button onClick={this.handleButtonClick.bind(this)}>
          Test
        </button>
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

Home.propTypes = {
  fetchTest: PropTypes.func.isRequired,
  test: PropTypes.shape({
    message: PropTypes.string,
  }),
};

Home.defaultProps = {
  test: null,
};

export default connect(mapStateToProps, { fetchTest })(Home);
