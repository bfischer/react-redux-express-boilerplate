import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './Header';
import { login } from '../actions';


class Login extends Component {
  componentDidMount() {
   // this.props.login();
   window.location.href = 'http://www.google.com'
  }

  render() {
    return (
      <div className="login">
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, { login })(Login);
