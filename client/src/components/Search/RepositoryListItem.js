import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './Search.css'


export default class RepositoryListItem extends Component {
    componentDidMount() {

    }

    render() {
        const { fullName, stars, avatar, watchers, url, description } = this.props;

        return (
            <li className="movie-item">
                {/* <Link to={`/movie/${'id'}`} className="thumbnail"> */}
                {/* <img src={avatar} alt={'title'} /> */}
                <a href={url}>
                    <div className="movie-description">
                        <div className="repository-details">
                            <h2>{fullName}</h2>
                            <span className="repository-description">{description}</span>
                        </div>
                        <div className="movie-details">
                            <div className="movie-year">
                                <span className="title">Watchers  <span className="fa fa-eye"></span></span>
                                <span>{watchers}</span>
                            </div>
                            <div className="movie-rating">
                                <span className="title">Stars  <span className="fa fa-star"></span></span>
                                <span>{stars}</span>
                            </div>
                        </div>
                        {/* <div className="repository-information">
                            <div className="repository-watchers">
                                <span className="title">Watchers</span>
                                <span>{watchers}</span>
                            </div>
                            <div className="repository-stars">
                                <span className="title">Stars</span>
                                <span>{stars}</span>
                            </div>
                        </div> */}
                    </div>
                </a>
                {/* </Link> */}
            </li>
        );
    }
}





