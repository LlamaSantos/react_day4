import React from 'react';
import Home from './Home';
import Router from 'react-router';
import SearchGithub from './SearchGithub';
let { RouteHandler } = Router;

export default React.createClass({
  render() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <SearchGithub />
          </div>
        </nav>
        <div className="container">
          <RouteHandler />
        </div>
      </div>
    );
  }
});
