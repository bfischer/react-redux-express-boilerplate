import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RespositoryListItem from './RepositoryListItem';
import './Search.css'


export default class Repositories extends Component {
  componentDidMount() {

  }

  render() {
    return (
        <section className="repositories-wrapper">
            <ul className="repositories">
                {
                    this.props.items.map(function(repo) {
                        return <RespositoryListItem key={repo.id}
                         fullName={repo.full_name} 
                         stars={repo.stargazers_count}
                         avatar={repo.owner.avatar_url}
                         watchers={repo.watchers_count}
                         url={repo.html_url} 
                         description={repo.description}/>
                    })
                }
            </ul>
            <div className="pagination">
                {/* <Button onClick={onPageDecrease}>Previous</Button>
                <span>{`Page ${page}`}</span>
                <Button onClick={onPageIncrease}>Next</Button> */}
            </div>
        </section>
    );
  }
}


