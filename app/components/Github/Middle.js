'use strict';

import React from 'react';
import githubStore from '../../stores/githubStore';
import noteActions from '../../actions/noteActions';
import githubActions from '../../actions/githubActions';

export default React.createClass({

  getInitialState() {
    return {
      repos: githubStore.getRepos(this.props.username)
    };
  },

  componentWillReceiveProps(obj) {
    githubActions.getUserRepos(obj.username);
  },

  componentDidMount() {
    githubStore.addChangeListener(this._onChange);
    githubActions.getUserRepos(this.props.username);
  },

  componentDidUnmount() {
    githubStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState({
      repos: githubStore.getRepos(this.props.username)
    });
  },

  render () {
    let repos = this.state.repos.map(function(repo, index){
        return (
          <li className="list-group-item" key={index}>
            {repo.html_url && <p><h4><a href={repo.html_url}>{repo.name}</a></h4></p>}
            {repo.description && <p> {repo.description} </p>}
          </li>
        );
      });
    return (
      <div>
        <h3> User Repos </h3>
        <ul className="list-group">
          {repos}
        </ul>
      </div>
    );
  }

});
