import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Slider from './Slider';
import './Search.css'


export default class SearchCriteria extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <section className="search-criteria">
                <Slider data={{
                    min: 0,
                    max: 50,
                    step: 5,
                    value: 5,
                    label: 'Issues'
                    
                }}
                onChange={() => {}} />

                <Slider data={{
                    min: 0,
                    max: 50,
                    step: 5,
                    value: 45,
                    label: 'Stars'
                }}
                onChange={() => {}} />

                <Slider data={{
                    min: 0,
                    max: 50,
                    step: 5,
                    value: 20,
                    label: 'Watchers'
                }}
                onChange={() => {}} />
            </section>
        );
    }
}


