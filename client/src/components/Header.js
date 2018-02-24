import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.png';

const LogoImage = styled.img`
  height: 24px;
`;

const Header = () => (
  <div className="navbar navbar-dark app-navbar navbar-expand-sm">
    <div className="container">
      <Link to="/" className="navbar-brand">
        {/* <LogoImage src={logo} alt="Logo" /> */}
        <h2 style={{marginBottom: '0px'}}>Coding Comrades</h2>
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link app-nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link app-nav-link" to="/another_page">
            Another page
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link app-nav-link" to="/login">
            Log in
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link app-nav-link" to="/search">
            Search
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
